<script setup lang="ts">
import Counter from "./components/Counter.vue";
import StoreProvider from "./components/StoreProvider.vue";
</script>

<template>
  Counter:
  <Counter />
  <Counter />
  <StoreProvider>
    <Counter />
    <Counter />
  </StoreProvider>
  <StoreProvider>
    <Counter />
    <Counter />
  </StoreProvider>
</template>
