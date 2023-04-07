<<<<<<< HEAD
FROM node:17.9.0-slim

WORKDIR /app

COPY . .

RUN npm install

COPY . .
 
EXPOSE 3000

CMD ["npm","start"]
=======
FROM node:16
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm","start"]
>>>>>>> 29b3d93 (docker-compose file added)
