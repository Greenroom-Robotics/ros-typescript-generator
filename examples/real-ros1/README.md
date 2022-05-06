# Real example - ROS1 (using docker)

In this example, we use docker to generate typescript types and enums from a real ros1 install. You may not be using docker for your project but this should nonetheless serve as a useful reference.

1. We add a [Dockerfile](./Dockerfile) which is based on ros1 noetic. You can use any version of ROS2.
2. Note, for this example we copy in some [./example_msgs](./example_msgs)
3. We also copy in [ros-ts-generator-config.json](./ros-ts-generator-config.json) which for this example just points to `std_msgs`, `geometry_msgs` and our `example_msgs`
4. When the container starts, `ros-typescript-generator` is run.
5. This generates [./generated/msgs.ts](./generated/msgs.ts)
6. Include this generated file in your project and have your `tsconfig` transpile it for you :)

If you want to run this example yourself:

```bash
docker build . -t ros_ts_gen_example
docker run --volume `pwd`/generated/:/app/generated ros_ts_gen_example
```

### Note

In this example, we mount the output directory (generated) as a docker volume. This is useful because you might want to generate typescript types to use in a front-end application. In this way, you can mount the ros-ts types directly into wherever your frontend is being built.