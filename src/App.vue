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
    <div class="loading" v-if="taskStore.loading">Loading Tasks...</div>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} tasks left to do</p>
      <div v-for="t in taskStore.tasks">
        <TaskDetails :t="t" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ taskStore.favs.length }} fav tasks left to do</p>
      <div v-for="t in taskStore.favs">
        <TaskDetails :t="t" />
      </div>
    </div>

  </main>
</template>

<script>
import { ref } from "vue"
import TaskDetails from './components/TaskDetails.vue'
import TaskForm from "./components/TaskForm.vue"
import { useTaskStore } from './stores/TaskStore'
export default {
  components: { TaskDetails, TaskForm },
  setup() {
    const taskStore = useTaskStore()

    taskStore.getTasks()

    const filter = ref('all')

    return { taskStore, filter }
  }
}
</script>


