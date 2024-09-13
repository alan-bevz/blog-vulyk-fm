<script setup lang="ts">
import { ConfigProvider } from 'radix-vue';
</script>

<template>
  <ConfigProvider :use-id="() => useId() ?? ''">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ConfigProvider>
</template>
