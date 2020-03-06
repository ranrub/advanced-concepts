# Advanced Concepts

This folder contains data and scripts to use with exercises in Advanced Concepts workshop.

## Web Server
This folder contains asset folders that can be served using github.io.  To turn on github.io service after copying this repo into your account:
1. go to settings
2. scroll down to github pages
3. select `master branch` from source
4. check enforce HTTPS if you are using a CNAME for your github.io repo
5. you should be able to serve the assets using this URL:
```https://<domain name | accountname.github.io>/advanced-concepts/<images | raw | video>```

## env variables and credentials

Your .env should look like this:

```
CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME  
API_SECRET=<api secret>   
ASSET_SOURCE_BASE="https://<github account>.github.io/advanced-concepts" 
``` 

To use the node scripts for exercises
1. `npm install`
3. run your scripts from the root directory unless otherwise directed
4. make changes to scripts as needed for your cloud name
5. .env file is git ignored so it won't get checked in and doesn't exist in a fresh repo