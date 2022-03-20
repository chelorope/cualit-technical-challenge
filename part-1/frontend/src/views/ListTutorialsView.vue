<script setup>
import Button from "@/components/Button.vue";
import Card from "@/components/Card.vue";
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button label="Submit" type="primary" />
    <Card title="The title">Test slot</Card>
  </div>
</template>

<style scoped lang="scss"></style>
