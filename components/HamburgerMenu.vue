<template>
    <div class="absolute top-0 right-0 p-4 z-50">
        <!-- Hamburger Button -->
        <button data-aos="zoom-in" @click="isOpen = !isOpen" class="relative z-50 p-2">
            <div class="w-8 h-6 flex flex-col justify-between">
                <span class="w-full h-0.5 bg-white rounded-lg transition-all"
                    :class="{ 'rotate-45 translate-y-2.5': isOpen }"></span>
                <span class="w-full h-0.5 bg-white rounded-lg transition-all"
                    :class="{ 'opacity-0': isOpen }"></span>
                <span class="w-full h-0.5 bg-white rounded-lg transition-all"
                    :class="{ '-rotate-45 -translate-y-2.5': isOpen }"></span>
            </div>
        </button>

        <!-- Menu Overlay -->
        <div v-if="isOpen" 
             class="fixed inset-0 bg-black/95 flex items-center justify-center" data-aos="zoom-out">
            <nav class="text-center">
                <NuxtLink v-for="link in navLinks" 
                         :key="link.to" 
                         :to="link.to"
                         @click="isOpen = false"
                         class="block text-white text-2xl py-4 px-8 hover:text-hexion transition-colors">
                    {{ link.text }}
                </NuxtLink>
            </nav>
        </div>
    </div>
</template>

<script setup>


const isOpen = ref(false)

const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/praesidium', text: 'Praesidium' },
    { to: '/events', text: 'Evenementen' },
    { to: '/about', text: 'Over ons' }
]
</script>