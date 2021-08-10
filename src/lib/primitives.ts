/**
 * Map all ros primitives to a ts type
 * https://design.ros2.org/articles/interface_definition.html
 */
export const primitives = {
  bool: 'boolean',
  byte: 'Int8Array',
  char: 'string',
  float32: 'number',
  float64: 'number',
  int8: 'number',
  uint8: 'number',
  int16: 'number',
  uint16: 'number',
  int32: 'number',
  uint32: 'number',
  int64: 'number',
  uint64: 'number',
  string: 'string',
  time: 'number',
  duration: 'number'
};
