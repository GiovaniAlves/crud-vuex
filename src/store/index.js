import {createStore} from 'vuex'
import tasksModule from '@/resources/tasks/_store/'

export default createStore({
    modules: {
        tasks: tasksModule
    }
})
