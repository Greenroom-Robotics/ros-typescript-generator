import {
  MessageDefinition,
  MessageDefinitionField,
} from '@foxglove/message-definition';
import { parse } from '@foxglove/rosmsg';
import { camelCase, compact, partition, snakeCase, upperFirst } from 'lodash';

import { IConfig } from '../types/config';

import { primitives1, primitives2 } from './primitives';

const SUPPORTED_ROS_VERSIONS = [1, 2];

const rosNameToTypeName = (
  rosName: string,
  prefix = '',
  includePackageName = true
) => {
  if (!includePackageName) {
    rosName = rosName.split('/').slice(-1)[0];
  }
  return `${prefix}${upperFirst(camelCase(rosName))}`;
};

const pascalCase = (str: string) => upperFirst(camelCase(str));

const indent = (str: string, width: number) => {
  const padding = ' '.repeat(width);
  return str
    .split('\n')
    .map((l) => `${padding}${l}`)
    .join('\n');
};

/** Take in a ros definition string and generates a typescript interface */
export const generateFromRosMsg = (
  rosDefinition: string,
  typePrefix = '',
  rosVersion: IConfig['rosVersion'] = 2,
  useNamespaces = false,
  smartEnums = false
) => {
  if (!SUPPORTED_ROS_VERSIONS.includes(rosVersion)) {
    throw new Error('Unsupported rosVersion');
  }

  const messageDefinitions = parse(rosDefinition, { ros2: rosVersion === 2 });
  const primitives = rosVersion === 1 ? primitives1 : primitives2;

  function isOfNoneEmptyType(field: MessageDefinitionField): boolean {
    if (!field.isComplex) {
      return true;
    }

    const definition = messageDefinitions.find((definition) => {
      return definition.name === field.type;
    });

    if (definition) {
      return definition.definitions.length > 0;
    }

    throw new Error(
      `Field with type "${field.type}" doesn't exist in message definitions`
    );
  }

  function toEnumValue(field: MessageDefinitionField) {
    if (field.type === 'bool') {
      return field.value ? 1 : 0;
    }
    if (
      field.type === 'char' ||
      field.type === 'wchar' ||
      field.type === 'string' ||
      field.type === 'wstring'
    ) {
      return `'${field.value}'`;
    }

    return field.value;
  }

  function enumEntriesFromFields(fields: readonly MessageDefinitionField[]) {
    return fields
      .map((field) => {
        return `  ${field.name} = ${toEnumValue(field)},`;
      })
      .join('\n');
  }

  const serviceRequests = messageDefinitions.filter((def) =>
    def.name?.endsWith('_Request')
  );

  const serviceResponses = messageDefinitions.filter((def) =>
    def.name?.endsWith('_Response')
  );

  const serviceDefinitions = serviceRequests.map<MessageDefinition | undefined>(
    (request) => {
      // Grab the First Response that matches the request
      const response = serviceResponses.filter(
        (res) => res.name === request.name?.replace('_Request', '_Response')
      )[0];
      if (!response) return;

      return {
        name: request.name?.replace('_Request', ''),
        definitions: [
          {
            name: 'request',
            isComplex: true,
            isArray: false,
            type: request.name ?? '',
          },
          {
            name: 'response',
            isComplex: true,
            isArray: false,
            type: response.name ?? '',
          },
        ],
      };
    }
  );

  const fullMessageDefinitions = [...messageDefinitions, ...serviceDefinitions];

  const interfacesByPackage = fullMessageDefinitions
    .map((definition) => {
      if (!definition) return '\n';
      // Get the interface key
      const typeName = rosNameToTypeName(
        definition.name || '',
        typePrefix,
        !useNamespaces
      );
      const pkgName = pascalCase(definition.name!.split('/')[0]);

      // Find the constant and variable definitions
      // eslint-disable-next-line prefer-const
      let [defConstants, defTypes] = partition(
        definition.definitions,
        (field) => field.isConstant
      );

      // enums which have been intelligently matched by the algorithms below
      const generatedEnums: readonly string[] = [];
      if (smartEnums) {
        // === Enum matching algorithm 1 ===
        // First attempt to group constants together as semantically
        // correct enums. The idea behind this is: If there are several
        // constants of a type that's only used by a single field, then
        // these constants must be an enum for that field.
        const constants_by_type = new Map<string, MessageDefinitionField[]>();
        const fields_by_type = new Map<string, MessageDefinitionField[]>();

        for (const c of definition.definitions) {
          const type = `${c.type}${c.isArray ? '[]' : ''}`;
          if (!constants_by_type.has(type)) {
            constants_by_type.set(type, []);
            fields_by_type.set(type, []);
          }
          if (c.isConstant) {
            constants_by_type.get(type)!.push(c);
          } else {
            fields_by_type.get(type)!.push(c);
          }
        }

        for (const type of fields_by_type.keys()) {
          if (
            fields_by_type.get(type)!.length === 1 &&
            constants_by_type.get(type)!.length > 1
          ) {
            // A field is the only one of its type in this
            // message, so all constants of that type must
            // be its possible values.
            const field = fields_by_type.get(type)![0];
            field.type = rosNameToTypeName(`${typeName}_${field.name}`);
            (field as any).typeAdjusted = true;
            defConstants = defConstants.filter(
              (c) => !constants_by_type.get(type)!.includes(c)
            );
            generatedEnums.push(`export enum ${field.type} {
${enumEntriesFromFields(constants_by_type.get(type)!)}
}`);
          }
        }

        // === Enum matching algorithm 2 ===
        // Second attempt: Try to match them by name prefix. If we have a type
        //   string direction
        //   string status
        // and constants
        //   string STATUS_OK = "ok"
        //   string STATUS_ERR = "err"
        //   string DIRECTION_LEFT = "left"
        //   string DIRECTION_RIGHT = "right"
        // we can assume the constants that have a field name as a prefix
        // belong to that field as enum variants.
        for (const field of definition.definitions) {
          if (field.isConstant) {
            continue;
          }
          const type = `${field.type}${field.isArray ? '[]' : ''}`;
          const candidates: readonly MessageDefinitionField[] = [];
          const prefix = `${snakeCase(field.name).toLocaleUpperCase()}_`;
          for (const c of constants_by_type.get(type) || []) {
            if (c.name.startsWith(prefix)) {
              candidates.push(c);
            }
          }
          if (candidates.length > 1) {
            field.type = rosNameToTypeName(`${typeName}_${field.name}`);
            (field as any).typeAdjusted = true;
            defConstants = defConstants.filter((c) => !candidates.includes(c));
            const candidates_without_prefix = candidates.map((c) => {
              return {
                ...c,
                name: c.name.slice(prefix.length),
              };
            });
            generatedEnums.push(`export enum ${field.type} {
${enumEntriesFromFields(candidates_without_prefix)}
}`);
          }
        }

        // === End of enum → field matching algorithms ===
      }

      // Generate the ts types for the key val items
      const tsTypes = defTypes
        .filter((defType) => isOfNoneEmptyType(defType))
        .map((param) => {
          const paramType: string =
            param.type in primitives
              ? primitives[param.type as keyof typeof primitives]
              : useNamespaces
              ? param.type.split('/')[0] === pkgName
                ? pascalCase(param.type.split('/')[1])
                : param.type.split('/').map(pascalCase).join('.')
              : rosNameToTypeName(
                  param.type,
                  (param as any)['typeAdjusted'] === true ? '' : typePrefix
                );
          const arrayMarker = param.isArray ? '[]' : '';
          return `  ${param.name}: ${paramType.replace(
            '.',
            `.${typePrefix}`
          )}${arrayMarker};`;
        })
        .join('\n');

      const tsRemainingEnum = enumEntriesFromFields(defConstants);

      const tsTypeFinal =
        tsTypes.length > 0 &&
        `export interface ${typeName} {
${tsTypes}
}`;

      const tsRemainingEnumFinal =
        tsRemainingEnum.length > 0 &&
        `export enum ${typeName}Const {
${tsRemainingEnum}
}`;

      return [
        pkgName,
        compact([tsTypeFinal, ...generatedEnums, tsRemainingEnumFinal]).join(
          '\n\n'
        ),
      ];
    })
    .filter((item) => !!item[1])
    .sort()
    .reduce((interfacesByPackage, [pkgName, iface]) => {
      if (!interfacesByPackage.has(pkgName)) {
        interfacesByPackage.set(pkgName, []);
      }
      interfacesByPackage.get(pkgName)!.push(iface);
      return interfacesByPackage;
    }, new Map<string, readonly string[]>());

  return Array.from(interfacesByPackage.entries())
    .map(([pkgName, ifaces]) => {
      if (useNamespaces) {
        return `export namespace ${pascalCase(pkgName)} {
${ifaces.map((iface) => indent(iface, 2)).join('\n\n')}
}`;
      } else {
        return ifaces.join('\n\n');
      }
    })
    .join('\n\n');
};
