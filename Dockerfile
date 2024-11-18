FROM node:21-alpine

COPY . /app

RUN cd /app && \
  yarn install && \
  yarn build && \
  npx prisma generate

WORKDIR /app

EXPOSE 4000


ENTRYPOINT /app/scripts/entrypoint.sh