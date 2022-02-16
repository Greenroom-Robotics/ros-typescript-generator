import { parse, RosMsgField } from '@foxglove/rosmsg';
import { camelCase, compact, groupBy, partition, upperFirst } from 'lodash';

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

      // Generate an enum for the other items
      // const defConstantsGroups = groupBy(
      //   defConstants,
      //   (item) => item.name.split('_')[0]
      // );

      // const grouped: { name: string, items: RosMsgField[] }[] = []
      // const ungrouped: RosMsgField[] = []

      // const getEnumInner = (items: RosMsgField[]) => items.map((param) => {
      //   return `  ${param.name} = ${param.value},`;
      // })
      //   .join('\n');

      // Object.keys(defConstantsGroups).forEach((groupName) => {
      //   const group = defConstantsGroups[groupName]
      //   if (group.length === 1) {
      //     ungrouped.push(group[0])
      //   }
      // })



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
