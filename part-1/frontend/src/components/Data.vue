<script setup>
import useSWRV from "../util/customSwr";
const props = defineProps(["url"]);
const { data, error, mutate } = useSWRV(() => props.url);
</script>

<template>
  <div>
    <slot v-if="error" name="error">
      <div>Failed to load data</div>
    </slot>
    <slot v-if="!data" name="loading">
      <div>Loading...</div>
    </slot>
    <slot v-if="data" :data="data" :mutate="mutate" />
  </div>
</template>
