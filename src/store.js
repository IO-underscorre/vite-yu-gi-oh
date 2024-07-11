import { reactive } from "vue";

export const store = reactive({
    archetypesList: [],
    cardsSearchResult: [],
    apiURL: 'https://db.ygoprodeck.com/api/v7/',
    searchParametersCallError: false,
    cardSearchError: false,
    isApiBeenCalledForFilters: false
});