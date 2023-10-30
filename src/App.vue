<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
console.log('app')
</script>

<template>
  <header>
    <div class="wrapper flex justify-end mb-4">
      <nav class="flex gap-4 justify-center items-center w-32 bg-slate-700 text-slate-100 rounded-xl h-8 shadow-lg">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
