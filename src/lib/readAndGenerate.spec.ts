import test from 'ava';

import { readAndGenerate } from './readAndGenerate';

test('generateFromRosMsg', async (t) => {
  const directories = [
    { namespace: "geometry_msgs", path: "/home/david/repositories/greenroom/ros-typescript-generator/test_data/geometry_msgs" },
    { namespace: "std_msgs", path: "/home/david/repositories/greenroom/ros-typescript-generator/test_data/std_msgs" },
    { namespace: "sensor_msgs", path: "/home/david/repositories/greenroom/ros-typescript-generator/test_data/sensor_msgs" }
  ]
  const result = await readAndGenerate(directories);
  t.snapshot(result)
});


