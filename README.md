# For create project with NPX widthout NPM
npx -p @angular/cli@17 ng new product-store --skip-tests

# For to integrate material with Angular was need install them
npx ng add @angular/material 

# For create proxy follow this configs in the Angular.json

 "options": {
     "proxyConfig": "proxy.config.json"
 },

# For finish config of proxy is required to create file proxy.config.json with follow content
{
    "/api":{
        "target":"http://localhost:3000/",
        "pathRewrite":{
            "^/api": ""
        }
    }
}

