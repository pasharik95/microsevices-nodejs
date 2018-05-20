FROM node

# Set workdir
WORKDIR /app

# Copy package.json to workdir
COPY package.json /app

# Install dependencies
RUN npm install

# Copy all to workdir
COPY . /app

EXPOSE 8000

# Start app
CMD [ "npm", "start" ]