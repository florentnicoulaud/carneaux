FROM node:lts

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
RUN npm install

COPY src ./src
COPY carneaux.sqlite ./
RUN npm run build

EXPOSE 7777

CMD [ "npm", "run", "start" ]
