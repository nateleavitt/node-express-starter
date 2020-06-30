FROM node:12.18.1-alpine
ENV NODE_ENV=development

RUN apk add --no-cache \
  tzdata \
  bash \
  vim \
  && mkdir /mnt/app

WORKDIR /mnt/app
COPY . /mnt/app

RUN yarn --pure-lockfile

EXPOSE 4000
