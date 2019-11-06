# Creates the locatieregister.
#
# You can access the container using:
#   docker run -it locatieregister sh
# To start it stand-alone:
#   docker run -it -p 8888:3210 locatieregister

FROM node:alpine AS builder
RUN apk add --no-cache --virtual .gyp python make g++
#   npm i -g typescript
ENV PARCEL_WORKERS=1
RUN mkdir -p /app
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM node:alpine
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "run", "serve"]
