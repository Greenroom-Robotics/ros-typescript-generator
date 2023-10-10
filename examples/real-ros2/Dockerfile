FROM ros:iron

# Install nodejs
ENV NODE_VERSION=16.13.0
RUN apt update
RUN apt install -y curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

# Install ros-typescript-generator
WORKDIR /app
COPY ros-ts-generator-config.json ./
COPY ./example_msgs ./example_msgs

# List all the <something>_msg libs in the ros distro
RUN ls /opt/ros/iron/share | grep "_msg"
RUN ls /opt/ros/iron/share | grep "_interfaces"

# Run ros-typescript-generator
CMD npx ros-typescript-generator
