<template>
  <form @submit.prevent="onSubmit" class="mt-4 bg-gray p-4 rounded shadow">
    <input
      v-model="title"
      placeholder="Nombre del hábito (p. ej. Leer 30 min)"
      class="w-full p-2 border rounded mb-2"
    />
    <textarea
      v-model="notes"
      placeholder="Notas (opcional)"
      class="w-full p-2 border rounded mb-2"
    />
    <div class="flex gap-2">
      <button class="px-4 py-2 rounded bg-blue-600 text-white">Agregar hábito</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['add-habit']);

const title = ref('');
const notes = ref('');

function onSubmit() {
  if (!title.value.trim()) return;
  const newHabit = {
    id: Date.now().toString(),
    title: title.value.trim(),
    notes: notes.value.trim(),
    history: [] 
  };
  emit('add-habit', newHabit);
  title.value = '';
  notes.value = '';
}
</script>
