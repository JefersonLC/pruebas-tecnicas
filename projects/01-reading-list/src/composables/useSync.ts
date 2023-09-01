import { useBooks } from '@/stores/books'
import { onMounted, onUnmounted } from 'vue'

export function useSync() {
  const store = useBooks()

  function storageEvent(event: StorageEvent) {
    if (!event.newValue) return

    if (event.storageArea === localStorage) {
      store.$patch(JSON.parse(event.newValue))
    }
  }

  onMounted(() => {
    window.addEventListener('storage', storageEvent)
  })

  onUnmounted(() => {
    window.removeEventListener('storage', storageEvent)
  })
}
