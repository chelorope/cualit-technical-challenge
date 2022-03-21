<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import useSWRV from "../util/customSwr";
import { GET_TUTORIALS_EDIT_FULL_PATH } from "../router/paths";

import Button from "@/components/Button.vue";

const route = useRoute();
const router = useRouter();
const { data, error } = useSWRV(() =>
  route.params.id ? `/tutorials/${route.params.id}` : undefined
);

const properties = computed(() =>
  data.value
    ? [
        { label: "Titulo", value: data.value.title },
        {
          label: "Descripción",
          value: data.value.description ? data.value.description : "-",
        },
        {
          label: "Video Url",
          value: data.value.video_url ? data.value.video_url : "-",
        },
        {
          label: "Estado",
          value: data.value.published ? "Publicado" : "Oculto",
        },
      ]
    : []
);
</script>

<template>
  <div class="Tutorial">
    <div v-if="error">Error cargando datos!</div>
    <div v-if="data">
      <div v-for="(prop, index) in properties" :key="index" class="property">
        <span class="name">{{ prop.label }}: </span>
        <span>{{ prop.value }}</span>
      </div>
      <Button
        theme="tertiary"
        label="Editar"
        @click="
          () => {
            router.push(GET_TUTORIALS_EDIT_FULL_PATH(data.id));
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
