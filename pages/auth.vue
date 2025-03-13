<template>
    <div>
      <button @click="signInWithEmail">Sign In with Email</button>
      <button @click="signInWithOAuth('google')">Sign In with Google</button>
      <button @click="signOut">Sign Out</button>
      <p v-if="isAuthenticated">Welcome, {{ user.email }}</p>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  
  export default {
    computed: {
      ...mapState('auth', ['user']),
      ...mapGetters('auth', ['isAuthenticated'])
    },
    methods: {
      ...mapActions('auth', ['signInWithEmail', 'signInWithOAuth', 'signOut'])
    },
    mounted() {
      this.$store.dispatch('auth/checkUser')
    }
  }
  </script>