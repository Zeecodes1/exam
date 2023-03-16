<template>
    <div class="home">
        <h1>WELCOME</h1>
        <p>Click on the button below to view my Repos</p>
        <button>
            <RouterLink to="/repos">Repos</RouterLink>
        </button>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #2E3840;
    }
    button {
        padding: 1rem 2rem;
        border: none;
        background-color: #E9A178;
        color: #fff;
        font-size: 1.2rem;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background-color: darken($color: #E9A178, $amount: 15%);
        }
    }
    a {
        text-decoration: none;
        color: #fff;
    }
}
</style>