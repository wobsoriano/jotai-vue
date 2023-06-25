<script setup lang="ts">
import { useAtom } from '../../'
import { countAtom } from './testAtoms'
const [count, setCount] = useAtom(countAtom)
</script>

<template>
  <div>
    <p>Times clicked: {{ count }}</p>
    <button @click="setCount((prev) => prev + 1)">
      increment
    </button>
  </div>
</template>
