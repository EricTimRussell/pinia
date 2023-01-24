<template>
  <div class="task">
    <h3>{{ t.title }}</h3>
    <div class="icons">
      <i @click="taskStore.deleteTask(t.id)" class="material-icons">delete</i>
      <i @click="taskStore.toggleFav(t.id)" :class="{ active: t.isFav }" class="material-icons">favorite</i>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "../stores/TaskStore";

export default {
  props: ['t'],
  setup() {
    const taskStore = useTaskStore()
    return { taskStore }
  }
}
</script>