<template>
  <div class="min-h-screen p-4 max-w-4xl mx-auto">
    <HeaderOverview :total="habits.length" />
    <HabitForm @add-habit="addHabit" />
    <HabitList :habits="habits" @remove="removeHabit" @toggle="toggleDoneForDate" />
  </div>
</template>

<script setup>
import { habits } from '../lib/store.js';
import HeaderOverview from './HeaderOverview.vue';
import HabitForm from './HabitForm.vue';
import HabitList from './HabitList.vue';

function addHabit(newHabit) {
  habits.value.unshift(newHabit);
}

function removeHabit(id) {
  habits.value = habits.value.filter(h => h.id !== id);
}

function toggleDoneForDate({ id, date }) {
  const h = habits.value.find(x => x.id === id);
  if (!h) return;
  const idx = h.history.indexOf(date);
  if (idx === -1) h.history.push(date);
  else h.history.splice(idx, 1);
}
</script>
