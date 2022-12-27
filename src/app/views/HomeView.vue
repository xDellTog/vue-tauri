<script setup lang="ts">
import { useHomeStore } from "../stores/home.store";
import { onMounted } from "vue";

const homeStore = useHomeStore();

onMounted(() => {
  homeStore.getRecentRepositories();
});
</script>

<template>
  <div class="flex flex-col h-screen w-screen">
    <div class="flex border-b divide-x">
      <button
        class="hover:bg-gray-100 active:bg-gray-200 px-2 py-1"
        @click="homeStore.selectRepository"
      >
        Select Repository
      </button>

      <button
        class="hover:bg-gray-100 active:bg-gray-200 px-2 py-1"
        @click="homeStore.getRecentRepositories"
      >
        Refresh
      </button>

      <button
        class="hover:bg-gray-100 active:bg-gray-200 px-2 py-1"
        @click="homeStore.clearRecentRepositories"
      >
        Clear Recent Repositories
      </button>
    </div>

    <div class="flex-grow">
      <div v-if="!homeStore.isLoading && homeStore.repositories.length > 0">
        <table class="w-full select-none">
          <thead>
            <tr>
              <th class="text-left text-xl">Recent Repositories</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="odd:bg-gray-50 hover:bg-gray-100 cursor-pointer"
              v-for="repository in homeStore.repositories"
              @click="() => homeStore.openRepository(repository)"
            >
              <td>{{ repository }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        v-if="homeStore.repositories.length === 0"
        class="flex h-full w-full items-center justify-center"
      >
        <p class="text-gray-400">No recent repositories</p>
      </div>

      <div
        v-if="homeStore.isLoading"
        class="flex h-full w-full items-center justify-center"
      >
        <p>Loading...</p>
      </div>
    </div>
  </div>
</template>
