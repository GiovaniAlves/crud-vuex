import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"

const state = {
    tasks: [
        {id: 1, title: "Aprender Vue", concluded: true},
        {id: 2, title: "Aprender Vuex", concluded: true},
        {id: 3, title: "Aprender Vue Router", concluded: false},
    ]
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}