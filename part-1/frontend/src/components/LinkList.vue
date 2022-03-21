<script setup>
import { RouterLink } from "vue-router";
defineProps({
  items: {
    type: Array,
  },
});
</script>

<template>
  <div class="LinkList">
    <RouterLink
      v-for="(item, index) in items"
      :class="['item', { selected: item.selected }]"
      :key="index"
      :to="item.link"
    >
      {{ item.label }}
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.LinkList {
  border: var(--border);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .item {
    padding: 0.6rem 0.8rem;
    cursor: pointer;
    color: var(--color-text);
    border-bottom: var(--border);
    transition: background-color 0.2s, color 0.2s;

    &:last-child {
      border: none;
    }

    &.router-link-exact-active {
      color: var(--color-purple);
    }

    &:hover {
      background-color: var(--color-button-primary);
      color: var(--color-text-invert);
    }
  }
}
</style>
