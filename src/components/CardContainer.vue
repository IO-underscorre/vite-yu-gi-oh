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
            <img :src="cardImg" :alt="cardName">
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
    width: 100%;
    height: 100%;
    background-color: $clr-primary;
    display: flex;
    flex-direction: column;
    color: $clr-neutral-ltr;
    text-align: center;
    overflow-wrap: anywhere;

    .card-img {
        flex: 0 0 content;
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
        flex: 1 0;
        padding: 1.25rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 1.25rem;

        .archetype {
            color: $clr-neutral-dkr;
        }
    }
}
</style>