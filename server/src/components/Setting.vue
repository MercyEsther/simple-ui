<template>
    <el-container>
        <el-header>
            <h1>Setting</h1>
        </el-header>

        <el-main>
            <el-row :key="index" v-for="(prop, index) in settings.props">
                <el-col :span="6">
                    <label>{{prop.name}}:</label>
                </el-col>
                <el-col  v-if="!prop.options" :span="15">
                    <el-input v-model="prop.value" :placeholder="prop.name" size="small"></el-input>
                </el-col>
                <el-col v-if="prop.options" :span="15">
                    <el-select v-model="prop.value" :value="prop.value" size="small" v-if="prop.options">
                        <el-option
                        v-for="item in prop.options"
                        :key="item"
                        :label="item"
                        :value="item">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
        </el-main>

        <el-footer>
            <el-button type="primary" @click="settingDone" plain size="small">完成</el-button>
            <el-button @click="settingDone" plain size="small">预览</el-button>
        </el-footer>
    </el-container>
</template>

<script>
    import {mapState, mapMutations} from "vuex";
    import data from "../service/data.js";

    export default {
        name: "Header",
        data(){
            return{
                settings: {}
            }
        },
        computed: {
            ...mapState([
                "component"
            ])
        },
        created(){
            this.loadData();
        },
        methods:{
            ...mapMutations([
                "SETTING_SHOW",
                "SET_COMPONENT"
            ]),
            settingDone(){
                this.SETTING_SHOW(false);
                let props = this.settings.props.map((item, v, i) => {
                    return {
                        name: item.name,
                        value: item.value
                    }
                })
                let settings = {
                    name: this.component,
                    props: props
                }
                this.SET_COMPONENT(settings);
            },
            loadData(){
                for(var component of data){
                    if(component.name == this.component){
                        this.settings = component;
                        break;
                    }
                }
                console.log(this.settings);
            }
        }
    }
</script>

<style scoped>
    @import url("../style/color.css");

    .el-container{
        position: fixed;
        top: 0;
        right: 0;
        width: 40vw;
        height: 100vh;
        background-color: #f8f8f8;
        border: 1px solid #eee;
    }
    .el-header{
        text-align: center;
    }
    .el-row{
        margin: 2vh 0px;
    }
    h1{
        color: $dark-grey;
    }
</style>
