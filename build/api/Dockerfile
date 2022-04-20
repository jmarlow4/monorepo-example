FROM node:16-alpine

# ARG JWT_SECRET
# ENV JWT_SECRET=${JWT_SECRET}
WORKDIR /usr/src/app
ENV PORT 8080
ENV HOST 0.0.0.0

COPY ./dist/apps/api .
RUN yarn install

CMD node main.js