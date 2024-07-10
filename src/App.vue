<script>
import AppHeader from './components/AppHeader.vue';
import CardsSearcher from './components/CardsSearcher.vue';

export default {
  name: 'App',

  components: {
    AppHeader,
    CardsSearcher
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
