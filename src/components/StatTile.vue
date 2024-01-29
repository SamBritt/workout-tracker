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
  <span
    class="flex justify-center items-baseline gap-1 text-zinc-300 bg-slate-700/50 p-4 w-full rounded-sm">
    <span class="text-amber-300 text-2xl">{{ value }}</span>

    <span>of</span>
    <span class="text-amber-300 text-2xl">{{ total }}</span>
    <span>{{ label }}</span>
  </span>
</template>
