import { parse } from '@foxglove/rosmsg';
import { camelCase, upperFirst } from 'lodash';

import { primitives } from './primitives';

const rosNameToTypeName = (rosName: string, prefix = '') =>
  `${prefix}${upperFirst(camelCase(rosName))}`;

/** Take in a ros definition string and generates a typescript interface */
export const generateFromRosMsg = (rosDefinition: string, typePrefix = '') => {
  const messageDefinitions = parse(rosDefinition, { ros2: true });
  return messageDefinitions
    .map((definition) => {
      // Get the interface key
      const typeName = rosNameToTypeName(definition.name || '', typePrefix);
      // Get the interface value (the type)
      const typeKeyValues = definition.definitions
        .map((param) => {
          const paramType: string =
            param.type in primitives
              ? primitives[param.type as keyof typeof primitives]
              : rosNameToTypeName(param.type, typePrefix);

          const arrayMarker = param.isArray ? '[]' : '';
          return `  ${param.name}: ${paramType}${arrayMarker};`;
        })
        .join('\n');
      return `export interface ${typeName} {
${typeKeyValues}
}`;
    })
    .sort()
    .join('\n\n');
};
