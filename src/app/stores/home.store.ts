import { defineStore } from "pinia";
import { ref } from "vue";
import { open } from "@tauri-apps/api/dialog";
import { appDataDir } from "@tauri-apps/api/path";
import { router } from "../router";
import { useAppStore } from "./app.store";

export const useHomeStore = defineStore("home", () => {
  const repositories = ref<any[]>([]);
  const isLoading = ref(false);
  const error = ref("");

  const appStore = useAppStore();

  async function selectRepository() {
    const selectedRepository = await open({
      directory: true,
      multiple: false,
      defaultPath: await appDataDir(),
    });

    if (!selectedRepository) return false;

    if (Array.isArray(selectedRepository)) return false;

    const recentRepositories =
      JSON.parse(localStorage.getItem("RECENT_REPOSITORIES")!) || [];
    recentRepositories.push(selectedRepository);
    localStorage.setItem(
      "RECENT_REPOSITORIES",
      JSON.stringify(recentRepositories)
    );
    getRecentRepositories();
    openRepository(selectedRepository);
  }

  function getRecentRepositories() {
    isLoading.value = true;
    const recentRepositories =
      JSON.parse(localStorage.getItem("RECENT_REPOSITORIES")!) || [];
    repositories.value = recentRepositories;
    isLoading.value = false;
  }

  function clearRecentRepositories() {
    localStorage.removeItem("RECENT_REPOSITORIES");
    repositories.value = [];
  }

  function openRepository(repositoryPath: string) {
    appStore.repositoryPath = repositoryPath;
    router.push("/commits");
  }

  return {
    repositories,
    isLoading,
    error,
    selectRepository,
    getRecentRepositories,
    clearRecentRepositories,
    openRepository,
  };
});
