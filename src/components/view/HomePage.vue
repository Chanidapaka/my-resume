<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200">
    <div class="bg-white bg-opacity-80 backdrop-blur-md p-10 rounded-3xl shadow-2xl text-center max-w-2xl w-full mx-4">
      <h1 class="text-5xl font-extrabold text-gray-900 mb-4">
        Welcome to My Resume
      </h1>
      <RouterLink
        to="/resume"
        class="inline-block mt-6 px-8 py-3  text-white font-medium rounded-full shadow-lg 
               bg-gradient-to-r from-blue-600 to-indigo-700 
               hover:from-blue-700 hover:to-indigo-800 
               transform hover:-translate-y-1 hover:scale-105 
               transition duration-300"
      >
        View My Resume
      </RouterLink>
    </div>
  </div>
</template>
