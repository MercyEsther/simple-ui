# Conifg

> you can use this configuration file to create a Vue Page easily that you want; 

- Step1

create a file named config.js

- Step2

write some options


```javascript
// config.js

const path = require("path");

module.exports = {
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "Home.vue"
    },
    
}
```