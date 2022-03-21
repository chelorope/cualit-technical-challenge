<script setup>
import { ref } from "vue";
import { createTutorial } from "../services/tutorials";

import TutorialEditCard from "@/components/TutorialEditCard.vue";
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";

const submited = ref(false);

const handleSubmit = async (event) => {
  const resp = await createTutorial(event);
  console.log(resp);
  submited.value = true;
};
</script>

<template>
  <TutorialEditCard
    v-if="!submited"
    cardTitle="Crear Tutorial"
    class="TutorialEditView"
    @submit="handleSubmit"
  />
  <Card
    v-else
    title="El tutorial se agregó correctamente"
    class="success"
    type="simple"
    border
  >
    <Button
      label="Agregar otro tutorial"
      theme="secondary"
      @click="submited = false"
    />
  </Card>
</template>

<style scoped lang="scss">
.TutorialEditCard {
}
.success {
  margin-top: 2rem;
  text-align: center;
}
</style>
