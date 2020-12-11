<template>
    <div class="form-line">
      <h3>Register</h3>
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
          <button class="btn btn-success" @click="signUp()">Sign Up</button>
          <br><br>
          <!-- <button class="btn btn-info" @click="gotoSignIn()">Sign In</button> -->

        <router-link to="/sign-in"> Already a account ? click here</router-link>
      </div>
      <br>
      <p>{{error.message}}</p>
      <br>
  </div>
</template>

<script>
import {firebaseApp} from '../firebaseApp'

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
            signUp() {
                firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .catch(err => {
                        this.error = err;
                    });
            },
            gotoSignIn() {
                this.$router.push({name: 'sign in'});
            }
        },
    }
</script>

<style scoped>

</style>