<!-- pages/index.vue -->

<template>
  <div class="p-4 bg-blue-500 text-white rounded-lg shadow-lg">
    Hello, Tailwind CSS est bien configuré ! 🚀
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth' // Redirige vers une page de connexion si l'utilisateur n'est pas authentifié
})
</script>