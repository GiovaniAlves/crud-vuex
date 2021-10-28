<template>
    <div>
        <div class="row">
            <div class="col-sm-10">
                <h1 class="font-weight-light">Lista de Tarefas</h1>
            </div>

            <div class="col-sm-2">
                <button
                    class="btn btn-primary float-right"
                    @click="displayFormCreateTask">
                        <i class="fa fa-plus mr-2"></i>
                    <span>Criar</span>
                </button>
            </div>
        </div>

        <ul class="list-group" v-if="tasks.length > 0">
            <TaskListItem
                v-for="task in tasks"
                :key="task.id"
                :task="task"
                @edit="selectTaskForEdit"
                @conclude="concludeTask({task})"
                @delete="confirmTaskRemoval"/>
        </ul>

        <p v-else>Nenhuma tarefa criada.</p>

        <TaskSave
            v-if="displayForm"
            :task="selectedTask"/>

    </div>
</template>

<script>

import { createNamespacedHelpers } from "vuex"

import TaskListItem from "./TaskListItem"
import TaskSave from "./TaskSave"

const { mapActions, mapState} = createNamespacedHelpers('tasks')

export default {
    name: "TaskList",
    components: {
        TaskSave,
        TaskListItem
    },
    data() {
        return {
            displayForm: false,
            selectedTask: undefined
        }
    },
    computed: {
        ...mapState(['tasks']),
    },
    created() {
        this.listTasks()
    },
    methods: {
        ...mapActions([
            'concludeTask',
            'listTasks',
            'readTasks',
        ]),
        confirmTaskRemoval(task){
            const confirm = window.confirm(`Deseja realmente deletar a tarefa ${task.title}?`)
            if (confirm)
                this.deleteTask({task})
        },
        displayFormCreateTask() {
            if (this.selectedTask) {
                this.selectedTask = undefined
                return
            }
            this.displayForm = !this.displayForm
        },
        selectTaskForEdit(task) {
            this.displayForm = true
            this.selectedTask = task
        },
        reset() {
            this.displayForm = false
            this.selectedTask = undefined
        }
    }
}
</script>

<style scoped>

</style>