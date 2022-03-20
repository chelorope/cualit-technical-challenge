<script setup>
import { useRoute } from "vue-router";
import useSWRV from "../util/customSwr";

import TutorialEditCard from "@/components/TutorialEditCard.vue";

const route = useRoute();
const { data, error } = useSWRV(() => `/tutorials/${route.params.id}`);

const handleSubmit = (event) => {
  console.log(event);
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
