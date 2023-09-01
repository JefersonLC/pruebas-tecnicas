import { defineStore } from 'pinia'

interface State {
  open: boolean
}

export const useReadingList = defineStore('readingList', {
  state: (): State => ({ open: false }),
  actions: {
    openModal() {
      this.open = true
    },
    closeModal() {
      this.open = false
    }
  }
})
