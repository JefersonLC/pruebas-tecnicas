<script setup lang="ts">
import { useBooks } from '@/stores/books';
import { useReadingList } from '@/stores/reading-list';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import BooksToRead from './BooksToRead.vue';

const store = useReadingList()

const { open } = storeToRefs(store)
const { readList } = storeToRefs(useBooks())

watch(open, () => {
  document.body.classList.toggle('overflow-y-hidden')
})

</script>

<template >
  <div v-if="open" tabindex="-1" class="fixed min-h-screen top-0 bottom-0 left-0 right-0 z-10">
    <div @click="store.closeModal" class="absolute w-full h-full bg-black bg-opacity-50 inset-0 z-20" />
    <div id="content" class="absolute w-[90%] right-0 sm:w-[500px] h-full bg-indigo-950 overflow-scroll z-40">
      <header class="p-6 text-white text-3xl">
        <button @click="store.closeModal" class="hover:text-pink-500">X</button>
      </header>
      <BooksToRead :booksToRead="readList" />
    </div>
  </div>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active #content,
.modal-leave-active #content {
  transition: transform 0.3s ease-in-out;
}

.modal-enter-from #content,
.modal-leave-to #content {
  transform: translateX(700px);
}
</style>