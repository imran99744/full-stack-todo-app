FROM node:17.9.0-slim

WORKDIR /app

COPY . .

RUN npm install

COPY . .

EXPOSE 5000

ENV MONGODB_USERNAME=infra-todo

ENV MONGODB_PASSWORD=Infra2023

CMD ["npm","start"]
