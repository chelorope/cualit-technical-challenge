<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "secondary", "tertiary"].includes(value),
  },
  inverted: {
    type: Boolean,
  },
});
</script>

<template>
  <button class="Button" :class="type">
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
.Button {
  border: 1px solid var(--color-transparent);
  padding: 0.5rem 0.6rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &.primary {
    background-color: var(--color-button-primary);
    color: var(--color-text-invert);
    border-color: var(--color-purple);

    &:hover {
      background-color: var(--color-transparent);
      color: var(--color-purple);
    }
  }

  &.secondary {
    background-color: var(--color-button-secondary);
  }
}
</style>
