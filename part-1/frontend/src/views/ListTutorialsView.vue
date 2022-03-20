<script setup>
import { ref } from "vue";
import Card from "@/components/Card.vue";
import LinkList from "@/components/LinkList.vue";
import SearchBar from "@/components/SearchBar.vue";
import useSWRV from "swrv";

const search = ref("");
const submittedSearch = ref("");
const { data, error } = useSWRV(
  () =>
    `http://localhost:3030/tutorials${
      submittedSearch.value ? `?title=${submittedSearch.value}` : ""
    }`
);
const handleSearch = () => {
  console.log(search.value);
  submittedSearch.value = search.value;
};
</script>

<template>
  <div class="TutorialsPage">
    <SearchBar v-model="search" @submit="handleSearch" />
    <div v-if="error">failed to load</div>
    <div v-if="!data">loading...</div>
    <div v-else>
      <div v-if="data.length" class="content">
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
  padding: 2rem 0 0;

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
