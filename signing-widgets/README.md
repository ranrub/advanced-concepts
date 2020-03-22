# Server Signing URLs API

## Install node modules

```
npm i
```

## Add credentials to .env

## Start node server

```
node app.js
```

## Access server at http://localhost:3000/api/signurl

Data input is {"public_id":"an existing public_id",  "transformation":"a transformtion"}

## Sample Curl

```
curl --location --request POST 'http://localhost:3000/api/signurl' \
--header 'Content-Type: application/json' \
--data-raw '{
  "public_id":"tiger-lilly",
  "transformation":{
  	"type": "upload",
    "width": 400,
    "quality": "auto",
    "fetch_format": "auto",
    "secure": "true",
    "sign_url": "true"
  }
}'

```

