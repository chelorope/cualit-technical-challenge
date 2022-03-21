<script setup>
import { useRouter } from "vue-router";
import { createTutorial } from "../services/tutorials";

import TutorialEditCard from "@/components/TutorialEditCard.vue";

const router = useRouter();

const handleSubmit = async (event) => {
  const resp = await createTutorial(event);
  console.log(resp);
  router.push(`/tutoriales/${resp.id}`);
};
</script>

<template>
  <TutorialEditCard class="TutorialEditView" @submit="handleSubmit" />
</template>

<style scoped lang="scss">
.TutorialEditView {
  .property {
    margin-bottom: 0.8rem;
    font-size: 0.9rem;

    .name {
      font-weight: 500;
      color: var(--color-text-bold);
    }
  }
}
</style>
