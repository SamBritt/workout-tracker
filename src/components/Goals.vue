<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import TextArea from '@/components/TextArea.vue'
import Label from '@/components/Label.vue'
import Input from '@/components/VInput.vue'
import { ref } from 'vue';

const mileage = ref<number>(0)
</script>


<template>
  <div class="flex flex-col w-full border-2 border-slate-400 rounded-md px-4 py-2">
    <Heading>Goals</Heading>

    <div class="flex flex-col">
      <Label for="weekly-mileage">Mileage this week</Label>
      <Input v-model="mileage" type="number" name="weekly-mileage" />
    </div>
    
    <div class="flex flex-col w-full">
      <Label for="goal">Notes</Label>
      <TextArea name="goal" />
    </div>
  </div>
</template>
