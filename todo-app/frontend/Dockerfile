FROM node:17.9.0-slim

WORKDIR /app

COPY . .

RUN npm install

COPY . .
 
EXPOSE 3000

CMD ["npm","start"]
