<script setup>
import { useRoute, useRouter } from "vue-router";
import useSWRV from "../util/customSwr";

import Button from "@/components/Button.vue";

const route = useRoute();
const router = useRouter();
const { data, error } = useSWRV(() =>
  route.params.id ? `/tutorials/${route.params.id}` : undefined
);
</script>

<template>
  <div class="Tutorial">
    <div v-if="error">Error cargando datos!</div>
    <div v-if="data">
      <div class="property">
        <span class="name">Titulo: </span>
        <span>{{ data.title }}</span>
      </div>
      <div class="property">
        <span class="name">Descripción: </span>
        <span>{{ data.description ? data.description : "-" }}</span>
      </div>
      <div class="property">
        <span class="name">Video Url: </span>
        <span>{{ data.video_url ? data.video_url : "-" }}</span>
      </div>
      <div class="property">
        <span class="name">Estado: </span>
        <span>{{ data.published ? "Publicado" : "Oculto" }}</span>
      </div>
      <Button
        theme="tertiary"
        label="Editar"
        @click="
          () => {
            router.push(`/tutoriales/${data.id}/editar`);
          }
        "
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.Tutorial {
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
