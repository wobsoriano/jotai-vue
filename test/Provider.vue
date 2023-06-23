<script setup lang="ts">
import { createStore } from "jotai/vanilla";
import { provideStore } from "../";

const store = createStore();
provideStore(store);
</script>

<template>
  <slot />
</template>
