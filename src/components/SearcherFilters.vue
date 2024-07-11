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
        isFilterDisabled: Boolean
    }
}
</script>

<template>
    <menu class="searcher-filters">
        <li class="filter-option-group" :class="{ disabled: isFilterDisabled }">
            <label for="filter-archrtype">Archetype</label>
            <span></span>
            <select id="filter-archrtype" v-model="currentArchetypeFilter"
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
    font-weight: 700;
    display: flex;
    gap: 2rem;

    .filter-option-group {
        flex-basis: calc((100% - 6rem) / 4);
        position: relative;
        border: 1px solid $clr-neutral-dkr;
        border-radius: .25rem;
        background-color: $clr-neutral-ltr;

        label {
            font-size: .675rem;
            color: $clr-neutral-ltr;
            padding: 2px;
            border-radius: inherit;
            border: inherit;
            background-color: $clr-neutral-dkr;
            position: absolute;
            top: 0;
            left: .75rem;
            transform: translate(0, -50%);
        }

        select {
            width: 100%;
            appearance: none;
            border: none;
            outline: none;
            background-color: none;
            border-radius: inherit;
            padding: .75rem 1.5rem .75rem .75rem;
            color: $clr-neutral-dkr;
            font-weight: 600;

            &:hover {
                cursor: pointer;
            }
        }

        &::after {
            content: '\2B9F';
            font-size: .75rem;
            line-height: 1;
            position: absolute;
            right: .5rem;
            top: 50%;
            transform: translate(0, -50%);
            pointer-events: none;
        }
    }
}
</style>