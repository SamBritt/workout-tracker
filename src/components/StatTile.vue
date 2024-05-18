<script setup lang="ts">
defineProps<{
  label: string
  value: string | number
  total: string | number
}>()
</script>

<template>
  <span
    class="flex justify-center items-baseline gap-1 text-zinc-300 bg-slate-700/50 p-4 w-full rounded-sm shadow-lg">
    <span class="text-amber-300 text-2xl">{{ value }}</span>

    <span>of</span>
    <span class="text-amber-300 text-2xl">{{ total }}</span>
    <span>{{ label }}</span>
  </span>
</template>
