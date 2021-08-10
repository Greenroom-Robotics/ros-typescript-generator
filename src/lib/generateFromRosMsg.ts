import { parse } from "@foxglove/rosmsg";
import { camelCase, upperFirst } from "lodash";

import { primatives } from "./primatives";

const TYPE_PREFIX = "RosType"

const rosNameToTypeName = (rosName: string, prefix = "") => `${prefix}${upperFirst(camelCase(rosName))}`

/** Take in a ros definition string and generates a typescript interface */
export const generateFromRosMsg = (rosDefinition: string) => {
  const messageDefinitions = parse(rosDefinition, { ros2: true });
  return messageDefinitions.map(definition => {
    // Get the interface key
    const typeName = rosNameToTypeName(definition.name || "", TYPE_PREFIX);
    // Get the interface value (the type) 
    const typeKeyVals = definition.definitions.map(param => {
      const paramType: string = param.type in primatives 
        ? primatives[param.type as keyof typeof primatives]
        : rosNameToTypeName(param.type, TYPE_PREFIX)

      const arrayMarker = param.isArray ? "[]" : ""
      return `  ${param.name}: ${paramType}${arrayMarker};`
    }).join("\n")
    return `export interface ${typeName} {
${typeKeyVals}
}`
  }).sort().join('\n\n')
}


