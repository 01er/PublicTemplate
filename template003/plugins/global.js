import Vue from 'vue'

const tools = {
    install (Vue) {
        Vue.prototype.tools = {
            adminId: 1,
        }
    }
}

Vue.use(tools)