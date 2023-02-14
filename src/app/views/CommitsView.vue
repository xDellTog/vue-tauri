<script setup lang="ts">
// import Split from "../components/split/Split.vue";
// import SplitArea from "../components/split/SplitArea.vue";

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

    <div class="flex flex-grow">
      <!-- <Split style="height: 500px">
        <SplitArea :size="25"> -->
      <table
        v-if="
          !commitsStore.isLoading &&
          !commitsStore.error &&
          commitsStore.commits.length > 0
        "
        :class="`select-none ${
          commitsStore.selectedCommits.length > 0 ? 'w-9/12' : 'w-full'
        }`"
      >
        <thead>
          <tr>
            <th class="text-left text-xl">Subject</th>
            <th class="text-left text-xl">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(commit, i) in commitsStore.commits"
            :class="`cursor-pointer ${
              commitsStore.selectedCommits.includes(i)
                ? 'bg-gray-200'
                : 'odd:bg-gray-50 hover:bg-gray-100'
            }`"
            @click="() => commitsStore.selectCommit(i)"
          >
            <td>{{ commit.subject }}</td>
            <td>{{ commit.relativeDate }}</td>
          </tr>
        </tbody>
      </table>

      <div
        class="bg-red-500 h-full w-3/12"
        v-if="commitsStore.selectedCommits.length > 0"
      >
        <span v-for="commit in commitsStore.selectedCommits">
          {{ commit }}
        </span>
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
