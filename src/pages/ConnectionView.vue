<script setup lang="ts">
import WifiConnection from "@/components/WifiConnection.vue";
import WifiInfo from "@/components/WifiInfo.vue";
</script>

<template>
  <section>
    <WifiConnection />
    <WifiInfo />
  </section>
</template>

<style lang="scss" scoped>
h1 {
  color: black;
  span {
    color: grey;
  }
}

section {
  display: flex;
  justify-content: space-between; 
  gap: 1rem;
}
</style>
