<template>
  <main>
    <header>
      <img src="https://thiscatdoesnotexist.com/" alt="Cat">
      <h1>Pinia Tasks</h1>
    </header>

    <!-- new task form -->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All Tasks</button>
      <button @click="filter = 'favs'">Fav Tasks</button>
    </nav>

    <!-- lodaing -->
    <div class="loading" v-if="loading">Loading Tasks...</div>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ totalCount }} tasks left to do</p>
      <div v-for="t in tasks">
        <TaskDetails :t="t" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ favs.length }} fav tasks left to do</p>
      <div v-for="t in favs">
        <TaskDetails :t="t" />
      </div>
    </div>

    <button @click="taskStore.$reset">Reset Tasks</button>

  </main>
</template>

<script>
import { storeToRefs } from "pinia"
import { ref } from "vue"
import TaskDetails from './components/TaskDetails.vue'
import TaskForm from "./components/TaskForm.vue"
import { useTaskStore } from './stores/TaskStore'
export default {
  components: { TaskDetails, TaskForm },
  setup() {
    const taskStore = useTaskStore()

    const { tasks, loading, favs, totalCount } = storeToRefs(taskStore)

    taskStore.getTasks()

    const filter = ref('all')

    return { taskStore, filter, tasks, loading, favs, totalCount }
  }
}
</script>


