FROM node:18.17.1

WORKDIR /app_backend

COPY ./package*.json ./
COPY prisma ./prisma/ 

RUN npm install

RUN npx prisma generate

COPY ./ .

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start:migrate:prod" ]