<template>
  <div id="app">
      Dashboard Component
      <br> <br>
      <AddEvent></AddEvent>
      <br><br>
      <button class="btn btn-danger signout-btn" @click="logOut">logout</button>
  </div>
</template>

<script>
import AddEvent from './addEvent'
import {firebaseApp} from '../firebaseApp'

export default {
  methods: {
    logOut() {
      firebaseApp.auth().signOut();
      this.$store.dispatch("logOut");
    }
  },
  components: {
    AddEvent
  }
}
</script>

<style>

</style>