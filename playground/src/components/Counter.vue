<script setup lang="ts">
import { useAtom } from "jotai-vue";
import { countAtom } from "./atoms";
const [count, setCount] = useAtom(countAtom);
</script>

<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="setCount((prev) => prev + 1)">One up</button>
  </div>
</template>
