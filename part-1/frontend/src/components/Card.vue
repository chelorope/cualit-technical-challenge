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
  border: {
    type: Boolean,
  },
});
</script>

<template>
  <div class="Card" :class="[type, { border }]">
    <h1 class="title">{{ title }}</h1>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.Card {
  border-radius: var(--border-radius);

  .title {
    padding: 0 0 0.4rem;
    margin: 0 0 0.6rem;
  }

  &.border {
    padding: 0.6rem 0.8rem 0.8rem;
    border: var(--border);
    box-shadow: var(--shadow);
  }

  &.simple {
    .title {
      text-align: center;
    }
  }

  &.complex {
    &.border {
      background-color: var(--color-backgroud-secondary);
    }

    .title {
      border-bottom: var(--border);
    }
  }
}
</style>
