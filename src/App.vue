<script>
import { store } from './store';

import AppHeader from './components/AppHeader.vue';
import CardsSearcher from './components/CardsSearcher.vue';
import axios from 'axios';

export default {
  name: 'App',

  components: {
    AppHeader,
    CardsSearcher
  },

  data() {
    return {
      store
    }
  },

  methods: {
    getArchetypes() {
      axios.get(store.apiURL + 'archetypes.php').then(callReturn => {
        store.archetypesList = callReturn.data;
        store.searchParametersCallError = false;
      }).catch(error => {
        store.searchParametersCallError = true;
      });
      store.isApiBeenCalledForFilters = true;
    }
  },

  created() {
    this.getArchetypes();
  }
}
</script>

<template>
  <AppHeader />

  <main>
    <CardsSearcher />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;

main {
  max-width: 105rem;
  width: 95%;
  margin: 0 auto;
}
</style>
