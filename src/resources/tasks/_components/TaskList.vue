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
                @conclude="concludeTask({ task })"
                @delete="confirmTaskRemoval"/>
        </ul>

        <p v-else>Nenhuma tarefa criada.</p>

        <TaskSave
            v-if="displayForm"
            :task="selectedTask"
            @save="saveTask"/>

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
            displayForm: false
        }
    },
    computed: {
        ...mapState(['tasks', 'selectedTask']),
    },
    created() {
        this.listTasks()
    },
    methods: {
        ...mapActions([
            'concludeTask',
            'listTasks',
            'createTask',
            'deleteTask',
            'selectTask',
            'resetSelectedTask',
            'updateTask'
        ]),
        confirmTaskRemoval(task){
            const confirm = window.confirm(`Deseja realmente deletar a tarefa ${task.title}?`)
            if (confirm)
                this.deleteTask({ task })
        },
        displayFormCreateTask() {
            if (this.selectedTask) {
                this.resetSelectedTask()
                return
            }
            this.displayForm = !this.displayForm
        },
        saveTask(event){
            switch (event.operation) {
                case 'create':
                    this.createTask({ task: event.task })
                    break
                case 'edit':
                    this.updateTask({ task: event.task })
                    break
            }
            this.reset()
        },
        selectTaskForEdit(task) {
            this.displayForm = true
            this.selectTask({ task })
        },
        reset() {
            this.displayForm = false
            this.resetSelectedTask()
        }
    }
}
</script>
