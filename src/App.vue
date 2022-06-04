<template>
  <v-app>
    <NavBar/>
    <v-main class="mx-7">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/Navbar/NavBar.vue'
export default {
  components: {
    NavBar,
  },
};
</script>
<style>


</style>