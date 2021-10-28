<template>
    <div id="app">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Gerenciador de Tarefas</h1>
                <p class="lead">Criando um gerenciador de tarefas com Vue JS, Axios e Vuex.</p>
            </div>
        </div>

        <div class="container">
            <div class="col-sm-12">
                <TaskList/>
            </div>
        </div>
    </div>
</template>

<script>

import TaskList from "./resources/tasks/_components/TaskList"

export default {
    name: 'App',
    components: {TaskList}
}
</script>


