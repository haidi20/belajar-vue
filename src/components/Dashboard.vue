<template>
  <div id="app">
      Dashboard Component
      <br> <br>
      <AddEvent />
      <br><br>
      <ul>
        <li v-for="(item, index) in this.$store.state.events" :key="index"> {{item.title}} </li>
      </ul>
      <br><br>
      <button class="btn btn-danger signout-btn" @click="logOut">logout</button>
  </div>
</template>

<script>
import AddEvent from './addEvent'
import {firebaseApp, eventsRef} from '../firebaseApp'

export default {
  data() {
    return {
      events: []
    }
  },
  methods: {
    logOut() {
      firebaseApp.auth().signOut();
      this.$store.dispatch("logOut");
    }
  },
  components: {
    AddEvent
  },
  mounted() {
    eventsRef.on('value', snap => {

      snap.forEach(event => {
        // this.events.push(event.val())
        this.$store.dispatch('setEvents', event.val());
      });
    });
  }
}
</script>

<style>

</style>