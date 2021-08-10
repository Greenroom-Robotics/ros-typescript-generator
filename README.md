# Ros Typescript Generator

A CLI for generating typescript interfaces from ros messages and services.

## Usage

- Add this to your project as a dev dependencies, eg) `yarn add ros-typescript-generator`
- Add a `ros-ts-generator-config.json` file to your project root.

```json
{
  "output": "./__generated__/ros_msgs.ts",
  "input": [
    {
      "namespace": "geometry_msgs",
      "path": "./test_ros_msgs/geometry_msgs"
    },
    {
      "namespace": "std_msgs",
      "path": "./test_ros_msgs/std_msgs"
    },
    {
      "namespace": "sensor_msgs",
      "path": "./test_ros_msgs/sensor_msgs"
    }
  ],
  "typePrefix": "IRosType"
}
```

- Update the `"input"` to point to all the ros msgs.
- Run `./bin/ros-typescript-generator --config ros-ts-generator-config.json`

## Example

- The example `ros-ts-generator-config.json` points to some [test_ros_msgs](./test_ros_msgs) which came from a ros2 foxy install
- Running `./bin/ros-typescript-generator` in this repo produces [__generated__/ros_msgs.ts](./__generated__/ros_msgs)
