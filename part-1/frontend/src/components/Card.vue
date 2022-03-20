<script setup>
defineProps({
  title: {
    type: String,
  },
  type: {
    type: String,
    default: "complex",
    validator: (value) => ["simple", "complex"].includes(value),
  },
});
</script>

<template>
  <div class="Card" :class="type">
    <h1 class="title">{{ title }}</h1>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.Card {
  padding: 0.6rem 0.8rem;
  border: var(--border);
  box-shadow: var(--shadow);
  border-radius: var(--border-radius);

  .title {
    padding: 0 0 0.4rem;
    margin: 0 0 0.5rem;
  }

  &.simple {
    .title {
      text-align: center;
    }
  }

  &.complex {
    background-color: var(--color-backgroud-secondary);

    .title {
      border-bottom: var(--border);
    }
  }
}
</style>
