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

  <button :disabled="!!commitsStore.error" @click="commitsStore.getCommits">
    Get Commits
  </button>

  <h2>Commits</h2>
  <h5>{{ appStore.repositoryPath }}</h5>

  <div v-if="!commitsStore.isLoading">
    <div v-if="!commitsStore.error">
      <table v-if="commitsStore.commits.length > 0">
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
    </div>

    <div>{{ commitsStore.error }}</div>
  </div>

  <p v-else>Loading...</p>
</template>

<style scoped>
table {
  width: 100%;
}
</style>
