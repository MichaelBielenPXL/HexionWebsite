<template>
    <main class="min-h-screen">
        <!-- Hero Section (similar to events.vue) -->
        <div class="bg-[url('/img-aboutus.jpg')] bg-no-repeat bg-cover gap-6 text-center relative before:content-[''] before:absolute before:inset-0 before:bg-[#25903B] before:opacity-75">
            <div class="relative z-10 flex flex-col gap-10 py-32 px-4">
                <NuxtImg class="h-30 mx-auto mb-8" src="/monogram.png" alt="Hexion Monogram" format="webp"/>
                <h1 class="text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal font-courier">
                    Praesidium
                </h1>
            </div>
        </div>

    <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div v-for="member in praesidium" 
                 :key="member.role + member.name"
                 class="relative group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <NuxtImg 
                    :src="member.image"
                    :alt="member.name"
                    class="w-full h-full object-cover"
                    format="webp"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <div class="text-2xl font-bold">{{ member.emoji }} {{ member.role }}</div>
                        <div class="text-xl mt-1">{{ member.name }}</div>
                        <div class="text-gray-200 text-sm">{{ member.description }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </main>
</template>

<script setup>
const praesidium = [
    {
        role: 'Praeses',
        name: 'Joran Vlaeyen',
        description: 'Voorzitter',
        emoji: '👑',
        image: '/praesidium/person-none.jpg'
    },
    {
        role: 'Vice-Praeses',
        name: 'Jeff Kippers',
        description: 'Ondervoorzitter',
        emoji: '🤴',
        image: '/praesidium/person-none.jpg'
    },
    {
        role: 'Ab-Actis',
        name: 'Kiara Petillon',
        description: 'Secretaris',
        emoji: '📚',
        image: '/praesidium/person-none.jpg'
    },
    {
        role: 'Quaestor',
        name: 'Gijs Rommers',
        description: 'Penningmeester',
        emoji: '💰',
        image: '/praesidium/person-none.jpg'
    },
    {
        role: 'Schachtenmeester',
        name: 'Lennert Linsen',
        description: 'Baas van de schachten',
        emoji: '🙉',
        image: '/praesidium/person-none.jpg'
    },
    {
        role: 'Schachtenmeester',
        name: 'Lars Schrijvers',
        description: 'Baas van de schachten',
        emoji: '🙉',
        image: '/praesidium/person-none.jpg'
    },
    {
        role: 'P.R.',
        name: 'Niels Meuwissen',
        description: 'Verzorgt public relations met bedrijven',
        emoji: '📢',
        image: '/praesidium/person-none.jpg'
    },
    {
        role: 'Webmaster',
        name: 'Jonathan Mercken',
        description: 'Onderhoud de webserver en de Social Media',
        emoji: '📟',
        image: '/praesidium/person-none.jpg'
    }
]
</script>