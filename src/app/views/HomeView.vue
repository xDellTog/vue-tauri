<script setup lang="ts">
import { router } from "../router";
import { useCounterStore } from "../stores/counter";

const counterStore = useCounterStore();
</script>

<template>
  <h1>Home</h1>

  <h2>{{ counterStore.count }}</h2>
  <h3>{{ counterStore.doubleCount }}</h3>

  <button @click="counterStore.increment">Increment</button>

  <button @click="router.push('/commits')">Commits</button>
</template>
