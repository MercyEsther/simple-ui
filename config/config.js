const path = require("path");

export default {
    output: {
        path: "",
        filename: ""
    },
    components: [{
        name: "",
        options: {

        },
        // your also could write in this way: 
        // style: "#app { margin: 0; ... }"
        style: {
            file: "..."
        }
    }]
}