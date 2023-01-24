<template>
  <main>
    <header>
      <img src="https://thiscatdoesnotexist.com/" alt="Cat">
      <h1>Pinia Tasks</h1>
    </header>

    <!-- task list -->
    <div class="task-list">
      <div v-for="t in taskStore.tasks">
        <TaskDetails :t="t" />
      </div>
    </div>

  </main>
</template>

<script>
import TaskDetails from './components/TaskDetails.vue'
import { useTaskStore } from './stores/TaskStore'
export default {
  components: { TaskDetails },
  setup() {
    const taskStore = useTaskStore()
    return { taskStore }
  }
}
</script>


