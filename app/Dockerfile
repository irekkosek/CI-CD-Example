# syntax=docker/dockerfile:1
ARG NODE_VERSION=19.9.0-bullseye
FROM node:${NODE_VERSION} AS build
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init=1.2.5-1
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN --mount=type=secret,mode=0644,id=npmrc,target=/usr/src/app/.npmrc npm ci

FROM node:${NODE_VERSION} AS build-production
WORKDIR /usr/src/app
COPY  --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY . /usr/src/app
RUN npm run build

FROM nginx as production
RUN mkdir /app
COPY --from=build-production /usr/src/app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

FROM node:${NODE_VERSION} as development
ENV NODE_ENV dev
COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
COPY --from=build /usr/src/app/node_modules /usr/src/app/node_modules
WORKDIR /usr/src/app
COPY . /usr/src/app
EXPOSE 5137
CMD ["dumb-init", "npm", "run" ,"dev","--","--host"]
