<script setup lang="ts">
defineProps({
  heading: String
})
</script>

<template>
  <section>
    <h3 class="text-slate-200 text-lg">{{ heading }}</h3>
    <slot />
  </section>
</template>
