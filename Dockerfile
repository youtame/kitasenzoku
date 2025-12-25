FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install vuetify@next @vuejs/plugin-vue

EXPOSE 5173

CMD ["sh"]

