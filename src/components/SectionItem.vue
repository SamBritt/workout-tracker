<script setup lang="ts">
defineProps({
  label: String,
  value: String || Number
})
</script>

<template>
  <span class="flex gap-1 text-slate-400">
    {{ label }}:
    <p class="text-slate-200 whitespace-nowrap">{{ value }}</p>
  </span>
</template>
