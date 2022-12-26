<script setup lang="ts">
import { onMounted } from "vue";
import { router } from "../router";
import { useCommitsStore } from "../stores/commits.store";
import { useAppStore } from "../stores/app.store";

const commitsStore = useCommitsStore();

const appStore = useAppStore();

onMounted(() => {
  commitsStore.getCommits();
});
</script>

<template>
  <button @click="router.back()">Back</button>

  <button @click="commitsStore.getCommits">Get Commits</button>

  <h2>Commits</h2>
  <h5>{{ appStore.repositoryPath }}</h5>

  <table v-if="!commitsStore.isLoading">
    <thead>
      <tr>
        <th>Subject</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="commit in commitsStore.commits">
        <td>{{ commit.subject }}</td>
        <td>{{ commit.relativeDate }}</td>
      </tr>
    </tbody>
  </table>

  <p v-else>Loading...</p>
</template>

<style scoped>
table {
  width: 100%;
}
</style>
