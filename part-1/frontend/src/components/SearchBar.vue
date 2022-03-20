<script setup>
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
defineProps(["modelValue"]);
defineEmits(["update:modelValue", "submit"]);
</script>

<template>
  <div class="SearchBar">
    <Input
      class="input"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
    <Button
      class="submit-button"
      label="Buscar"
      invert
      @click="$emit('submit')"
    />
  </div>
</template>

<style scoped lang="scss">
.SearchBar {
  display: flex;
  margin-bottom: 2.5rem;

  .input {
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }

  .submit-button {
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }
}
</style>
