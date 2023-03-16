<template>
    <div class="repos">
        <h1>Repositories</h1>
        <ul>
            <li v-for="repo in repoData.slice((currentPage - 1) * perPage, currentPage * perPage)" :key="repo.id">
                <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
            </li>
        </ul>
        <Pagination :totalPages="totalPages" :perPage="perPage" :currentPage="currentPage" @pagechanged="onPageChange" />
    </div>
</template>

<script>
import Pagination from './pagination.component.vue'
import { ref } from 'vue'
const repoData = ref([])
const currentPage = ref(1) 
const perPage = ref(5)
const totalPages = ref(0)
export default {
    name: 'RepoData',
    components: {
        Pagination
    },
    setup () {
        fetch('https://api.github.com/users/Zeecodes1/repos')
            .then(res => res.json())
            .then(data => {
                repoData.value = data
                totalPages.value = Math.ceil(repoData.value.length / perPage.value)
            })
        return {
            repoData,
            currentPage,
            perPage,
            totalPages
        }
    },
    methods: {
        onPageChange (page) {
            currentPage.value = page
        }
    }
}
</script>

<style lang="scss" scoped>
.repos {
    h1 {
        text-align: center;
        font-size: 2rem;
        color: #E9A178;
        margin: 2rem 0;
    }
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: column;
        li {
            margin: 1rem;
            background-color: #fff;
            padding: 1rem;
            border-radius: 5px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            a {
                text-decoration: none;
                color: #E9A178;
                font-size: 1.5rem;
                &:hover {
                    color: darken($color: #E9A178, $amount: 15%);
                }
            }
        }
    }
}</style>