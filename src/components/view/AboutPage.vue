<script setup>
import Header from "../Header.vue";
</script>

<template>
  <Header />

  <div class="min-h-screen bg-gray-50 flex flex-col items-center p-6">
    <!-- Title -->
    <h1 class="text-3xl font-bold mb-6">About Me</h1>

    <!-- Carousel รูป -->
    <div class="overflow-hidden w-full max-w-3xl mb-8">
      <div class="flex animate-slide gap-4">
        <img src="../../assets/profile1.jpg" alt="Profile 1" class="w-32 h-32 rounded-full shadow-md">
        <img src="../../assets/profile2.jpg" alt="Profile 2" class="w-32 h-32 rounded-full shadow-md">
        <img src="../../assets/profile3.jpg" alt="Profile 3" class="w-32 h-32 rounded-full shadow-md">
        <img src="../../assets/profile4.jpg" alt="Profile 4" class="w-32 h-32 rounded-full shadow-md">
        <img src="../../assets/profile5.jpg" alt="Profile 5" class="w-32 h-32 rounded-full shadow-md">

        <!-- ซ้ำเพื่อ loop ต่อเนื่อง -->
        <img src="../../assets/profile1.jpg" alt="Profile 1" class="w-32 h-32 rounded-full shadow-md">
        <img src="../../assets/profile2.jpg" alt="Profile 2" class="w-32 h-32 rounded-full shadow-md">
        <img src="../../assets/profile3.jpg" alt="Profile 3" class="w-32 h-32 rounded-full shadow-md">
        <img src="../../assets/profile4.jpg" alt="Profile 4" class="w-32 h-32 rounded-full shadow-md">
        <img src="../../assets/profile5.jpg" alt="Profile 5" class="w-32 h-32 rounded-full shadow-md">
      </div>
    </div>

    <!-- แนะนำตัว -->
    <p class=" text-gray-700 max-w-xl">
     I'm Chanidapa, a student interested in frontend development and building user-friendly web interfaces with Vue.js and Tailwind CSS.
    </p>

    

    <!-- Skills -->
    <div class="mt-6 max-w-xl">
      <h2 class="text-2xl font-semibold mb-2">Skills</h2>
      <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-200 rounded-full">Vue.js</span>
        <span class="px-3 py-1 bg-green-200 rounded-full">Tailwind CSS</span>
        <span class="px-3 py-1 bg-yellow-200 rounded-full">JavaScript</span>
        <span class="px-3 py-1 bg-purple-200 rounded-full">HTML & CSS</span>
        <span class="px-3 py-1 bg-red-200 rounded-full">Java</span>
      </div>
    </div>

    <!-- Social -->
    <div class="mt-6 flex justify-center gap-4">
      <a href="https://github.com/Chanidapaka" target="_blank" class="text-gray-600 hover:text-black">GitHub</a>
    </div>
  </div>
</template>

<style scoped>
/* Keyframes สำหรับเลื่อนรูปไปทางซ้าย */
@keyframes slide {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

/* ใช้ Tailwind + class animate-slide */
.animate-slide {
  display: flex;
  animation: slide 20s linear infinite;
}
</style>
