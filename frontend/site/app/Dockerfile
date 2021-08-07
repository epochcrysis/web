FROM node:11-alpine as builder

RUN mkdir /app

ADD . /app

RUN cd /app && yarn install
RUN cd /app/frontend/site/app && yarn run build

FROM node:11-alpine

COPY --from=builder /app/frontend/site/app/locales /app/locales
COPY --from=builder /app/frontend/site/app/dist /app/dist
COPY --from=builder /app/frontend/site/app/package.json /app
COPY --from=builder /app/yarn.lock /app

WORKDIR /app

RUN yarn install --production --pure-lockfile

ENV NODE_ENV production

CMD ["yarn", "start"]
