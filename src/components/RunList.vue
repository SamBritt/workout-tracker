<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import HistoryItem from '@/components/HistoryItem.vue'

const props = defineProps({
  list: {
    type: [Object],
    default: []
  }
})
</script>

<template>
  <div class="flex flex-col w-full bg-gray-200 rounded-md px-4 py-2 gap-2">
    <Heading>Run History</Heading>

    <div class="flex flex-col gap-4">
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
    </div>
  </div>
</template>
