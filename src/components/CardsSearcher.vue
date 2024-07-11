<script>
import { store } from '../store';

import CardContainer from './CardContainer.vue';
import SearcherFilters from './SearcherFilters.vue';

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
    }
}
</script>

<template>
    <SearcherFilters :archetypes="store.archetypesList" :searchParametersError="store.searchParametersCallError"
        @search="getFilteredCards" />

    <div class="cards-founded-container">
        <div class="cards-list-settings">
            <b>
                Found placeholder cards
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

        <ul class="cards-list">
            <li>
                <CardContainer cardName="" cardArchetype="" cardImg="" />
            </li>
        </ul>
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