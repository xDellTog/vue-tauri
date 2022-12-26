import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
  const repositoryPath = ref<string>(".");

  return {
    repositoryPath,
  };
});
