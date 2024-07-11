<script>
export default {
    name: 'SearcherFilters',

    data() {
        return {
            currentArchetypeFilter: ''
        }
    },

    props: {
        archetypes: Array,
        searchParametersError: Boolean
    }
}
</script>

<template>
    <menu class="searcher-filters">
        <li class="filter-option-group" :class="{ disabled: searchParametersError }">
            <select id="filter-archrtype" placeholder="Select a card archetype" v-model="currentArchetypeFilter"
                @change="$emit('search', currentArchetypeFilter)" name="archetypes" required>
                <option value="" selected>
                    Select a card archetype
                </option>
                <option v-for="(archetype, index) in archetypes" :key="index" :value="archetype.archetype_name">
                    {{ archetype.archetype_name }}
                </option>
            </select>
        </li>
    </menu>
</template>

<style lang="scss" scoped>
.searcher-filters {
    padding: 2rem;
    color: $clr-neutral-ltr;
    font-weight: 700;
    display: flex;
    gap: 2rem;

    select {
        appearance: none;
        padding: .5rem;
        border-radius: .25rem;
    }
}
</style>