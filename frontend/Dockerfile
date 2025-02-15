# Use official Node.js image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy all files to container
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the frontend server
CMD ["node", "server.js"]
