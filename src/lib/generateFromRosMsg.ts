import { MessageDefinition, MessageDefinitionField } from '@foxglove/message-definition';
import { parse, } from '@foxglove/rosmsg';
import { camelCase, compact, partition, upperFirst } from 'lodash';

import { IConfig } from '../types/config';

import { primitives1, primitives2 } from './primitives';

const SUPPORTED_ROS_VERSIONS = [1, 2];

const rosNameToTypeName = (rosName: string, prefix = '') =>
  `${prefix}${upperFirst(camelCase(rosName))}`;

/** Take in a ros definition string and generates a typescript interface */
export const generateFromRosMsg = (
  rosDefinition: string,
  typePrefix = '',
  rosVersion: IConfig['rosVersion'] = 2
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

  return fullMessageDefinitions
    .map((definition) => {
      if (!definition) return '\n';
      // Get the interface key
      const typeName = rosNameToTypeName(definition.name || '', typePrefix);

      // Find the constant and variable definitions
      const [defConstants, defTypes] = partition(
        definition.definitions,
        (field) => field.isConstant
      );

      // Generate the ts types for the key val items
      const tsTypes = defTypes
        .filter((defType) => isOfNoneEmptyType(defType))
        .map((param) => {
          const paramType: string =
            param.type in primitives
              ? primitives[param.type as keyof typeof primitives]
              : rosNameToTypeName(param.type, typePrefix);

          const arrayMarker = param.isArray ? '[]' : '';
          return `  ${param.name}: ${paramType}${arrayMarker};`;
        })
        .join('\n');

      const tsEnum = defConstants
        .map((param) => {
          return `  ${param.name} = ${toEnumValue(param)},`;
        })
        .join('\n');

      const tsTypeFinal =
        tsTypes.length > 0 &&
        `export interface ${typeName} {
${tsTypes}
}`;

      const tsEnumFinal =
        tsEnum.length > 0 &&
        `export enum ${typeName}Const {
${tsEnum}
}`;

      return compact([tsTypeFinal, tsEnumFinal]).join('\n\n');
    })
    .filter((item) => item)
    .sort()
    .join('\n\n');
};
