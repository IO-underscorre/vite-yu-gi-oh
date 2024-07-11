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
            store,

            numberOfCardsPerPageString: '5',
            pageNumber: 0
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
                    this.pageNumber = 0;
                    store.cardSearchError = false;
                }).catch(error => {
                    store.cardSearchError = true;
                });
            }
        }
    },

    computed: {
        shouldFiltersBeDisabled() {
            return store.searchParametersCallError || !store.isApiBeenCalledForFilters ? true : false;
        },

        getNumberOfCardsPerPage() {
            return parseInt(this.numberOfCardsPerPageString);
        },

        getFirstCardInNextPageIndex() {
            return (this.pageNumber + 1) * this.getNumberOfCardsPerPage;
        },

        getCurrentShownCards() {
            let firstCardInCurrentPageIndex = this.pageNumber * this.getNumberOfCardsPerPage;
            let firstCardInNextPageIndex = this.getFirstCardInNextPageIndex < store.cardsSearchResult.length ? this.getFirstCardInNextPageIndex : undefined;

            return store.cardsSearchResult.slice(firstCardInCurrentPageIndex, firstCardInNextPageIndex);
        },

        shouldPreviousPageButtonBeDisabled() {
            return this.pageNumber < 1 ? true : false;
        },

        shouldNextPageButtonBeDisabled() {
            return this.getFirstCardInNextPageIndex >= store.cardsSearchResult.length ? true : false;
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
                <label for="cards-showed">Cards per page: </label>
                <select id="cards-showed" v-model="numberOfCardsPerPageString" @change="pageNumber = 0">
                    <option value="5" selected>5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>

        <template v-if="!store.cardSearchError && !store.searchParametersCallError">
            <ul class="cards-list">
                <li v-for="card in getCurrentShownCards" :key="card.id">
                    <CardContainer :cardName="card.name" :cardArchetype="card.archetype"
                        :cardImg="card.card_images[0].image_url" />
                </li>
            </ul>

            <menu class="card-list-options">
                <li>
                    <button :class="{ disabled: shouldPreviousPageButtonBeDisabled }"
                        @click="pageNumber--">&#x2770;</button>
                </li>
                <li>
                    {{ pageNumber + 1 }}
                </li>
                <li>
                    <button :class="{ disabled: shouldNextPageButtonBeDisabled }"
                        @click="pageNumber++">&#x2771;</button>
                </li>
            </menu>
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
        margin: 1rem 0;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        &>li {
            flex-basis: calc((100% - 4rem) / 5);
        }
    }

    .card-list-options {
        text-align: center;

        li {
            display: inline-block;

            button {
                font-size: 1.5rem;
                line-height: 1;
                width: 2rem;
                height: 2rem;
                margin: 0 1rem;
                appearance: none;
                border-radius: .25rem;
                border: 1px solid $clr-neutral-dkr;
                background-color: $clr-neutral-dkr;
                color: $clr-neutral-ltr;

                &:hover {
                    box-shadow: 0 0 .25rem #00000080;
                    cursor: pointer;
                }

                &:active {
                    box-shadow: inset 0 0 .5rem #00000080;
                    filter: brightness(75%);
                }
            }
        }
    }

    .error-message {
        display: block;
        font-size: 5vw;
        padding: 5rem 0;
        text-align: center;
    }
}
</style>