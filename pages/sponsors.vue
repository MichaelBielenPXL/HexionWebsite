<template>
    <main class="min-h-screen">
        <!-- Hero Section -->
        <div
            class="bg-[url('/sponsors.jpg')] bg-no-repeat bg-cover bg-center text-center relative before:content-[''] before:absolute before:inset-0 before:bg-[#25903B] before:opacity-75">
            <div class="relative z-10 flex flex-col gap-10 py-32 px-4">
                <NuxtImg class="h-30 mx-auto mb-8" src="/monogram.png" alt="Hexion Monogram" format="webp"
                    data-aos="zoom-in" />
                <h1 class="text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal font-courier"
                    data-aos="fade-right">
                    Sponsors
                </h1>
            </div>
        </div>

        <!-- Sponsors Grid -->
        <div class="container mx-auto px-4 py-12">
            <p class="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-12" data-aos="fade-up">
                Bedankt aan alle partners die Hexion steunen en onze activiteiten mee mogelijk maken.
            </p>

            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <component :is="sponsor.website ? 'a' : 'div'" v-for="sponsor in sponsors" :key="sponsor.name"
                    :href="sponsor.website" :target="sponsor.website ? '_blank' : undefined"
                    :rel="sponsor.website ? 'noopener noreferrer' : undefined" data-aos="fade-up"
                    class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                    <div class="h-40 flex items-center justify-center p-6 border-b border-gray-100">
                        <NuxtImg v-if="sponsor.logo" :src="sponsor.logo" :alt="`${sponsor.name} logo`" format="webp"
                            class="max-h-full max-w-full object-contain" />
                        <span v-else class="text-2xl font-courier text-hexion text-center">{{ sponsor.name }}</span>
                    </div>
                    <div class="p-6">
                        <h2 class="text-2xl font-bold text-gray-800">{{ sponsor.name }}</h2>
                        <p v-if="sponsor.description" class="text-gray-700 mt-3">{{ sponsor.description }}</p>
                    </div>
                </component>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
useHead({
    title: 'Sponsors | Studentenvereniging Hexion'
})
</script>
