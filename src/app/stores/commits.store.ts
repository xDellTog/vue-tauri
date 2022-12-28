import { defineStore } from "pinia";
import { ref } from "vue";
import GitService from "../services/git.service";
import { useAppStore } from "./app.store";

export const useCommitsStore = defineStore("commits", () => {
  const commits = ref<any[]>([]);
  const selectedCommits = ref<any[]>([]);
  const isLoading = ref(false);
  const error = ref("");

  const appStore = useAppStore();

  function selectCommit(index: number) {
    const hasCommit = selectedCommits.value.some((ic) => ic === index);
    if (!hasCommit) {
      selectedCommits.value.push(index);
    } else {
      selectedCommits.value = selectedCommits.value.filter(
        (ic) => ic !== index
      );
    }
  }

  function getCommits() {
    commits.value = [];
    isLoading.value = true;
    error.value = "";
    GitService.getCommits(appStore.repositoryPath)
      .then((response: any[]) => {
        commits.value = response;
        isLoading.value = false;
      })
      .catch((err) => {
        console.log(err);
        error.value = err;
        isLoading.value = false;
      });
  }

  return {
    commits,
    selectedCommits,
    isLoading,
    error,
    getCommits,
    selectCommit,
  };
});
