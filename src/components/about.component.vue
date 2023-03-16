<template>
    <div class="about">
        <h1>ABOUT</h1>
        <p>
            This is an Altschool Africa Third Semester Project that fetches repositories from GitHub
        </p>
    </div>
</template>

<script>
export default {
    name: "About"
}
</script>

<style lang="scss" scoped>
.about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #2E3840;
    }
    a {
        color: #E9A178;
        text-decoration: none;
    }
}
</style>