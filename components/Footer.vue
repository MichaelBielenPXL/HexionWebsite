<template>
  <footer class="bg-hexion p-5 font-courier">
    <div class="container mx-auto pt-4">
      <div class="flex flex-col md:flex-row gap-4">
        <!-- Pages Section -->
        <div class="flex-1">
          <h1 class="text-3xl font-light text-black py-2">Paginas</h1>
          <div class="flex flex-col gap-3">
            <NuxtLink to="/" class="text-white text-xl block hover:opacity-80">Home</NuxtLink>
            <NuxtLink to="/praesidium" class="text-white text-xl block hover:opacity-80">Praesidium</NuxtLink>
            <NuxtLink to="/events" class="text-white text-xl block hover:opacity-80">Evenementen</NuxtLink>
            <NuxtLink to="/about" class="text-white text-xl block hover:opacity-80">Over ons</NuxtLink>
          </div>
        </div>

        <!-- Social Media Section -->
        <div class="flex-1">
          <h1 class="text-3xl font-light text-black py-2">Social Media</h1>
          <div class="flex flex-col gap-3">
            <a href="https://campusapp.app/society/vuNhWZ4XwJJ8WjgN10q1"
              class="text-white text-xl block hover:opacity-80">Campus</a>
            <a href="https://www.facebook.com/studentenvereniging.hexion"
              class="text-white text-xl block hover:opacity-80">Facebook</a>
            <a href="https://www.instagram.com/studentenvereniginghexion/"
              class="text-white text-xl block hover:opacity-80">Instagram</a>
          </div>
        </div>

        <!-- Sponsors Section -->
        <div class="flex-1">
          <h1 class="text-3xl font-light text-black py-2">Sponsors</h1>
          <div class="flex flex-wrap gap-2">
            <NuxtImg v-for="(sponsor, index) in sponsors" :key="index" :src="sponsor.src" :alt="sponsor.alt"
              class="h-12 object-contain p-2" format="webp" />
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright Section -->
    <div class="text-center text-gray-200/80 p-4 mt-8">
      <p>
        Copyright © {{ new Date().getFullYear() }}
        All Rights Reserved by <span class="font-semibold"> Studentenvereniging Hexion. </span>
      </p>
    </div>
  </footer>
</template>

<script setup>
const sponsors = [
  { src: '/sponsors/logocegeka.png', alt: 'Cegeka Logo' },
  { src: '/sponsors/stuvo.png', alt: 'PXL Stuvo Logo' },

]
</script>