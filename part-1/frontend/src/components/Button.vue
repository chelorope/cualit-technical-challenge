<script setup>
defineProps(["label", "type"]);
</script>

<template>
  <button class="Button" :class="type">
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
.Button {
  background-color: var(--color-button-primary);
  padding: 0.4rem 0.6rem;
  color: var(--color-text-invert);
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;

  &.secondary {
    background-color: var(--color-button-secondary);
  }
}
</style>
