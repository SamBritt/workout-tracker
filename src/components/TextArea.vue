<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: 'textarea',
    required: true
  }
})
</script>

<template>
  <textarea
    :id="`${name}-input`"
    :name="`${name}-input`"
    placeholder="Enter your notes..."
    class="text-slate-100 bg-slate-600 px-2 rounded-sm"></textarea>
</template>
