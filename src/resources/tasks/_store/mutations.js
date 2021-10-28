import {
    CREATE_TASK,
    DELETE_TASK,
    READ_TASKS,
    UPDATE_TASK
} from "./mutation-types"

export default {
    [CREATE_TASK]: (state, {task}) => {
        /*Adicionando uma tarefa ao array tasks*/
        state.tasks.push(task)
    },
    [UPDATE_TASK]: (state, {task}) => {
        const index = state.tasks.findIndex(t => t.id === task.id)
        state.tasks.splice(index, 1, task)
    },
    [DELETE_TASK]: (state, {task}) => {
        const index = state.tasks.findIndex(t => t.id === task.id)
        state.tasks.splice(index, 1)
    },
    [READ_TASKS]: (state, {tasks}) => {
        /*Recebendo as tarefas da Fake API*/
        state.tasks = tasks
    }
}