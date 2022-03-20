<script setup>
import Button from "@/components/Button.vue";
import Card from "@/components/Card.vue";
import LinkList from "@/components/LinkList.vue";
import useSWRV from "swrv";
const { data, error } = useSWRV("http://localhost:3030/tutorials");
</script>

<template>
  <div class="TutorialsPage">
    <h1>This is an about page</h1>
    <Button label="Submit" type="primary" />
    <div v-if="error">failed to load</div>
    <div v-if="!data">loading...</div>
    <div v-else>
      <div class="content">
        <Card class="tutorials" title="Tutoriales">
          <LinkList
            :items="
              data.map((item) => ({
                link: `/tutoriales/${item.id}`,
                label: item.title,
              }))
            "
          />
        </Card>
        <RouterView class="tutorial-details" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.TutorialsPage {
  .content {
    display: flex;

    .tutorials {
      flex: 1;
      margin-right: 0.8rem;
    }

    .tutorial-details {
      flex: 1;
    }
  }
}
</style>
