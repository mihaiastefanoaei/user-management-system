FROM node:20-alpine

ENV NODE_ENV=production

ENV TOKEN="TESTTOKEN"

RUN apk add curl shadow

RUN groupadd -r customgroup && useradd -r -g customgroup customuser

ENV HOME="/home/customuser"

RUN mkdir -p ${HOME} && chown -R customuser:customgroup ${HOME}

WORKDIR ${HOME}/app

COPY package*.json ./

RUN chown -R customuser:customgroup ${HOME}

USER customuser

RUN npm install

COPY . .

ENTRYPOINT ["npm", "start"]