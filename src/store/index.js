import {createStore} from 'vuex'
import tasksModule from '@/resources/tasks/_store/'

export default createStore({
    strict: process.env.NODE_ENV !== 'production', //O modo strito lança um erro caso vc cause alterações no estado do vuex fora das mutations
    modules: {
        tasks: tasksModule
    }
})
