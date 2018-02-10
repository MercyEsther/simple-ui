<template> 
    <el-container id="app">
        <el-aside ></el-aside>

        <el-container>
            <!-- header -->
            <el-header>
                <h1>SimpleUI Server</h1>
            </el-header>

            <!-- main -->
            <el-main>   
                <el-row>
                    <el-col :span="2">
                        <label>名称:</label>
                    </el-col>
                    <el-col :span="4">
                        <el-input placeholder="请输入内容" v-model="name" size="small" clearable></el-input>
                    </el-col>
                    <el-col :span="2">
                         <el-button type="primary" plain size="small" @click="addComponent">添加组件</el-button>
                    </el-col>
                </el-row>

                <!-- component -->
                <el-row :key="index" v-for="(component, index) in components">
                    <el-col :span="2">
                        <label>组件类型:</label>
                    </el-col>
                    <el-col :span="8">
                        <el-input placeholder="请输入内容" v-model="component.c_type" size="small" class="input-with-select">
                            <el-select v-model="component.c_type" slot="prepend" placeholder="请选择">
                                <el-option :label="type" :value="type" :key="index" v-for="(type, index) in types" ></el-option>
                            </el-select>
                            <el-button slot="append" @click="setComponent(component)">设置</el-button>
                        </el-input>
                    </el-col>
                    <el-col :span="2">
                        <el-button type="danger" plain size="small" @click="removeComponent(index)">删除组件</el-button>
                    </el-col>
                </el-row>

                <transition name="fade">
                    <Setting v-if="settingShow"/>
                </transition>

            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Setting from "./components/Setting";
import {mapState, mapMutations} from "vuex";

export default {
    name: 'App',
    components: {Setting},
    data(){
        return{
            types: ["Header", "Footer", "Toggle"],
            name: "",
            components: []
        }
    },
    computed:{
        ...mapState([
            "settingShow",
        ])
    },
    methods:{
        ...mapMutations([
            "SETTING_SHOW",
            "SETTING_COMPONENT",
            "SET_COMPONENTS"
        ]),
        addComponent(){
            this.components.push({t_type: ""});
        },
        setComponent(component){
            console.log(component.c_type);
            if(component.c_type){
                this.SETTING_SHOW(true);
                this.SETTING_COMPONENT(component.c_type);
            }
        },
        removeComponent(index){
            this.components.splice(index, 1);
        }
    }
}
</script>

<style scoped>
    @import url("./style/common.css");
    @import url("./style/color.css");

    .el-header{
        background-color: $blue;
        color: white;
    }
    .el-aside{
        width: 40vw;
        border: 1px solid $light-grey;
    }
    .el-row{
        margin: 10px 5px;
    }
    .el-col{
        margin-right: 10px;
    }
    main label{
        font-size: 0.8rem;
    }
</style>
