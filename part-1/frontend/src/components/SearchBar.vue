<script setup>
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
defineProps(["modelValue"]);
defineEmits(["update:modelValue", "submit"]);
</script>

<template>
  <div class="SearchBar">
    <div class="search">
      <Input
        class="input"
        placeholder="Buscar por titulo o descripción"
        :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
      />
      <Button class="submit" label="Buscar" invert @click="$emit('submit')" />
    </div>
    <Button
      v-if="modelValue"
      class="clear"
      label="Limpiar Búsqueda"
      theme="danger"
      invert
      @click="
        () => {
          $emit('update:modelValue', '');
          $emit('submit');
        }
      "
    />
  </div>
</template>

<style scoped lang="scss">
.SearchBar {
  margin-bottom: 3rem;

  .search {
    display: flex;
    .input {
      border-radius: var(--border-radius) 0 0 var(--border-radius);
    }

    .submit {
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
    }
  }

  .clear {
    position: absolute;
    margin-top: 0.4rem;
  }
}
</style>
