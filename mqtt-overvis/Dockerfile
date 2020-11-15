ARG BUILD_FROM=node:alpine
FROM $BUILD_FROM

ENV LANG C.UTF-8

WORKDIR /app

COPY mqtt-overvis/package.json ./

RUN npm install

COPY mqtt-overvis/index.js ./
COPY config.js ./
COPY mqtt-overvis/overvis.js ./
COPY mqtt-overvis/state.js ./

CMD [ "node", "index.js" ]
