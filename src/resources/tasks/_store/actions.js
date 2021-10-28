import * as types from './mutation-types'
import TasksService from "../_services/TasksService"

export default {
    concludeTask: async ({ dispatch }, payload) => {
        const task = Object.assign({}, payload.task)
        task.concluded = !task.concluded
        dispatch('updateTask', { task })
    },
    createTask: async ({ commit }, { task }) => {
        const response = await TasksService.postTask(task)
        commit(types.CREATE_TASK, {task: response.data})
    },
    updateTask: async ({ commit }, { task }) => {
        const response = await TasksService.putTask(task)
        commit(types.UPDATE_TASK, {task: response.data})
    },
    deleteTask: async ( { commit }, { task }) => {
        const response = await TasksService.deleteTask(task.id)
        commit(types.DELETE_TASK, {task: response.data})
    },
    listTasks: async ( { commit }) => {
        const response = await TasksService.getTasks()
        commit(types.LIST_TASKS, {tasks: response.data})
    },
    selectTask: ({ commit }, payload) => {
        commit(types.SELECT_TASK, payload)
    },
    resetSelectedTask: ({ commit }) => {
        commit(types.SELECT_TASK, { task: undefined})
    }
}