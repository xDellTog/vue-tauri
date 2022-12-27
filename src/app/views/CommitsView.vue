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
  <div class="flex flex-col h-screen w-screen">
    <div class="flex divide-x border-b">
      <button
        class="hover:bg-gray-100 active:bg-gray-200 px-2 py-1"
        @click="router.back()"
      >
        Change repository
      </button>

      <button
        class="hover:bg-gray-100 active:bg-gray-200 px-2 py-1"
        :disabled="!!commitsStore.error"
        @click="commitsStore.getCommits"
      >
        Refresh
      </button>
    </div>

    <div class="flex-grow">
      <div
        v-if="
          !commitsStore.isLoading &&
          !commitsStore.error &&
          commitsStore.commits.length > 0
        "
      >
        <table class="w-full select-none">
          <thead>
            <tr>
              <th class="text-left text-xl">Subject</th>
              <th class="text-left text-xl">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="odd:bg-gray-50 hover:bg-gray-100 cursor-pointer"
              v-for="commit in commitsStore.commits"
            >
              <td>{{ commit.subject }}</td>
              <td>{{ commit.relativeDate }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        v-if="commitsStore.error"
        class="flex h-full w-full items-center justify-center"
      >
        <p class="text-gray-400">
          {{ commitsStore.error }}
        </p>
      </div>

      <div
        v-if="commitsStore.isLoading"
        class="flex h-full w-full items-center justify-center"
      >
        <p>Loading...</p>
      </div>
    </div>

    <div
      :class="`flex divide-x border-t ${
        commitsStore.error ? 'bg-red-500' : 'bg-blue-500'
      }`"
    >
      <button
        class="text-sm text-white hover:opacity-80 active:opacity-60 px-2 py-1"
      >
        {{ appStore.repositoryPath }}
      </button>
    </div>
  </div>
</template>
