import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import GitService from "../services/git.service";

export const useCommitsStore = defineStore("commits", () => {
  const commits = ref<any[]>([]);
  const isLoading = ref(false);
  const error = ref("");

  onMounted(() => {
    getCommits();
  });

  function getCommits() {
    isLoading.value = true;
    GitService.getCommits()
      .then((response: any[]) => {
        console.log(response);
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
    isLoading,
    error,
    getCommits,
  };
});
