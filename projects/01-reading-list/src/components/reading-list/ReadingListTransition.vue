<script setup lang="ts">
import ReadingList from './ReadingList.vue';
</script>

<template>
  <Teleport to="body">
    <Transition name="modal" type="transition">
      <ReadingList />
    </Transition>
  </Teleport>
</template>