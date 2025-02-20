<template>
    <main class="min-h-screen">
        <!-- Hero Section -->
        <div class="bg-[url('/img-aboutus.jpg')] bg-no-repeat bg-cover gap-6 text-center relative before:content-[''] before:absolute before:inset-0 before:bg-[#25903B] before:opacity-75">
            <div class="relative z-10 flex flex-col gap-10 py-32 px-4">
                <NuxtImg class="h-30 mx-auto mb-8" src="/monogram.png" alt="Hexion Monogram" format="webp"/>
                <h1 class="text-white text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-normal font-courier">
                    Evenementen
                </h1>
            </div>
        </div>

        <!-- Events Grid -->
        <div class="container mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="event in events" :key="event.id" 
                     class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-4">
                            <h2 class="text-2xl font-bold text-gray-800">{{ event.title }}</h2>
                            <span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full capitalize">
                                {{ event.eventType }}
                            </span>
                        </div>
                        
                        <div class="flex items-center text-gray-600 mb-2">
                            <Icon name="material-symbols:calendar-month" class="mr-2" />
                            <span class="text-sm">
                                {{ formatDate(event.startTime) }}
                            </span>
                        </div>
                        
                        <div class="flex items-center text-gray-600 mb-4">
                            <Icon name="material-symbols:location-on" class="mr-2" />
                            <span class="text-sm">
                                {{ event.location.name }}
                            </span>
                        </div>
                        
                        <p class="text-gray-700 line-clamp-3 mb-4">{{ event.description }}</p>
                        
                        <div class="mt-4 flex justify-end">
                            <button class="bg-[#25903B] text-white px-4 py-2 rounded-lg hover:bg-[#1e7230] transition-colors duration-300">
                                Meer info
                            </button>
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
    return new Date(dateString).toLocaleDateString('nl-BE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}

onMounted(async () => {
    try {
        const response = await fetch('https://europe-west1-campus-3b536.cloudfunctions.net/hexion_event_fetch')
        const data = await response.json()
        events.value = data.events
    } catch (error) {
        console.error('Error loading events:', error)
    }
})
</script>