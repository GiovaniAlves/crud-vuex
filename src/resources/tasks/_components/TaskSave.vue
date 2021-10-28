<template>
    <div class="mt-4">
        <hr>
        <h2 class="font-weight-light">Salvar Tarefa</h2>

        <form @submit.prevent="save">
            <div class="row">
                <div :class="classColumn">
                    <div class="form-group">
                        <label>Titulo</label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Título da tarefa"
                            v-model="task.title">
                    </div>
                </div>

                <div class="col-sm-2" v-if="selectedTask">
                    <div class="form-group">
                        <label>Tarefa concluída?</label>
                        <button
                            type="button"
                            class="btn btn-sm d-block"
                            :class="classButton"
                            @click="task.concluded = !task.concluded">
                                <i class="fa fa-check"></i>
                        </button>
                    </div>
                </div>

            </div>

            <button type="submit" class="btn btn-primary">Salvar</button>
        </form>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: "TaskSave",
    data() {
        return {
            task: {}
        }
    },
    computed: {
        ...mapState('tasks', ['selectedTask']),
        classColumn() {
            return this.selectedTask
                ? 'col-sm-10'
                : 'col-sm-12'
        },
        classButton() {
            return this.selectedTask && this.task.concluded
                ? 'btn-success'
                : 'btn-secondary'
        }
    },
    watch: {
        selectedTask(newTask){
            this.syncUp(newTask)
        }
    },
    created() {
        this.syncUp(this.selectedTask)
    },
    methods: {
        save() {
            /*Para obter a operação vou me basear na selectedTask global pq a tarfa local sempre terá um valor*/
            const operation = !this.selectedTask ? 'create' : 'edit'
            this.$emit('save', {operation, task: this.task})
        },
        syncUp(newTask){
            this.task = Object.assign(
                {},
                newTask || { title: '', concluded: false }
            )
        }
    }
}
</script>

<style scoped>

</style>