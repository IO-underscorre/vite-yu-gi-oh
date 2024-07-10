<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <div class="logo">
            <img src="../assets/logo.png" alt="Yu-Gi-Oh!">
        </div>
        <h1>
            Yu-Gi-Oh Api
        </h1>
    </header>
</template>

<style lang="scss" scoped>
header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;
    background-color: $clr-neutral-ltr;

    .logo {
        height: 3rem;

        img {
            height: 100%;
        }
    }

    h1 {
        font-size: 3rem;
        line-height: 1;
        font-weight: 500;
    }
}
</style>