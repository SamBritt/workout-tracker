<script setup lang="ts">
import { computed } from 'vue'

const { first = 'First', last = 'Last' } = defineProps<{
  first?: string
  last?: string
}>()

const initials = computed(() => {
  return first.charAt(0) + last.charAt(0)
})
</script>

<template>
  <div
    class="flex items-center justify-center bg-slate-600 rounded-full text-slate-200 text-sm font-medium w-8 h-8">
    {{ initials }}
  </div>
</template>

<style></style>
