<template>
    <main class="min-h-screen">
        <!-- Hero Section (similar to events.vue) -->
        <div
            class="bg-[url('/img-aboutus.jpg')] bg-no-repeat bg-cover gap-6 text-center relative before:content-[''] before:absolute before:inset-0 before:bg-[#25903B] before:opacity-75">
            <div class="relative z-10 flex flex-col gap-10 py-32 px-4">
                <NuxtImg class="h-30 mx-auto mb-8" src="/monogram.png" alt="Hexion Monogram" format="webp"
                    data-aos="zoom-in" />
                <h1 class="text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal font-courier"
                    data-aos="fade-right">
                    Praesidium
                </h1>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div v-for="member in praesidium" :key="member.role + member.name"
                    class="relative group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <NuxtImg data-aos="zoom-in" :src="member.image" :alt="member.name"
                        class="w-full h-full object-cover" format="webp" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
                        data-aos="fade-right">
                        <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <div class="text-2xl font-bold">{{ member.emoji }} {{ member.role }}</div>
                            <div class="text-xl mt-1">{{ member.name }}</div>
                            <div class="text-gray-200 text-sm">{{ member.description }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-16 text-center max-w-2xl mx-auto" data-aos="fade-up">
                <h1 class="text-4xl font-courier font-bold mb-4">Overige</h1>
                <h3 class="text-lg text-gray-700 mb-6">
                    Overige praesidium jaren kunnen bekeken worden in onderstaande PDF Document.
                </h3>
                <a href="/files/HEXION-Geschiedenis.pdf"
                    class="inline-block bg-hexion text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold">
                    Download / Bekijk hier
                </a>
            </div>
        </div>
    </main>
</template>

<script setup>

useHead({
    title: 'Praesidium | Studentenvereniging Hexion'
})

const praesidium = [
    {
        role: 'Praeses',
        name: 'Matteo Ideler Cautaert',
        description: 'Voorzitter',
        emoji: '👑',
        image: '/praesidium/mateo.jpg'
    },
    {
        role: 'Vice-Praeses',
        name: 'Wim Geelen',
        description: 'Ondervoorzitter',
        emoji: '🤴',
        image: '/praesidium/wim.jpg'
    },
    {
        role: 'Ab-Actis',
        name: 'Bieke Van Steen',
        description: 'Secretaris',
        emoji: '📚',
        image: '/praesidium/bieke.jpg'
    },
    {
        role: 'Quaestor',
        name: 'Ian Van Den Bergh',
        description: 'Penningmeester',
        emoji: '💰',
        image: '/praesidium/ian.jpg'
    },
    {
        role: 'Schachtenmeester',
        name: 'Meical Clifford',
        description: 'Baas van de schachten',
        emoji: '🙉',
        image: '/praesidium/meical.jpg'
    },
    {
        role: 'Schachtenmeester',
        name: 'Kobe',
        description: 'Baas van de schachten',
        emoji: '🙉',
        image: '/praesidium/kobe.jpg'
    }
    ,
    {
        role: 'P.R.',
        name: 'Thomas Stappers',
        description: 'Verzorgt public relations met bedrijven',
        emoji: '📢',
        image: '/praesidium/thomas.jpg'
    },
    {
        role: 'Ontspanning',
        name: 'Roel Knapen',
        description: 'Verzorgt ontspanning en activiteiten voor de leden',
        emoji: '🎉',
        image: '/praesidium/roel.jpg'
    },
    {
        role: 'Bacchus',
        name: 'Michaël Bielen',
        description: 'Verzorgt de drank en het bier voor de leden',
        emoji: '🍺',
        image: '/praesidium/michael.jpg'
    },
    {
        role: 'Cantor',
        name: 'Senne Graulus',
        description: 'Verzorgt de cantussen voor de leden',
        emoji: '🎶',
        image: '/praesidium/senne.jpg'
    },


]
</script>