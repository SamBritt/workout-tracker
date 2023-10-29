<script setup lang="ts">
const props = defineProps({
  for: {
    type: String,
    required: true
  },
  sr: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <label
    :for="`${props.for}-input`"
    :class="['text-xs text-slate-400', { 'sr-only': sr }]">
    <slot />
  </label>
</template>
