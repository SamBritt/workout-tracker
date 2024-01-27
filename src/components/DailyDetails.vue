<script setup lang="ts">
const props = defineProps({
  current: {
    type: Object
  }
})
</script>

<template>
  <div class="bg-slate-700 py-2 px-4 rounded-md w-1/2">
    <h2 class="text-xl text-slate-300">{{ current.day }}</h2>

    <div>
        <ul>
            <li v-for="item in current.details">
            <span>{{item.reps}}</span>
            <span> x </span>
            <span>{{item.distance}}</span>
            </li>
        </ul>

    </div>
  </div>
</template>
