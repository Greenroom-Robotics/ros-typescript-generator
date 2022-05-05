import { parse } from '@foxglove/rosmsg';
import { camelCase, compact, partition, upperFirst } from 'lodash';

import { primitives } from './primitives';

const rosNameToTypeName = (rosName: string, prefix = '') =>
  `${prefix}${upperFirst(camelCase(rosName))}`;

/** Take in a ros definition string and generates a typescript interface */
export const generateFromRosMsg = (
  rosDefinition: string,
  typePrefix = '',
  ros2 = true
) => {
  const messageDefinitions = parse(rosDefinition, { ros2 });

  return messageDefinitions
    .map((definition) => {
      // Get the interface key
      const typeName = rosNameToTypeName(definition.name || '', typePrefix);

      // Find the constant and variable definitions
      const [defConstants, defType] = partition(
        definition.definitions,
        (item) => item.isConstant
      );

      // Generate the ts types for the key val items
      const tsTypes = defType
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
