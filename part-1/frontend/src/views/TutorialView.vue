<script setup>
import Card from "@/components/Card.vue";
import { useRoute } from "vue-router";
import useSWRV from "swrv";
const route = useRoute();
const { data } = useSWRV(`http://localhost:3030/tutorials/${route.params.id}`);
</script>

<template>
  <Card class="tutorial" title="Tutorial">
    <div v-if="error">Error cargando datos!</div>
    <div v-if="data">{{ data.title }}</div>
  </Card>
</template>
