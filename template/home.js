export default `
    <template>
        ${component}
    </template>

    <script>
        export default {
            name: ${name},
            components: {${components}},
            data(){
                return{
                    ${data}
                }
            },
            methods:{
                ${methods}
            }
        }
    </script>

    <style scoped>
        @import url("./style/common.css");
        ${style}
    </style>
    `