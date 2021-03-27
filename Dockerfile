FROM node:14

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start" ]

WORKDIR /usr/app

# RUN npm run migrate

# RUN npx knex seed:run