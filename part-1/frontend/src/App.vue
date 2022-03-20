<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />
  <RouterView class="view" />
</template>

<style lang="scss">
@import "@/assets/base.scss";

.view {
  max-width: 40rem;
  margin: auto;
}
</style>
