FROM --platform=linux/amd64 node:lts-alpine as BUILD_IMAGE
WORKDIR /

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["yarn", "preview", "--host"]