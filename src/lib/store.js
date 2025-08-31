import { ref, watch } from 'vue';

const LS_KEY = 'habit_tracker_v1';

const initial = (typeof window !== 'undefined' && localStorage.getItem(LS_KEY))
  ? JSON.parse(localStorage.getItem(LS_KEY))
  : [];

export const habits = ref(initial);

if (typeof window !== 'undefined') {
  watch(habits, (val) => {
    localStorage.setItem(LS_KEY, JSON.stringify(val));
  }, { deep: true });
}
