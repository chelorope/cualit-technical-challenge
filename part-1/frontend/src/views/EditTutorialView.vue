<script setup>
import { useRoute, useRouter } from "vue-router";
import useSWRV from "../util/customSwr";
import { updateTutorial, removeTutorial } from "../services/tutorials";

import TutorialEditCard from "@/components/TutorialEditCard.vue";

const router = useRouter();
const route = useRoute();
const { data } = useSWRV(() =>
  route.params.id ? `/tutorials/${route.params.id}` : undefined
);

const handleSubmit = async (event) => {
  if (confirm("Desea guardar los cambios?")) {
    const resp = await updateTutorial({
      id: data.value.id,
      ...event,
    });
    router.push(`/tutoriales/${resp.id}`);
  }
};

const handleRemove = async () => {
  if (confirm(`Desea eliminar el tutorial "${data.value.title}"`)) {
    await removeTutorial(data.value.id);
    router.push(`/tutoriales`);
  }
};
</script>

<template>
  <TutorialEditCard
    cardTitle="Edit Tutorial"
    v-if="data"
    class="TutorialEditView"
    v-bind="{ video: data.video_url, ...data }"
    @submit="handleSubmit"
    @remove="handleRemove"
    showRemove
  />
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
