<script setup lang="ts">
import { useBooks } from '@/stores/books';
import { storeToRefs } from 'pinia';

const store = useBooks()
const { readingListCount, totalBooks, currentBooks } = storeToRefs(store)


</script>

<template>
  <div class="bg-black bg-opacity-50 rounded-lg mt-10 mx-2 p-4 text-white text-xl">
    <ul class="flex [&>li]:list-disc px-6">
      <li class="flex-grow">Books: {{ currentBooks }}/{{ totalBooks }}</li>
      <li class="flex-grow">Reading List: {{ readingListCount }}</li>
    </ul>
  </div>
</template>