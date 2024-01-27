<script setup lang="ts">
const props = defineProps({
  workout: Object
})
</script>

<template>
  <div class="flex items-center justify-center bg-gray-100 h-8 w-full rounded-md gap-2 shadow-md">
    <span class="bg-slate-700 h-full rounded-l-md flex items-center p-2 text-slate-100">
      Mon. Oct. 3rd:
    </span>
    <span class="flex flex-1 gap-1 items-center">
      <div v-for="(data, idx) in workout?.details">
        <template v-if="idx === 0">
          <template v-if="workout?.type !== 'run'">
            <span>{{ data.reps }} reps</span>

            <span class="text-slate-400 text-xs">x</span>
          </template>

          <span>
            {{ data.distance }}
            <span>{{ data.length }}</span>
          </span>

          <span class="text-slate-400 text-xs">@</span>

          <span>
            {{ data.pace }}
            <span>{{ data.paceType }}</span>
          </span>
        </template>
      </div>
    </span>
  </div>
</template>
