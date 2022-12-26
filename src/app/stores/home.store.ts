import { defineStore } from "pinia";
import { onMounted, ref } from "vue";

export const useHomeStore = defineStore("home", () => {
  const repositories = ref<any[]>([]);
  const isLoading = ref(false);
  const error = ref("");

  onMounted(() => {
    getRecentRepositories();
  });

  function selectRepository() {
    // TODO: use tauri dialog api
  }
  async function getRecentRepositories() {
    // TODO: get recent from localStorage
  }

  return {
    repositories,
    isLoading,
    error,
    selectRepository,
    getRecentRepositories,
  };
});
