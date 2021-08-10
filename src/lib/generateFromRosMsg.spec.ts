import test from 'ava';

import { generateFromRosMsg } from './generateFromRosMsg';

test('generateFromRosMsg with comments', (t) => {
  const result = generateFromRosMsg(
    `MSG: geometry_msgs/Point
  # This was originally provided as an example message.
  # It is deprecated as of Foxy
  # It is recommended to create your own semantically meaningful message.
  # However if you would like to continue using this please use the equivalent in example_msgs.
  
  string label   # label of given dimension
  uint32 size    # size of given dimension (in type units)
  uint32 stride  # stride of given dimension
  `,
    'RosType'
  );
  const expected = `export interface RosTypeGeometryMsgsPoint {
  label: string;
  size: number;
  stride: number;
}`;
  t.is(result, expected);
});

test('generateFromRosMsg multi message', (t) => {
  const result = generateFromRosMsg(
    `MSG: geometry_msgs/Pose
  geometry_msgs/Point position
  geometry_msgs/Quaternion orientation
  
  ===
  MSG: geometry_msgs/Point
  float64 x
  float64 y
  float64 z
  
  ===
  MSG: geometry_msgs/Quaternion
  float64 x
  float64 y
  float64 z
  float64 w`,
    'RosType'
  );

  const expected = `export interface RosTypeGeometryMsgsPoint {
  x: number;
  y: number;
  z: number;
}

export interface RosTypeGeometryMsgsPose {
  position: RosTypeGeometryMsgsPoint;
  orientation: RosTypeGeometryMsgsQuaternion;
}

export interface RosTypeGeometryMsgsQuaternion {
  x: number;
  y: number;
  z: number;
  w: number;
}`;
  t.is(result, expected);
});
