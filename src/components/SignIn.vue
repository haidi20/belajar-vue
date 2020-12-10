<template>
  <div class="form-line">
      <h3>Sign In</h3>
      <div class="form-group">
        <input 
          type="text" 
          placeholder="email"
          class="form-control"
          v-model="email">
        <input 
          type="password" 
          placeholder="password"
          class="form-control"
          v-model="password">
          <br>
          <button class="btn btn-success" @click="signIn()">Sign In</button>
      </div>
      <br>
      <p>{{error.message}}</p>
      <br>
  </div>
</template>

<script>
import firebase, { firebaseApp } from "../firebaseApp"

export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: '',
      }
    }
  },
  methods: {
    signIn() {
      firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
        .catch(err => {
          this.error = err;
        });
    }, 
  },
}
</script>

<style>

</style>