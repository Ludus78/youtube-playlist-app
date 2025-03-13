<!-- pages/index.vue -->
<template>
    <div>
      <h1>Welcome to My App</h1>
      <p>This is the home page.</p>
    </div>
  </template>

<script setup>
definePageMeta({
  middleware: 'auth' // Redirige vers une page de connexion si l'utilisateur n'est pas authentifié
})
</script>