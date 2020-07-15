<template>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">Vue Js Bootstrap</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <router-link to="/" tag="li" exact :class="nav-item">
                    <a class="nav-link">Home</a>
                </router-link>
                <router-link to="/about" tag="li">
                    <a class="nav-link">About</a>
                </router-link>
                <router-link to="/blog" tag="li" replace>
                    <a class="nav-link">Blog</a>
                </router-link>
                <router-link to="/contact" tag="li" replace>
                    <a class="nav-link">Contact</a>
                </router-link>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>

    export default {
        name: 'Header',

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
