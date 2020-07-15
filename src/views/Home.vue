<template>
    <div class="home">
        <Slider/>
        <Jumbotron/>
    </div>
</template>

<script>
    import Slider from '../components/Slider.vue';
    import Jumbotron from '../components/Jumbotron.vue';

    export default {
        name: "home",
        components: {
            Slider,
            Jumbotron
        }
    };
</script>
