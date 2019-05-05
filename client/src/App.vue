<template>
  <v-app style="background: #E3E3EE">
    <h1>App</h1>

    <v-navigation-drawer app temporary fixed v-model="sideNav">
      <v-toolbar color="accent" dark flat>
        <v-toolbar-side-icon @click="toggleSideNav"> </v-toolbar-side-icon>
        <router-link to="/" tag="span" style="cursor: pointer">
          <h1 class="title">Vue Share</h1>
        </router-link>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list >
        <v-list-tile ripple v-for="item in sideNavItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.title}}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar fixed color="primary" dark> 
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"> </v-toolbar-side-icon>
      <v-toolbar-title>
        <!-- tag="span" for show that text  -->
        <router-link to="/" tag="span" style="cursor:pointer;"> 
          <h1 class="title pl-3">VueShare</h1>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Input -->
      <v-text-field
        flex 
        prepend-icon="search"
        placeholder="Search Post"
        color="accent"
        single-line-hide-details
      ></v-text-field>

      <v-spacer></v-spacer>

      <!-- Horizontal navbar links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in horizontalNavItems" :key="item.title" :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>

    <!-- App Content -->
    <main class="mt-4">
      <router-view />
    </main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      sideNav: false
    }
  },
  computed: {
    horizontalNavItems(){
      return [
        {icon: 'chat', title: 'Posts', link: '/posts'},
        {icon: 'lock_open', title: 'Sign In', link: '/signin'},
        {icon: 'create', title: 'Sign Up', link: '/signup'},
      ]
    },
    sideNavItems(){
      return [
        {icon: 'chat', title: 'Posts', link: '/posts'},
        {icon: 'lock_open', title: 'Sign In', link: '/signin'},
        {icon: 'create', title: 'Sign Up', link: '/signup'},
      ]
    }
  },
  methods: {
    toggleSideNav(){
      this.sideNav = !this.sideNav
    }
  }
}
</script>
