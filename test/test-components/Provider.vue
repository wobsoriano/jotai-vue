<script setup lang="ts">
import { createStore } from "jotai/vanilla";
import { provideStore } from "../";

const store = createStore();
provideStore(store);
</script>

<template>
  <div>
    Provider
    <hr />
    <slot />
  </div>
</template>
