<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Input from '@/components/Input.vue'
import Label from '@/components/Label.vue'
import Button from '@/components/Button.vue'
</script>

<template>
  <div class="flex w-full border-2 border-slate-700 rounded-md px-4 py-2 gap-4">
    <div class="flex flex-col w-full">
      <Heading>Advanced Run</Heading>

      <div class="flex flex-col w-full h-full gap-2 justify-center">
        <span class="flex gap-2">
          <Input name="reps" />
          <Label for="reps">reps</Label>
        </span>
        <span class="flex gap-2">
          <Input name="distance" />
          <Label
            for="distance"
            sr />
        </span>
        <span class="flex gap-2">
          <Input name="time" />
          <Label for="rep">time</Label>
        </span>
      </div>
    </div>
    <div class="self-center h-48 w-2 bg-gray-200"/>
    <div class="flex flex-col w-full">
      <Heading>Repetitions</Heading>
      <div class="flex flex-col h-full gap-2">
        <div class="bg-gray-200 h-6 w-full rounded-md"></div>
        <div class="bg-gray-200 h-6 w-full rounded-md"></div>
        <Button>Save</Button>
      </div>
    </div>
  </div>
</template>
