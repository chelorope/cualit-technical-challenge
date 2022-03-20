<script setup>
defineProps(["name", "modelValue", "label"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="Input" :for="name">
    <p>{{ label }}</p>
    <input
      class="input-elem"
      type="text"
      :name="name"
      :id="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value.trim())"
    />
  </label>
</template>

<style scoped lang="scss">
.Input {
  width: 100%;
  .input-elem {
    width: inherit;
    padding: 0.5rem 0.7rem;
    border: var(--border);
  }
}
</style>
