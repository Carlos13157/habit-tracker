<template>
  <div class="p-4 max-w-3xl mx-auto">
    <router-link to="/" class="text-sm text-blue-600 mb-2 inline-block">← Volver</router-link>

    <h2 class="text-2xl font-bold mb-2">{{ habit?.title }}</h2>
    <p class="text-black-600 mb-4">{{ habit?.notes }}</p>

    <section class="bg-black p-4 rounded shadow">
      <h3 class="font-semibold mb-2">Historial (fechas completadas)</h3>
      <ul class="list-disc pl-5">
        <li v-for="d in habit?.history" :key="d">{{ d }}</li>
        <li v-if="!habit || habit.history.length === 0" class="text-sm text-gray-500">Sin registros aún.</li>
      </ul>

      <div class="mt-4">
        <button @click="toggleToday" class="px-3 py-1 border rounded mr-2">Marcar/desmarcar hoy</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { habits } from '../lib/store.js';

const route = useRoute();
const id = route.params.id;

const habit = computed(() => {
  return habits.value.find(h => h.id === id);
});

function toggleToday() {
  const h = habit.value;
  if (!h) return;
  const date = new Date().toISOString().slice(0, 10);
  const idx = h.history.indexOf(date);
  if (idx === -1) h.history.push(date);
  else h.history.splice(idx, 1);
}
</script>
