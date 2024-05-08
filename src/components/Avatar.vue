<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  first: {
    type: String,
    default: 'First'
  },
  last: {
    type: String,
    default: 'Last'
  }
})

const initials = computed(() => {
  return props.first.charAt(0) + props.last.charAt(0)
})
</script>

<template>
  <div class="flex items-center justify-center bg-slate-600 rounded-full w-8 h-8 text-slate-200 text-sm font-medium">
    {{ initials }}
  </div>
</template>

<style></style>
