FROM node:17-alpine as build
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
ENTRYPOINT [ "nginx","-g","daemon off" ]
