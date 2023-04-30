# syntax=docker/dockerfile:1
ARG NODE_VERSION=19.9.0-bullseye
FROM node:${NODE_VERSION} AS build
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init=1.2.5-2
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN --mount=type=secret,mode=0644,id=npmrc,target=/usr/src/app/.npmrc npm ci --only=production

# FROM node:${NODE_VERSION} AS build-dev
# RUN apt-get update && apt-get install -y --no-install-recommends dumb-init=1.2.5-2
# WORKDIR /usr/src/app
# COPY package*.json /usr/src/app/
# RUN --mount=type=secret,mode=0644,id=npmrc,target=/usr/src/app/.npmrc npm ci --only

FROM node:${NODE_VERSION}-slim AS production
ENV NODE_ENV production
COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node . /usr/src/app
CMD ["dumb-init", "node", "index.ts"]

FROM node:${NODE_VERSION} as development
ENV NODE_ENV dev
COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=build /usr/src/app/package*.json /usr/src/app/
RUN npm install --only=dev 
COPY . /usr/src/app
CMD ["dumb-init", "node", "index.ts"]


# WORKDIR /usr/src/app
# COPY package*.json ./

# RUN npm install 
# RUN npm ci --omit=dev

# COPY . .
# EXPOSE 3000
# CMD [ "node", "server.js" ]
