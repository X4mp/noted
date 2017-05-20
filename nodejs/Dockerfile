From node:7-slim

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev libkrb5-dev

RUN mkdir /noted
WORKDIR /noted

ADD package.json /noted/package.json
RUN npm install
ADD . /noted

EXPOSE 3000

CMD ["npm", "start"]
