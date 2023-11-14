# Step 1: Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Step 2: Set the working directory in the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json (or npm-shrinkwrap.json) into the container
COPY package*.json ./

# Step 4: Install your application's dependencies
RUN npm install

# Step 5: Bundle your app's source code inside the Docker image
COPY . .

# Step 6: Make the container's port 3000 available to the outside
EXPOSE 3000

# Step 7: Define the command to run your app
CMD [ "node", "index.js" ]
