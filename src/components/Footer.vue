<template>
    <footer class="footer">
        <b-container>
            <b-row cols="3">
                <b-col>
                    <img alt="Vue js" title="Bootstrap Vue Js" t src="../assets/vue.png" :width="150">
                </b-col>
                <b-col>
                    <img alt="Vue js" title="Bootstrap Vue Js" t src="../assets/bootstrap.png" :width="150">

                </b-col>
                <b-col>
                    <b-form>
                        <b-form-group
                                id="input-group-1"
                                label-for="input-1">
                            <b-form-input
                                    id="input-1"
                                    v-model="email"
                                    type="email"
                                    required
                                    placeholder="Your email"
                            >

                            </b-form-input>
                        </b-form-group>
                        <b-button type="submit" variant="outline-info">subscribe</b-button>
                    </b-form>
                </b-col>
            </b-row>
            <b-row cols="1" class="copyright">
                <p>© 2020 Copyright VueJs. Tous droits réservés. Réalisé par <a href="https://www.facebook.com/MedRidhaRahmi" target="_blank">Ridha Rahmi</a></p>
            </b-row>
        </b-container>
    </footer>

</template>

<script>
    export default {
        name: 'Footer',
        props: {
            msg: String
        }
    }
</script>
<style scoped>
    .footer {
        background: #333;
        padding: 40px 0 20px;
        margin-top: 100px;
        color: #fff;
    }
    .copyright{
        border-top:1px solid #ddd;
        margin-top:20px;
        padding-top:30px;
    }
</style>
