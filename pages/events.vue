<template>
    <main class="min-h-screen">
        <!-- Hero Section -->
        <div class="bg-[url('/img-aboutus.jpg')] bg-no-repeat bg-cover gap-6 text-center relative before:content-[''] before:absolute before:inset-0 before:bg-[#25903B] before:opacity-75">
            <div class="relative z-10 flex flex-col gap-10 py-32 px-4">
                <NuxtImg class="h-30 mx-auto mb-8" src="/monogram.png" alt="Hexion Monogram" format="webp"/>
                <h1 class="text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal font-courier">
                    Evenementen
                </h1>
            </div>
        </div>

        <!-- Events Grid -->
        <div class="container mx-auto px-4 py-12">
            <div class="flex flex-row flex-wrap gap-6">
                <div v-for="event in events" :key="event.id" 
                     class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                     <div class="p-6">
                        <div class="relative mb-4">
                            <span class="absolute top-0 right-0 px-2 py-1 rounded-full capitalize text-xs leading-normal whitespace-nowrap bg-hexion/10 text-hexion min-w-[80px] text-center">
                                {{ event.eventType }}
                            </span>
                            <h2 class="text-2xl font-bold text-gray-800 pr-24">{{ event.title }}</h2>
                        </div>
                        
                        <div class="flex items-center text-gray-600 mb-2 mt-4">
                            <font-awesome icon="calendar" class="mr-2" />
                            <span class="text-sm">
                                {{ formatDate(event.startTime) }}
                            </span>
                        </div>
                        
                        <div class="flex items-center text-gray-600 mb-4">
                            <font-awesome icon="location-dot" class="mr-2" />
                            <span class="text-sm">
                                {{ event.location.name }}
                            </span>
                        </div>
                        
                        <p class="text-gray-700 line-clamp-3 mb-4">{{ event.description }}</p>
                        
                        <div class="mt-4 flex justify-end">
                            <a :href="`https://campusapp.app/event/${event.id}`" 
                               target="_blank"
                               rel="noopener noreferrer"
                               class="bg-hexion text-white px-4 py-2 rounded-lg hover:bg-hexion/80 transition-colors duration-300">
                                Meer info
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Event } from '../types/event'

const events = ref<Event[]>([])

const formatDate = (dateString: string) => {
    const date = new Date(dateString).toLocaleDateString('nl-BE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
    return date.charAt(0).toUpperCase() + date.slice(1)
}

onMounted(async () => {
    try {
        const response = await fetch('/events.json')
        const data = await response.json()
        events.value = data.events
    } catch (error) {
        console.error('Error loading events:', error)
    }
})
</script>