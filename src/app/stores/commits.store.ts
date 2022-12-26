import { defineStore } from "pinia";
import { ref } from "vue";
import GitService from "../services/git.service";
import { useAppStore } from "./app.store";

export const useCommitsStore = defineStore("commits", () => {
  const commits = ref<any[]>([]);
  const isLoading = ref(false);
  const error = ref("");

  const appStore = useAppStore();

  function getCommits() {
    isLoading.value = true;
    GitService.getCommits(appStore.repositoryPath)
      .then((response: any[]) => {
        commits.value = response;
        isLoading.value = false;
      })
      .catch((err) => {
        error.value = err;
        isLoading.value = false;
      });
  }

  return {
    commits,
    isLoading,
    error,
    getCommits,
  };
});
