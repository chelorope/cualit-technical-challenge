<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import useSWRV from "../util/customSwr";

import Card from "@/components/Card.vue";
import LinkList from "@/components/LinkList.vue";
import SearchBar from "@/components/SearchBar.vue";

const search = ref("");
const submittedSearch = ref("");
const { data, error } = useSWRV(
  () =>
    `/tutorials${
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
    <SearchBar
      v-model="search"
      @submit="handleSearch"
      @keyup.enter="handleSearch"
    />
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
        <Card class="tutorial-details" title="Tutorial">
          <RouterView />
        </Card>
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
      margin-right: 1rem;
    }

    .tutorial-details {
      flex: 1;
    }
  }
}
</style>
