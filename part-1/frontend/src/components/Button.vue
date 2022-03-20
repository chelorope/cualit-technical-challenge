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
});
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
  border-radius: var(--border-radius);
  cursor: pointer;

  &.secondary {
    background-color: var(--color-button-secondary);
  }
}
</style>
