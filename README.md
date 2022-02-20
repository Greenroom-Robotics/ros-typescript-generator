# Ros Typescript Generator

[![CircleCI](https://circleci.com/gh/Greenroom-Robotics/ros-typescript-generator/tree/master.svg?style=svg)](https://circleci.com/gh/Greenroom-Robotics/ros-typescript-generator/tree/master)

A CLI for generating typescript interfaces and enums from ros `msg` files. 

### Comparison to rclnodejs / rostsd-gen

Unlike [rostsd-gen](https://github.com/RobotWebTools/rclnodejs/tree/develop/rostsd_gen), this **ONLY** generates ts types and enums. This means the output does not include any nodejs dependencies. You may find this particularly useful if you want to use this in a frontend project.

## Usage

- Add this to your project as a dev dependencies, eg) `yarn add ros-typescript-generator -D`
- Add a `ros-ts-generator-config.json` file to your project root. For example:

```json
{
  "output": "./generated/ros_msgs.ts",
  "input": [
    {
      "namespace": "std_msgs",
      "path": "/opt/ros/galactic/share/std_msgs"
    },
    {
      "namespace": "geometry_msgs",
      "path": "/opt/ros/galactic/share/geometry_msgs"
    },
    ...
  ],
  "typePrefix": "IRosType"
}
```

- Update the `"input"` to point to all the ros msgs. You can include your own custom messages here also.
- Run `./bin/ros-typescript-generator --config ros-ts-generator-config.json`

## Examples

* [Basic Example](./examples/basic)
* [Real-world Example](./examples/real)