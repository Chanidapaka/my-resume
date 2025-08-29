<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const open = ref(false)
</script>

<template>
  <header class="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
    <nav class="container mx-auto flex flex-wrap items-center justify-between px-6 py-4 text-white">
      <!-- Logo + Site Name -->
      <div class="flex items-center space-x-3">
        <img src="../assets/Logo.png" alt="Logo" class="h-12 w-12 object-contain"/>
        <h1 class="text-2xl font-bold tracking-wide">My Resume</h1>
      </div>

      <!-- Hamburger menu (mobile) -->
      <button @click="open = !open" class="block md:hidden focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      <!-- Nav Links -->
      <div :class="{'block': open, 'hidden': !open}" class="w-full md:flex md:w-auto md:space-x-6">
        <RouterLink to="/" class="block py-2 md:py-0 hover:text-yellow-300 transition">Home</RouterLink>
        <RouterLink to="/resume" class="block py-2 md:py-0 hover:text-yellow-300 transition">Resume</RouterLink>
        <RouterLink to="/about" class="block py-2 md:py-0 hover:text-yellow-300 transition">About</RouterLink>
        <RouterLink to="/performance" class="block py-2 md:py-0 hover:text-yellow-300 transition">Performance</RouterLink>
      </div>
    </nav>
  </header>
</template>
