<script>
import { store } from '../store';

import CardContainer from './CardContainer.vue';
import SearcherFilters from './SearcherFilters.vue';
import axios from 'axios';

export default {
    name: 'CardsSearcher',

    components: {
        SearcherFilters,
        CardContainer
    },

    data() {
        return {
            store
        }
    },

    methods: {
        getFilteredCards(archetypeFilterString) {
            if (archetypeFilterString === '') {
                store.cardsSearchResult = [];
            } else {
                let completeApiURL = store.apiURL + 'cardinfo.php?archetype=' + archetypeFilterString
                axios.get(completeApiURL).then(callReturn => {
                    store.cardsSearchResult = callReturn.data.data;
                }).catch(error => {
                    store.cardSearchError = true;
                });
            }
        }
    },

    computed: {
        shouldFiltersBeDisabled() {
            return store.searchParametersCallError || !store.isApiBeenCalledForFilters ? true : false;
        }
    }
}
</script>

<template>
    <SearcherFilters :archetypes="store.archetypesList" :isFilterDisabled="shouldFiltersBeDisabled"
        @search="getFilteredCards" />

    <div class="cards-founded-container" v-show="store.isApiBeenCalledForFilters">
        <div class="cards-list-settings">
            <b>
                Found {{ store.cardsSearchResult.length }} cards
            </b>

            <div>
                <label for="cards-showed">Cards showed for page: </label>
                <select id="cards-showed">
                    <option value="10" selected>10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>

        <template v-if="!cardSearchError && !store.searchParametersCallError">
            <ul class="cards-list">
                <li v-for="card in store.cardsSearchResult" :key="card.id">
                    <CardContainer :cardName="card.name" :cardArchetype="card.archetype" cardImg="" />
                </li>
            </ul>
        </template>
        <template v-else>
            <strong class="error-message">
                Something is gone wrong,<br>
                try refreshing the page!
            </strong>
        </template>
    </div>
</template>

<style lang="scss" scoped>
.cards-founded-container {
    padding: 4.5rem;
    background-color: $clr-neutral-ltr;

    .cards-list-settings {
        background-color: $clr-neutral-dkr;
        color: $clr-neutral-ltr;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
    }

    .cards-list {
        margin-top: 1rem;
        display: flex;
        gap: 1rem;

        &>li {
            flex-basis: calc((100% - 4rem) / 5);
        }
    }
}
</style>