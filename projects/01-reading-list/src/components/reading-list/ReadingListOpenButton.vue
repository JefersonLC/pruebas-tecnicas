<script setup lang="ts">
import { useReadingList } from '@/stores/reading-list';
import ReadingListIcon from '../icons/ReadingListIcon.vue';

const modalStore = useReadingList()
</script>

<template>
  <button
    class="fixed right-0 top-20 p-3 rounded-l-full bg-pink-500 bg-opacity-60 hover:bg-opacity-100 hover:text-white z-10"
    @click="modalStore.openModal">
    <ReadingListIcon />
  </button>
</template>