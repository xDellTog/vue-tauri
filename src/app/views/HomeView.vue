<script setup lang="ts">
import { router } from "../router";
import { useHomeStore } from "../stores/home.store";

const homeStore = useHomeStore();
</script>

<template>
  <h1>Home</h1>

  <button @click="router.push('/commits')">Commits</button>

  <button @click="homeStore.selectRepository">Select Repository</button>

  <h2>Recent Repositories</h2>

  <!-- <table v-if="!commitsStore.isLoading">
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

  <p v-else>Loading...</p> -->
</template>
