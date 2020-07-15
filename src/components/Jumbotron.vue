<template>
    <div>
        <b-container>
            <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
                <p>For more information visit website</p>
                <b-button variant="primary" href="#">More Info</b-button>
            </b-jumbotron>
        </b-container>
    </div>
</template>

<script>

    export default {
        name: 'Jumbotron',

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron{
    margin:50px 0;
}
</style>
