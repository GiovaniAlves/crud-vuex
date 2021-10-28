import {
    CREATE_TASKS,
    DELETE_TASKS,
    READ_TASKS,
    UPDATE_TASKS
} from "./mutation-types"

export default {
    [CREATE_TASKS]: (state, {task}) => {
        state.tasks.push(task)
    },
    [UPDATE_TASKS]: (state, {task}) => {
        const index = state.tasks.findIndex(t => t.id === task.id)
        state.tasks.splice(index, 1, task)
    },
    [DELETE_TASKS]: (state, {task}) => {
        const index = state.tasks.findIndex(t => t.id === task.id)
        state.tasks.splice(index, 1)
    },
    [READ_TASKS]: (state, {tasks}) => {
        state.tasks = tasks
    }
}