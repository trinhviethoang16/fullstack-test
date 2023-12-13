FROM node:18-alpine

WORKDIR /user/src

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "dev"]