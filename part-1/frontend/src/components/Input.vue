<script setup>
defineProps({
  name: String,
  modelValue: String,
  label: String,
  required: Boolean,
  type: {
    type: String,
    default: "text",
    validator: (value) =>
      ["text", "url", "email", "password", "search", "tel", "number"].includes(
        value
      ),
  },
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="Input" :for="name">
    <p>{{ label }}</p>
    <input
      class="input-elem"
      :type="type"
      :name="name"
      :id="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value.trim())"
      :required="required"
    />
  </label>
</template>

<style scoped lang="scss">
.Input {
  width: 100%;
  display: block;

  .input-elem {
    width: inherit;
    padding: 0.5rem 0.7rem;
    border: var(--border);
  }
}
</style>
