<template>
  <header class="mb-4">
    <h1 class="text-3xl font-bold">Habit Tracker</h1>
    <p class="text-sm text-gray-600">Llevas {{ total }} hábitos. ¡Sigue así! 💪</p>
  </header>
</template>

<script setup>
const props = defineProps({
  total: { type: Number, required: true }
});
</script>
