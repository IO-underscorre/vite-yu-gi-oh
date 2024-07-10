<script>
export default {
    name: 'SearcherFilters'
}
</script>

<template>
    <menu class="searcher-filters">
        <li>
            <select id="filter-archrtype" required>
                <option value="false" selected>Select a card archetype</option>
                <option value="placeholder">placeholder</option>
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