<script setup>
defineProps({
  options: { default: [] },
  name: String,
  modelValue: String,
  label: String,
  required: Boolean,
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="Radio">
    <p>{{ label }}</p>
    <div class="options">
      <div class="option" v-for="(option, index) in options" :key="index">
        <input
          class="input-elem"
          type="radio"
          :required="required"
          :name="name"
          :id="option.value"
          :value="option.value"
          :checked="modelValue === option.value"
          @change="$emit('update:modelValue', $event.target.value)"
        />
        <label class="label" :for="option.value">{{ option.label }}</label>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.Radio {
  .options {
    display: flex;
    margin-top: 0.1rem;

    .option {
      margin-right: 0.8rem;

      .input-elem {
        margin-right: 0.3rem;
      }

      .label {
        font-size: 0.9rem;
      }
    }
  }
}
</style>
