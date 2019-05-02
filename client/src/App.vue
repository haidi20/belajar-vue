<template>
  <v-app>
    <h1>App</h1>
    <router-view />
  </v-app>
</template>

<script>
import Home from './components/Home';
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
