<script setup>
import { ref } from "vue";
import { RouterView, useRoute, RouterLink } from "vue-router";
import { removeAllTutorials } from "../services/tutorials";
import { TUTORIALS_CREATE_FULL_PATH } from "../router/paths";

import Card from "@/components/Card.vue";
import LinkList from "@/components/LinkList.vue";
import SearchBar from "@/components/SearchBar.vue";
import Button from "@/components/Button.vue";
import Data from "@/components/Data.vue";

const route = useRoute();
const search = ref("");
const submittedSearch = ref("");

const handleSearch = () => {
  submittedSearch.value = search.value;
};

const handleRemoveAll = async (mutate) => {
  if (confirm("Seguro que quieres eliminar todos los tutoriales?")) {
    await removeAllTutorials();
    mutate();
  }
};
</script>

<template>
  <Data
    class="TutorialsPage"
    :url="`/tutorials${submittedSearch ? `?search=${submittedSearch}` : ''}`"
  >
    <template #error> Error loading Tutorials </template>
    <template #loading>Loading Tutorials....</template>
    <template #default="{ data, mutate }">
      <div v-if="data.length">
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
              @click="handleRemoveAll(mutate)"
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
        <RouterLink class="link" :to="TUTORIALS_CREATE_FULL_PATH"
          >agregar</RouterLink
        >
        uno
      </Card>
    </template>
  </Data>
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
