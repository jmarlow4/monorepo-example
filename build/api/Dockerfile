FROM node:16-alpine

# ARG JWT_SECRET
# ENV JWT_SECRET=${JWT_SECRET}
WORKDIR /usr/src/app

COPY dist/apps/api .
RUN yarn install

CMD PORT=8080 node main.js