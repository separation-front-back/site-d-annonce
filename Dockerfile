FROM node:16

# Create app directory
WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
RUN npm i

COPY . .

EXPOSE 9000
CMD [ "npm", "run", "dev" ]