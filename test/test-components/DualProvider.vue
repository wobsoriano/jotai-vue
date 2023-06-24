<script lang="ts" setup>
import Provider from "./Provider.vue";
import DualComponent from "./DualComponent.vue";
</script>

<template>
  <Provider data-testid="provider-1">
    <DualComponent data-testid="pair-1" />
  </Provider>
  <Provider data-testid="provider-2">
    <DualComponent data-testid="pair-2" />
  </Provider>
  <DualComponent data-testid="pair-3" />
</template>
