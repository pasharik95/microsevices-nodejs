FROM node

# Set workdir
WORKDIR /app

# Copy all to workdir
COPY . /app

# Install dependencies
RUN npm install

EXPOSE 3000

# Start app
CMD [ "npm", "start" ]