<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "secondary", "tertiary"].includes(value),
  },
  invert: {
    type: Boolean,
  },
});
</script>

<template>
  <button class="Button" :class="[theme, { invert }]">
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
@mixin button-theme($background, $color, $border, $background-h, $color-h) {
  background-color: var($background);
  color: var($color);
  border-color: var($border);

  &:hover {
    background-color: var($background-h);
    color: var($color-h);
  }

  &.invert {
    background-color: var($background-h);
    color: var($color-h);

    &:hover {
      background-color: var($background);
      color: var($color);
    }
  }
}
.Button {
  border: 1px solid var(--color-transparent);
  padding: 0.5rem 0.6rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &.primary {
    @include button-theme(
      --color-button-primary,
      --color-text-invert,
      --color-button-primary,
      --color-transparent,
      --color-button-primary
    );
  }

  &.secondary {
    @include button-theme(
      --color-button-secondary,
      --color-text-invert,
      --color-button-secondary,
      --color-transparent,
      --color-button-secondary
    );
  }

  &.tertiary {
    @include button-theme(
      --color-button-tertiary,
      --color-text-invert,
      --color-button-tertiary,
      --color-transparent,
      --color-button-tertiary
    );
  }
}
</style>
