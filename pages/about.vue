<template>
    <main class="min-h-screen">
        <!-- Hero Section (similar to events.vue) -->
        <div class="bg-[url('/img-aboutus.jpg')] bg-no-repeat bg-cover gap-6 text-center relative before:content-[''] before:absolute before:inset-0 before:bg-[#25903B] before:opacity-75">
            <div class="relative z-10 flex flex-col gap-10 py-32 px-4">
                <NuxtImg class="h-30 mx-auto mb-8" src="/monogram.png" alt="Hexion Monogram" format="webp"/>
                <h1 class="text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal font-courier">
                    Over Ons
                </h1>
            </div>
        </div>

        <!-- About Section -->
        <div class="container mx-auto px-4 py-12">
            <div class="flex flex-wrap items-center justify-center gap-8 my-16">
                <div class="w-full md:w-1/3 flex justify-center">
                    <NuxtImg src="/schild.png" alt="Hexion Schild" format="webp" 
                            class="w-3/4 md:w-full max-h-72 object-contain"/>
                </div>
                <div class="w-full md:w-1/2">
                    <p class="text-lg text-gray-700 leading-relaxed text-justify">
                        In 2013 verrees Hexion in Hasselt, als de ultieme thuishaven voor digitale pioniers van PXL-DIGITAL. 
                        We zijn de bruisende verbinding tussen academische kennis en het levendige studentenleven. 
                        Als een gepassioneerde gemeenschap van informaticastudenten zijn we vastbesloten om opwindende 
                        projecten te realiseren, inspirerende seminars te organiseren en onze leden te begeleiden naar 
                        een veelbelovende toekomst in de zakelijke wereld. Bij Hexion staan we altijd voor je klaar, 
                        ongeacht je behoeften, met ongeëvenaarde ondersteuning en een flinke dosis inspiratie.
                    </p>
                </div>
            </div>

            <!-- Sponsors Section -->
            <div class="my-16">
                <h2 class="text-4xl font-courier text-center uppercase mb-2">Onze Sponsors</h2>
                <div class="flex flex-wrap justify-center items-center gap-3">
                    <NuxtImg v-for="(sponsor, index) in sponsors" 
                            :key="index"
                            :src="sponsor.image"
                            :alt="sponsor.name"
                            format="webp"
                            class="transition-shadow duration-300 max-w-[200px] w-full hover:opacity-90"/>
                </div>
            </div>

            <!-- Statutes Section -->
            <div class="my-16 text-center">
                <h2 class="text-4xl font-courier uppercase mb-8">De statuten</h2>
                <a href="/files/Hexion_Statuten.pdf"  
                          class="inline-block hover:opacity-90 transition-opacity">
                    <NuxtImg src="/statuten.png" alt="Statuten" format="webp"
                            class=" max-h-20 rounded-md mx-auto"/>
            </a>
            </div>

            <!-- Song Section -->
            <div class="text-center">
                <h2 class="text-4xl font-courier uppercase mb-8">Lied</h2>
                <div class="max-w-2xl mx-auto">
                    <p class="text-center w-80 mx-auto">
                        Een informaticus is lui dat weet iedereen
                        En toch heeft hij steeds massa's werk
                        Uiterst geniaal ja dat zie je meteen
                        Wie had ooit gedacht oh zo sterk
                        In de nacht werkt hij door tot de zon weer op komt
                        Geen teken van leven, maar toch kerngezond
                        <br>
                        <br>
                        De informaticus leeft, hij is hier!
                        De informaticus leeft, geef hem bier!
                        <br>
                        <br>
                        Hexion beveelt je gooi open je poort
                        Een informaticus wenst een netwerk
                        Xie hij verlangt naar een digitaal oord
                        ('t) Internet dat is zijn strijdperk
                        Open of er wordt een virus verspreid
                        Nee je systeem is hier
                        niet mee gevleid
                        <br>
                        Hexion eist toegang, geef hier!
                        Hexion heeft toegang, geef bier!
                    </p>
                    <audio controls class="w-full max-w-md mx-auto mt-6">
                        <source src="/lied.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
const sponsors = [
    { name: 'Cegeka', image: '/sponsors/logocegeka.png' },
    { name: 'PXL Stuvo', image: '/sponsors/stuvo.png' },
]
</script>