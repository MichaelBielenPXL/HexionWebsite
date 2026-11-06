<template>
    <div>
        <Header />
        <main class="min-h-screen font-courier py-12 px-2">
            <div class="container mx-auto mt-5 py-5 md:w-7/12 sm:w-10/12">
                <div class="w-full mb-5" data-aos="flip-up">
                    <h1 class="text-center text-4xl">"Waar studeren en plezier samen komen"
                    </h1>
                </div>

                <hr class="my-5 h-0.5 border-0 bg-neutral-800">

                <div class="w-full" data-aos="fade-up">
                    <h1 class="text-4xl py-12">Ons praesidium</h1>
                    <div class="w-full relative">
                        <NuxtLink to="/praesidium">
                            <img class="w-full h-40 lg:h-96 object-cover border border-neutral-800 rounded-3xl"
                                src="/AcademischeOpeningszittingHexion.jpg" alt="Praesidium">
                            <NuxtImg format="webp" class="absolute h-16 w-min bottom-5 right-5" src="/monogram.png"
                                alt="Monogram" />
                        </NuxtLink>
                    </div>
                </div>

                <div class="w-full mb-5" data-aos="fade-up">
                    <h1 class="text-4xl py-12">Over Ons</h1>
                    <div class="w-full relative">
                        <NuxtLink to="/about">
                            <img class="w-full border h-40 lg:h-96 object-cover border-neutral-800 rounded-3xl"
                                src="/cover-1.jpg" alt="Over ons">
                            <NuxtImg format="webp" class="absolute h-16 w-min bottom-5 right-5" src="/monogram.png"
                                alt="Monogram" />
                        </NuxtLink>
                    </div>
                </div>

                <div class="w-full mb-5" data-aos="fade-up">
                    <h1 class="text-4xl py-12">Sponsors</h1>
                    <div class="w-full relative">
                        <NuxtLink to="/sponsors">
                            <div
                                class="w-full border min-h-40 lg:min-h-96 border-neutral-800 rounded-3xl bg-white grid grid-cols-[repeat(auto-fit,minmax(6rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(11rem,1fr))] content-center items-center gap-x-6 gap-y-6 lg:gap-x-10 lg:gap-y-10 px-4 pt-6 pb-14 lg:px-12 lg:pt-12 lg:pb-24">
                                <div v-for="sponsor in sponsors" :key="sponsor.name"
                                    class="h-12 lg:h-28 flex items-center justify-center">
                                    <NuxtImg v-if="sponsor.logo" :src="sponsor.logo" :alt="`${sponsor.name} logo`"
                                        format="webp" class="max-h-full max-w-full object-contain" />
                                    <span v-else class="text-sm lg:text-2xl text-hexion text-center">{{ sponsor.name }}</span>
                                </div>
                            </div>
                            <NuxtImg format="webp" class="absolute h-10 lg:h-16 w-min bottom-3 right-3 lg:bottom-5 lg:right-5 invert"
                                src="/monogram.png" alt="Monogram" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
useHead({
    title: 'Home | Studentenvereniging Hexion'
})
</script>