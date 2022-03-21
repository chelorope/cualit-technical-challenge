<script setup>
import { reactive } from "vue";

import Card from "@/components/Card.vue";
import Input from "@/components/Input.vue";
import Radio from "@/components/Radio.vue";
import Button from "@/components/Button.vue";

const props = defineProps({
  cardTitle: String,
  title: String,
  description: { default: "" },
  video: { default: "" },
  published: [Boolean, Number],
  showRemove: Boolean,
});
const emit = defineEmits(["submit", "remove"]);

const state = reactive({
  title: props.title,
  description: props.description,
  video: props.video,
  published: props.published ? "publico" : "oculto",
});

const handleSubmit = () => {
  emit("submit", { ...state, published: state.published === "publico" });
};
</script>

<template>
  <Card class="TutorialEditCard" :title="cardTitle" border>
    <form @submit.prevent="handleSubmit">
      <Input class="input" label="Titulo" v-model="state.title" required />
      <Input class="input" label="Descripcion" v-model="state.description" />
      <Input class="input" type="url" label="Video Url" v-model="state.video" />
      <Radio
        class="radio"
        label="Como quiero mantener el tutorial?"
        name="published"
        :options="[
          { label: 'Oculto', value: 'oculto' },
          { label: 'Publico', value: 'publico' },
        ]"
        v-model="state.published"
        required
      />
      <div class="buttons">
        <Button label="Guardar" type="submit" />
        <Button
          v-if="showRemove"
          class="remove"
          label="Eliminar"
          theme="danger"
          invert
          @click="$emit('remove')"
        />
      </div>
    </form>
  </Card>
</template>

<style scoped lang="scss">
.TutorialEditCard {
  margin: 2rem auto;

  .input {
    margin-bottom: 0.5rem;
  }

  .radio {
    margin-bottom: 1.3rem;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
}
</style>
