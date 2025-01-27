# filepath: /d:/CS/Development/cloudapp/src/nodebin/controller/httpbin/Dockerfile
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose ports
EXPOSE 5000
EXPOSE 8443
EXPOSE 443

CMD [ "npm", "start" ]