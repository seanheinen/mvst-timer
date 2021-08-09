# Run build in build-env to drastically reduce image size
FROM node:16-alpine3.11 AS build-env
MAINTAINER Sean Heinen
WORKDIR /app
# Install app dependencies
COPY package.json /app/
RUN yarn install
# Build app
COPY . .
RUN yarn run build
# Build runtime image
FROM node:16-alpine3.11
EXPOSE 3000
# Drop app from build container
COPY --from=build-env /app/build /app/www
COPY --from=build-env /app/http-server.js /app/http-server.js
CMD ["node", "./app/http-server.js"]
