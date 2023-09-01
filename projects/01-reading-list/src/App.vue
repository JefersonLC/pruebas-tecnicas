<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, watch } from 'vue';
import BooksList from './components/home/BooksList.vue';
import ErrorData from './components/home/ErrorData.vue';
import LoadingData from './components/home/LoadingData.vue';
import ReadingListOpenButton from './components/reading-list/ReadingListOpenButton.vue';
import ReadingListTransition from './components/reading-list/ReadingListTransition.vue';
import { useSync } from './composables/useSync';
import { useBooks } from './stores/books';

const booksStore = useBooks()

const { data, error, loading } = storeToRefs(booksStore)

watch(booksStore.$state, (data) => {
  localStorage.setItem('reading-list', JSON.stringify(data))
}, {
  deep: true
})

onMounted(() => {
  const data = localStorage.getItem('reading-list')

  if (data) {
    booksStore.$patch(JSON.parse(data))
  } else {
    booksStore.getData()
  }
})

useSync()
</script>

<template>
  <ReadingListTransition />
  <main class="bg-indigo-950 min-h-screen">
    <ReadingListOpenButton />
    <section class="container lg:w-4/5 xl:w-9/12">
      <header class="text-center bg-indigo-950 py-4">
        <div class="p-2">
          <h1
            class="relative inline-block font-bold text-white before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500">
            <span class="relative text-3xl lg:text-5xl">Reading</span>
            <br />
            <span class="relative text-6xl lg:text-8xl">List</span>
          </h1>
        </div>
      </header>
      <LoadingData v-if="loading" />
      <ErrorData v-if="error" />
      <BooksList v-if="data" :data="data" :addToReadingList="booksStore.addToReadingList" />
    </section>
  </main>
</template>