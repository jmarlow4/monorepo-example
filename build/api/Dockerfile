FROM node:16-alpine

# ARG JWT_SECRET
# ENV JWT_SECRET=${JWT_SECRET}
WORKDIR /usr/src/app

RUN yarn install

ARG PORT=8080
EXPOSE 8080

CMD PORT=8080 node main.js