FROM ros:galactic

# Install nodejs
RUN apt-get update
RUN apt-get -y install curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
RUN apt-get -y install nodejs

# Install ros-typescript-generator
WORKDIR /app
COPY ros-ts-generator-config.json ./
COPY ./example_msgs ./example_msgs

# List all the <something>_msg libs in the ros distro
RUN ls /opt/ros/galactic/share | grep "_msg"

# Run ros-typescript-generator
CMD npx ros-typescript-generator
