FROM node:17.9.0-slim

WORKDIR /app

COPY . .

RUN npm install

COPY . .

EXPOSE 5000

ENV MONGO_URL=""

CMD ["npm","start"]