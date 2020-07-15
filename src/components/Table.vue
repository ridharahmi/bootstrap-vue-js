<template>
    <b-container>
        <div class="table">
            <b-table
                    id="my-table"
                    :items="items"
                    :per-page="perPage"
                    :current-page="currentPage"
                    small
            ></b-table>
            <p class="mt-3">Current Page: {{ currentPage }}</p>
            <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="my-table"
            ></b-pagination>


        </div>
    </b-container>
</template>

<script>
    export default {
        name: 'Table',
        data() {
            return {
                perPage: 3,
                currentPage: 1,
                items: [
                    {id: 1, first_name: 'Ridha', last_name: 'Rahmi'},
                    {id: 2, first_name: 'Ridha', last_name: 'Rahmi'},
                    {id: 3, first_name: 'Ridha', last_name: 'Rahmi'},
                    {id: 4, first_name: 'Ridha', last_name: 'Rahmi'},
                    {id: 5, first_name: 'Ridha', last_name: 'Rahmi'},
                    {id: 6, first_name: 'Ridha', last_name: 'Rahmi'},
                    {id: 7, first_name: 'Ridha', last_name: 'Rahmi'},
                    {id: 8, first_name: 'Ridha', last_name: 'Rahmi'},
                    {id: 9, first_name: 'Ridha', last_name: 'Rahmi'}
                ]
            }
        },
        computed: {
            rows() {
                return this.items.length
            }
        }
    }
</script>