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
                @edit="selectTaskForEdit"/>
        </ul>

        <p v-else>Nenhuma tarefa criada.</p>

        <TaskSave
            v-if="displayForm"
            :task="selectedTask"/>

    </div>
</template>

<script>
import TaskListItem from "./TaskListItem"
import TaskSave from "./TaskSave"

export default {
    name: "TaskList",
    components: {
        TaskSave,
        TaskListItem
    },
    data() {
        return {
            tasks: [
                {id: 1, title: "Aprender Vue", concluded: true},
                {id: 2, title: "Aprender Vuex", concluded: true},
                {id: 3, title: "Aprender Vue Router", concluded: false},
            ],
            displayForm: false,
            selectedTask: undefined
        }
    },
    methods: {
        displayFormCreateTask() {
            if (this.selectedTask) {
                this.selectedTask = undefined
                return
            }
            this.displayForm = !this.displayForm
        },
        selectTaskForEdit(task){
            this.displayForm = true
            this.selectedTask = task
        },
        reset(){
            this.displayForm = false
            this.selectedTask = undefined
        }
    }
}
</script>

<style scoped>

</style>