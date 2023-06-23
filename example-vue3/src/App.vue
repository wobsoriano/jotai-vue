<script setup lang="ts">
import { useAtom, atom } from "jotai-vue";

const countAtom = atom(3);

const [count, setCount] = useAtom(countAtom);
</script>

<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="setCount((prev) => prev + 1)">One up</button>
  </div>
</template>
