# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY index.js ./

# Expose the port
EXPOSE 3000

# Start the server
CMD ["node", "index.js"]
