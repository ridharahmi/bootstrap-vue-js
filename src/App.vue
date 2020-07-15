<template>
    <div id="app">
        <Header/>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';


    export default {
        name: 'App',
        components: {
            Header,
            Footer
        }
    }
</script>

<style>
    li.router-link-active a {
        color: #41b883 !important;
    }
</style>
