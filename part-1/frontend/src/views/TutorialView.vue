<script setup>
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
import { useRoute } from "vue-router";
import useSWRV from "swrv";
const route = useRoute();
const { data, error } = useSWRV(
  `http://localhost:3030/tutorials/${route.params.id}`
);
</script>

<template>
  <Card class="Tutorial" title="Tutorial">
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
        <span class="name">Estado: </span>
        <span>{{ data.published ? "Publicado" : "Oculto" }}</span>
      </div>
      <Button type="tertiary" label="Editar" />
    </div>
  </Card>
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
