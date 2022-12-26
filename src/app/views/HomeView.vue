<script setup lang="ts">
import { useHomeStore } from "../stores/home.store";
import { onMounted } from "vue";

const homeStore = useHomeStore();

onMounted(() => {
  homeStore.getRecentRepositories();
});
</script>

<template>
  <h1>Home</h1>

  <button @click="homeStore.selectRepository">Select Repository</button>

  <button @click="homeStore.getRecentRepositories">Refresh</button>

  <button @click="homeStore.clearRecentRepositories">
    Clear Recent Repositories
  </button>

  <h2>Recent Repositories</h2>

  <div v-if="!homeStore.isLoading">
    <table v-if="homeStore.repositories.length > 0">
      <thead>
        <tr>
          <th>Path</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="repository in homeStore.repositories"
          @click="() => homeStore.openRepository(repository)"
        >
          <td>{{ repository }}</td>
        </tr>
      </tbody>
    </table>

    <p v-else>No recent repositories</p>
  </div>

  <p v-else>Loading...</p>
</template>

<style scoped>
table {
  width: 100%;
}
</style>
