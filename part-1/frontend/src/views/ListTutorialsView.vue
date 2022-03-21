<script setup>
import { ref } from "vue";
import { RouterView, useRoute, RouterLink } from "vue-router";
import useSWRV from "../util/customSwr";
import { removeAllTutorials } from "../services/tutorials";

import Card from "@/components/Card.vue";
import LinkList from "@/components/LinkList.vue";
import SearchBar from "@/components/SearchBar.vue";
import Button from "@/components/Button.vue";

const route = useRoute();
const search = ref("");
const submittedSearch = ref("");

const { data, error, mutate } = useSWRV(
  () =>
    `/tutorials?${
      submittedSearch.value ? `?title=${submittedSearch.value}` : ""
    }`
);

const handleSearch = () => {
  console.log(search.value);
  submittedSearch.value = search.value;
};

const handleRemoveAll = async () => {
  if (confirm("Seguro que quieres eliminar todos los tutoriales?")) {
    await removeAllTutorials();
    mutate();
  }
};
</script>

<template>
  <div class="TutorialsPage">
    <div v-if="error">failed to load</div>
    <div v-if="!data">loading...</div>
    <div v-else-if="data.length">
      <SearchBar
        v-model="search"
        @submit="handleSearch"
        @keyup.enter="handleSearch"
      />
      <div v-if="data.length" class="content">
        <Card class="tutorials" title="Tutoriales">
          <LinkList
            class="links"
            :items="
              data.map((item) => ({
                link: `/tutoriales/${item.id}`,
                label: item.title,
                selected: item.id === route?.params?.id,
              }))
            "
          />
          <Button
            theme="danger"
            label="Eliminar todos"
            :style="{ 'margin-top': '1rem' }"
            invert
            @click="handleRemoveAll"
          />
        </Card>
        <Card class="tutorial-details" title="Tutorial">
          <RouterView />
        </Card>
      </div>
    </div>

    <Card
      v-else-if="!data.length && search"
      class="tutorials-empty"
      :title="`No se encontraron tutoriales con el titulo &quot;${search}&quot;`"
      type="simple"
      border
    >
      <p
        class="link"
        @click="
          () => {
            search = '';
            handleSearch();
          }
        "
      >
        Mostrar todos
      </p>
    </Card>

    <Card
      v-else
      class="tutorials-empty"
      title="No hay tutoriales aquí"
      type="simple"
      border
    >
      Comencemos por
      <RouterLink class="link" to="/tutoriales/crear">agregar</RouterLink>
      uno
    </Card>
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

      .links {
        max-height: 50vh;
        overflow: scroll;
      }
    }

    .tutorial-details {
      flex: 1;
    }
  }

  .tutorials-empty {
    text-align: center;

    .link {
      color: var(--color-green-1);
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
