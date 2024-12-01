<script setup lang="ts">
import { RepositoryFactory } from "@/repositories";
import { ref } from "vue";

const wifiRepo = RepositoryFactory.get("wifi");

console.log(wifiRepo);
</script>

<template>
  <section>
    <div>1</div>
    <div>2</div>
    <div>3</div>
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
}
</style>
