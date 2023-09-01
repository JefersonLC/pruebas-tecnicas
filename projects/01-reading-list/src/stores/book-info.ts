import { defineStore } from 'pinia'

export const useBookInfo = defineStore('bookInfo', {
  state: () => ({ open: false }),
  actions: {
    openModal() {
      this.open = true
    },
    closeModal() {
      this.open = false
    }
  }
})
