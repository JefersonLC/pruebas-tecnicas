<script setup lang="ts">
import type { Library } from '@/index';
import { useBooks } from '@/stores/books';

defineProps<{
  booksToRead: Library[]
}>()

const booksStore = useBooks()
</script>

<template>
  <div class="p-6 text-white flex flex-wrap gap-6 justify-center">
    <figure v-for="book in booksToRead" :key="book.book.ISBN" class="w-[120px]">
      <div class="relative group">
        <img :src="book.book.cover" :alt="book.book.title + ' - ' + book.book.author.name"
          class="w-full h-[220px] rounded-xl" />
        <button @click="booksStore.removeToReadingList(book)"
          class="absolute -top-2 -right-2 rounded-full h-7 w-7 bg-red-500 text-center hover:bg-black">
          X
        </button>
      </div>
      <figcaption class="text-center text-xs mt-1 px-1">{{ book.book.title }}</figcaption>
    </figure>
  </div>
</template>