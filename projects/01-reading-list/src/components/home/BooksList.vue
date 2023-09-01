<script setup lang="ts">
import type { Libraries, Library } from '../..';
import BookInfoIcon from '../icons/BookInfoIcon.vue';
import ToReadingListIcon from '../icons/ToReadingListIcon.vue';
import OptionsMenu from './OptionsMenu.vue';

defineProps<{
  data: Libraries
  addToReadingList: (book: Library) => void
}>()
</script>

<template>
  <OptionsMenu />
  <TransitionGroup class="pt-16 flex flex-wrap justify-center gap-4" tag="div" name="books">
    <figure v-for="book in data.library" :key="book.book.ISBN" class="w-[160px] md:w-[240px] xl:w-[280px]">
      <div class="relative group">
        <img :src="book.book.cover" :alt="book.book.title + ' - ' + book.book.author.name"
          class="w-full h-[280px] md:h-[360px] xl:h-[400px] rounded-xl" />
        <div
          class="absolute hidden p-2 top-0 left-0 right-0 bottom-0 rounded-xl group-hover:block group-hover:bg-black group-hover:bg-opacity-60">
          <div class="w-full h-full flex flex-col items-center justify-center gap-4 text-white">
            <button class="bg-black bg-opacity-70 rounded-xl text-center p-3 shadow-sm shadow-white">
              <BookInfoIcon />
            </button>
            <button class="bg-black bg-opacity-70 rounded-xl text-center p-3 shadow-sm shadow-white"
              @click="addToReadingList(book)">
              <ToReadingListIcon />
            </button>
          </div>
        </div>
      </div>
      <figcaption class="text-center text-white md:text-lg mt-2 px-2">{{ book.book.title }}</figcaption>
    </figure>
  </TransitionGroup>
</template>


<style scoped>
.books-move,
.books-enter-active,
.books-leave-active {
  transition: all 0.5s ease-in-out;
}

.books-enter-from,
.books-leave-to {
  opacity: 0;
  transform: translate(500px, -150px);
}

.books-leave-active {
  position: absolute;
}
</style>
 