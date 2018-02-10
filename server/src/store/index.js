import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const state = {
    settingShow: false,
    component: "",
    components: []
}

const mutations = {
    SETTING_SHOW(state, option) {
        state.settingShow = option;
    },

    SETTING_COMPONENT(state, component) {
        state.component = component;
    },

    SET_COMPONENT(state, component) {
        state.components.push(component);
    }
}

export default new Vuex.Store({
    state,
    mutations
})