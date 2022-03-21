<script setup>
import { useRoute, useRouter } from "vue-router";
import useSWRV from "../util/customSwr";
import { updateTutorial } from "../services/tutorials";

import TutorialEditCard from "@/components/TutorialEditCard.vue";

const router = useRouter();
const route = useRoute();
const { data } = useSWRV(() =>
  route.params.id ? `/tutorials/${route.params.id}` : undefined
);

const handleSubmit = async (event) => {
  const resp = await updateTutorial({
    id: data.value.id,
    ...event,
  });
  console.log(resp);
  router.push(`/tutoriales/${resp.id}`);
};
</script>

<template>
  <TutorialEditCard
    v-if="data"
    class="TutorialEditView"
    v-bind="{ video: data.video_url, ...data }"
    @submit="handleSubmit"
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
