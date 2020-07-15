<template>
    <div class="about">
        <Jumbotron/>

        <b-container>
            <div class="video">
                <b-embed
                        type="iframe"
                        aspect="16by9"
                        src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                        allowfullscreen
                ></b-embed>
            </div>
        </b-container>

        <Table/>
    </div>
</template>

<script>
    import Table from '../components/Table.vue';
    import Jumbotron from '../components/Jumbotron.vue';

    export default {
        name: "about",
        components: {
            Table,
            Jumbotron
        }

    };
</script>
<style scoped>
    .video{
        margin:50px 0;
    }
</style>