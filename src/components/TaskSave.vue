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
                            :value="task && task.title">
                    </div>
                    <div class="col-sm-2" v-if="task">
                        <div class="form-group">
                            <label>Tarefa concluída?</label>
                            <button
                                type="button"
                                class="btn btn-sm d-block"
                                :class="classButton">
                                    <i class="fa fa-check"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Salvar</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "TaskSave",
    props: {
        task: {
            type: Object,
            default: undefined
        }
    },
    computed: {
        classColumn() {
            return this.task
                ? 'col-sm-10'
                : 'col-sm-12'
        },
        classButton() {
            return this.task && this.task.concluded
                ? 'btn-success'
                : 'btn-secondary'
        }
    },
    methods: {
        save() {
            const operation = !this.task ? 'create' : 'edit'
            console.log(`Operação: ${operation}`)
        }
    }
}
</script>

<style scoped>

</style>