<template>
    <div> 
        <Header/>
    <main class="min-h-screen font-courier py-12">
        <div class="container mx-auto mt-5 py-5 md:w-7/12 sm:w-10/12">
            <div class="w-full mb-5">
                <h1 class="text-center text-4xl">"Hier moet nog een
                    leuke quote komen over ons"
                </h1>
            </div>
            
            <hr class="my-5 h-0.5 border-0 bg-neutral-800">
            
            <div class="w-full">
                <h1 class="text-4xl py-12">Ons praesidium</h1>
                <div class="w-full relative">
                    <NuxtLink to="/praesidium">
                        <img class="w-full border border-neutral-800 rounded-3xl" src="/praesidium-1.jpg" alt="Praesidium">
                        <NuxtImg format="webp" class="absolute h-20 w-min top-5 left-5" src="/monogram.png" alt="Monogram"/>
                    </NuxtLink>
                </div>
            </div>

            <div class="w-full mb-5">
                <h1 class="text-4xl py-12">Over Ons</h1>
                <div class="w-full relative">
                    <NuxtLink to="/about">
                        <img class="w-full border border-neutral-800 rounded-3xl" src="/cover-1.jpg" alt="Over ons">
                        <NuxtImg format="webp" class="absolute h-20 w-min top-5 left-5" src="/monogram.png" alt="Monogram"/>
                    </NuxtLink>
                </div>
            </div>

            <div class="w-full mb-5">
                <h1 class="text-4xl py-12">Evenementen</h1>
                <div class="w-full relative">
                    <NuxtLink to="/events">
                        <img class="w-full border border-neutral-800 rounded-3xl" src="/events.jpg" alt="Evenementen">
                        <NuxtImg format="webp" class="absolute h-20 w-min top-5 left-5" src="/monogram.png" alt="Monogram"/>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </main>
</div>
</template>