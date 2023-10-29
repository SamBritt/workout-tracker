<script setup lang="ts">
const props = defineProps({
  label: {
    type: String
  },
  value: {
    type: String || Number
  },
  total: {
    type: String || Number
  }
})
</script>

<template>
  <div class="flex flex-col">
    <span class="flex justify-center text-gray-500 font-light text-sm mb-1">
      {{ label }}
    </span>
    <div
      class="relative flex items-center justify-center w-20 h-20 p-2 bg-gray-200 rounded-md text-center shadow-md">
      <span class="text-xl text-slate-700">
        {{ value }}
      </span>
      <div class="absolute right-2 top-1 text-xs font-light">{{ total }}</div>
    </div>
  </div>
</template>
