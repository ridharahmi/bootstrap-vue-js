<template>
    <div class="blog">
        <Cards />
    </div>
</template>

<script>
    import Cards from '../components/Cards.vue';
    export default {
        name: "blog",
        components: {
            Cards
        }

    };
</script>
<style scoped>
    .blog{
        margin:50px 0;
    }
</style>