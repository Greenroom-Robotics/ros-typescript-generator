FROM ros:galactic

# Install nodejs
RUN apt-get update
RUN apt-get -y install curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
RUN apt-get -y install nodejs

# Install ros-typescript-generator
WORKDIR /app
COPY package.json package-lock.json ros-ts-generator-config.json ./
COPY ./example_msgs ./example_msgs
RUN npm install

# Run ros-typescript-generator
CMD node node_modules/ros-typescript-generator/build/main/cli/cli.js
