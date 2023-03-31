FROM node:16-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node . .
USER node
WORKDIR /home/node/app/backend
RUN yarn install
RUN yarn run build
WORKDIR /home/node/app/frontend
RUN yarn install
RUN yarn run build
WORKDIR /home/node/app
RUN yarn install

EXPOSE 3000
EXPOSE 5001
EXPOSE 3001

CMD [ "npm", "run", "dev" ]
