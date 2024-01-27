<script setup lang="ts">
import { computed, onBeforeMount, reactive, ref } from 'vue'
import Heading from '@/components/Heading.vue'
import ReportTile from '@/components/ReportTile.vue'
import { Workout } from '@/types/workout'

const props = defineProps<{
  workouts: Workout[]
}>()

const days = ref(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
const now = ref(new Date())
const current = computed(() => now.value.getDay())

</script>

<template>
  <div class="text-gray-200">
    <Heading>Weekly Report</Heading>

    <div class="flex relative gap-1 overflow-auto scroll">
      <ReportTile
        v-for="(item, idx) of days"
        @select="(workout) => $emit('select', workout)"
        :current="current"
        :workout="workouts[idx]"
        :id="idx" />
    </div>
  </div>
</template>

<style scoped>
.scroll::-webkit-scrollbar {
  width: 2px;
}

.scroll::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 0.5rem;
}

.scroll::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
