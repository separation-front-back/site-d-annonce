FROM node:16

# Create app directory
WORKDIR /usr/src/app

ENV SERVER_PORT=4000
ENV DB_HOST=db
ENV DB_PORT=3306
ENV DB_USERNAME=root
ENV DB_PASSWORD=root
ENV DB_NAME=database
ENV JWT_SECRET=secret
ENV SERVER_LOG_HOST=serv
ENV SERVER_LOG_PORT=4001

COPY package.json ./
COPY package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 4000
CMD [ "npm", "run", "dev" ]