<template>
  <ul class="mt-4 grid gap-3">
    <li v-for="habit in habits" :key="habit.id" class="bg-black p-3 rounded shadow flex items-center justify-between">
      <div>
        <router-link :to="`/habit/${habit.id}`" class="font-semibold hover:underline">
          {{ habit.title }}
        </router-link>
        <div class="text-sm text-gray-500" v-if="habit.notes">{{ habit.notes }}</div>
      </div>

      <div class="flex items-center gap-2">
        <button
          @click="$emit('toggle', { id: habit.id, date: todayISO })"
          class="px-2 py-1 border rounded"
          :aria-pressed="habit.history.includes(todayISO)"
        >
          Hoy 
        </button>

        <button @click="$emit('remove', habit.id)" class="text-red-500">Eliminar</button>
      </div>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  habits: { type: Array, required: true }
});
const emit = defineEmits(['remove', 'toggle']);
const todayISO = new Date().toISOString().slice(0, 10);
</script>
