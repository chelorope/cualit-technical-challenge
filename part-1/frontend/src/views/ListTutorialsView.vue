<script setup>
import Button from "@/components/Button.vue";
import Card from "@/components/Card.vue";
import LinkList from "@/components/LinkList.vue";
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button label="Submit" type="primary" />
    <Card title="The title">
      <LinkList
        :items="[
          { label: 'Test', link: '/1' },
          { label: 'Test2', link: '/2' },
        ]"
      />
    </Card>
  </div>
</template>

<style scoped lang="scss"></style>
