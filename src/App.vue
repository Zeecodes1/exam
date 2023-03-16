<template>
  <header class="header">
    
    <section class="nav-links">
      <nav>
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/repos">Repos</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
        </ul>
      </nav>
    </section>
  </header>
  <main>
    <ErrorPage>
      <RouterView />
    </ErrorPage>
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ErrorPage from './components/error-page.component.vue';
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .logo {
    img {
      width: 50px;
      height: 50px;
    }
  }
  .nav-links {
    nav {
      ul {
        display: flex;
        list-style: none;
        margin: 10px;
        li {
          margin-left: 1rem;
          a {
            text-decoration: none;
            color: #E9A178;
            font-size: 1.2rem;
            &:hover {
              color: darken($color: #d1550e, $amount: 35%);
            }
          }
        }
      }
    }
  }
}
</style>