<script setup lang="ts">
import { computed, onBeforeMount, reactive, ref } from 'vue'

import Heading from '@/components/Heading.vue'
import ReportTile from '@/components/ReportTile.vue'

const now = ref(new Date())
const current = computed(() => now.value.getDay())
const days = ref(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
</script>

<template>
  <div class="text-gray-200">
    <Heading>Weekly Report</Heading>

    <div class="flex relative gap-1 overflow-auto">
      <ReportTile v-for="(item, idx) of days" :label="days[idx]" :current="current" :id="idx"/>
    </div>
  </div>
</template>
