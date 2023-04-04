FROM node

ARG db

ENV DATABASE_URI $db

WORKDIR /app

COPY . .

RUN npm install

CMD node index.js