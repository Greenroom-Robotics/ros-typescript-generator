import { parse, RosMsgField } from '@foxglove/rosmsg';
import { camelCase, compact, partition, upperFirst } from 'lodash';

import { IConfig } from '../types/config';

import { primitives } from './primitives';

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

  function isOfNoneEmptyType(field: RosMsgField): boolean {
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

  return messageDefinitions
    .map((definition) => {
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
          return `  ${param.name} = ${param.value},`;
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
