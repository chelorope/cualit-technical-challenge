<script setup>
import { RouterView } from "vue-router";

import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />
  <RouterView class="MainView" />
</template>

<style lang="scss">
@import "@/assets/base.scss";

.MainView {
  padding: 0 0.3rem;
  max-width: 40rem;
  margin: auto;
}
</style>
