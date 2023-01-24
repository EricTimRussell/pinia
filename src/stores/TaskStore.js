import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, title: "buy", isFav: false },
      { id: 2, title: "play", isFav: true }
    ]
  }),
  getters: {
    favs() {
      return this.tasks.filter(t => t.isFav)
    },
    totalCount() {
      return this.tasks.length
    }
  }
})