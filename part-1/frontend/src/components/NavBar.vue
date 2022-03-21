<script setup>
import { RouterLink } from "vue-router";
import { TUTORIALS_PATH, TUTORIALS_CREATE_FULL_PATH } from "../router/paths";
</script>

<template>
  <header class="NavBar">
    <RouterLink to="/" class="logo">Tutos.com</RouterLink>
    <RouterLink :to="TUTORIALS_PATH" class="link">Tutoriales</RouterLink>
    <RouterLink :to="TUTORIALS_CREATE_FULL_PATH" class="link"
      >Agregar</RouterLink
    >
  </header>
</template>

<style scoped lang="scss">
.NavBar {
  background-color: var(--color-backgroud-secondary);
  padding: 0.8rem 1.5rem;

  .logo {
    font-size: 1rem;
    color: var(--color-text-bold);
    margin-bottom: 0;
  }

  .link {
    font-size: 0.8rem;
    margin: 0 0.5rem;

    &.router-link-active {
      color: var(--color-green);
    }
  }
}
</style>
