<script>
export default {
    name: 'CardContainer',

    props: {
        cardName: String,
        cardArchetype: String,
        cardImg: String
    }
}
</script>

<template>
    <article class="card-container">
        <figure class="card-img">
            <img src="../assets/card-bg.png" :alt="cardName">
        </figure>

        <div class="card-info">
            <strong class="name">
                {{ cardName }}
            </strong>

            <span class="archetype">
                {{ cardArchetype }}
            </span>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.card-container {
    background-color: $clr-primary;
    width: 100%;

    .card-img {
        width: 100%;
        aspect-ratio: 268 / 391;
        background-image: url(../assets/card-bg.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .card-info {
        padding: 1.25rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 1.25rem;
        overflow-wrap: break-word;

        .name {
            color: $clr-neutral-ltr;
        }
    }
}
</style>