import { useFetch } from '@/composables/useFetch'
import type { FetchError } from '@/exceptions/FetchError'
import { removeBook } from '@/utils/removeBook'
import { defineStore } from 'pinia'
import type { Libraries, Library } from '..'

interface State {
  data: Libraries | null
  loading: boolean
  error: FetchError | null
  readList: Library[]
}

export const useBooks = defineStore('books', {
  state: (): State => ({
    data: null,
    loading: false,
    error: null,
    readList: []
  }),
  getters: {
    currentBooks: ({ data }) => data?.library.length,
    totalBooks: ({ readList, data }) => readList.length + (data?.library.length ?? 0),
    readingListCount: ({ readList }) => readList.length
  },
  actions: {
    getData() {
      this.data = null
      this.error = null
      this.loading = true

      useFetch<Libraries>('./src/moks/books.json')
        .then((payload) => (this.data = payload))
        .catch((error) => (this.error = error))
        .finally(() => (this.loading = false))
    },
    addToReadingList(book: Library) {
      if (!this.data) return

      const library = removeBook(this.data.library, book)
      const readList = [...this.readList, book]

      this.$patch({ data: { library }, readList })
    },
    removeToReadingList(book: Library) {
      if (!this.data) return

      const readList = removeBook(this.readList, book)
      const library = [...this.data.library, book]

      this.$patch({ data: { library }, readList })
    }
  }
})
