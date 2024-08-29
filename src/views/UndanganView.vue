<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from 'vue'
    import { onBeforeRouteLeave } from 'vue-router';
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';

    import 'swiper/css/pagination';


    const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const audio = ref<HTMLAudioElement | null>(null)
    const isPlaying = ref(false);
    const scrollPosition = ref(0);

    const calculateCountdown = () => {
        const eventDate = new Date('2024-08-30T10:00:00');
        const now = new Date();
        const timeDifference = eventDate.getTime() - now.getTime();

        if (timeDifference > 0) {
            countdown.value.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            countdown.value.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            countdown.value.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            countdown.value.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        } else {
            countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    };

    const toggleAudio = () => {
        if (audio.value) {
            if (audio.value.paused) {
                audio.value.play();
                isPlaying.value = true;
            } else {
                audio.value.pause();
                isPlaying.value = false;
            }
        }
    };

    const handleScroll = () => {
        scrollPosition.value = window.scrollY;
        // console.log('Window scrolled', scrollPosition.value);
    };

    // const copyToClipboard = (text: string) => {
    //     navigator.clipboard.writeText(text).then(() => {
    //         alert('Text copied to clipboard');
    //     }).catch(err => {
    //         console.error('Failed to copy text: ', err);
    //     });
    // };

    onBeforeRouteLeave((_to, _from, next) => {
        // Pause audio when leaving the page
        if (audio.value && !audio.value.paused) {
            audio.value.pause();
            isPlaying.value = false;
        }
        next();
    });

    onMounted(() => {
        // Initialize audio
        if (!audio.value) {
            audio.value = new Audio('./assets/audio/beautiful_in_white.mp3');
            audio.value.loop = true;
        }

        // Play audio if not already playing
        if (audio.value.paused) {
            audio.value.play();
            isPlaying.value = true;
        }

        // Calculate countdown
        calculateCountdown();
        setInterval(calculateCountdown, 1000);

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    })

    onUnmounted(() => {
        // Remove scroll event listener
        window.removeEventListener('scroll', handleScroll);
    });
</script>

<template>
    <div class="flex flex-col min-h-[100vh] bg-[#C9BEB7]">
        <div class="flex flex-col justify-center items-center min-h-[100vh] section">
            <img src="../assets/images/flower_top.png" alt="" class="absolute top-0 right-0 w-[30%] sm:w-[20%] md:w-[15%] lg:w-[15%] xl:w-[10%]">
            <div class="flex flex-col justify-center items-center px-10 py-5 w-100 md:w-10">
                <img src="../assets/images/married.svg" alt="" class="w-[70%] sm:w-[40%] md:w-[30%] lg:w-[30%] xl:w-[20%]">
            </div>
    
            <div class="flex flex-col justify-center items-center px-10 py-5">
                <p class="text-center">"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."</p>
                <p> (QS Ar-Rum:21)</p>
            </div>
            <img src="../assets/images/flower_bottom.png" alt="" class="absolute bottom-0 left-0 w-[30%] sm:w-[20%] md:w-[15%] lg:w-[15%] xl:w-[10%]">
        </div>

        <div class="flex flex-col justify-center items-center min-h-[100vh] border-t-2 section">
            <img src="../assets/images/flower_top.png" alt="" class="absolute top-0 right-0 w-[30%] sm:w-[20%] md:w-[15%] lg:w-[15%] xl:w-[10%]">
            <div class="flex flex-col justify-center items-center gap-5 px-10 py-5">
                <h1 class="text-2xl font-bold font-dancing text-center">Assalamu'alaikum Warahmatullahi Wabarakatuh</h1>
                <p class="text-center">Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud menyelenggarakan acara pernikahan putra-putri kami:</p>
            </div>

            <div class="flex flex-col justify-center items-center px-10 py-10 gap-8">
                <div class="flex flex-col justify-center items-center w-100">
                    <div class="flex flex-col w-52">
                        <h1 class="font-dancing font-bold text-6xl text-left text-[#9A6A2D]">Alfaruhq</h1>
                        <p class="font-bold text-right text-[#9A6A2D]">Muhammad Alfaruhq Keraf</p>
                    </div>
                    <small>Putra dari Bapak Krens Keraf dan Ibu Anastasia Nuban</small>
                </div>

                <div class="flex flex-row justify-center items-center gap-2">
                    <img data-v-44b076dc="" src="https://api.our-wedding.link/uploads/assets/quotes_decor_13.png" alt="" width="20%" style="transform: rotate(180deg);">
                    <p class="font-dancing font-bold text-lg text-[#9A6A2D]">dengan</p>
                    <img data-v-44b076dc="" src="https://api.our-wedding.link/uploads/assets/quotes_decor_13.png" alt="" width="20%" style="transform: rotate(180deg);">
                </div>

                <div class="flex flex-col justify-center items-center w-100">
                    <div class="flex flex-col w-52">
                        <h1 class="font-dancing font-bold text-6xl text-left text-[#9A6A2D]">Isna</h1>
                        <p class="font-bold text-right text-[#9A6A2D]">Isna Asra, S.Pd</p>
                    </div>
                    <small>Putri dari Bapak Syahada dan Ibu Masdiana</small>
                </div>
            </div>
            <img src="../assets/images/flower_bottom.png" alt="" class="absolute bottom-0 left-0 w-[30%] sm:w-[20%] md:w-[15%] lg:w-[15%] xl:w-[10%]">
        </div>

        <div class="flex flex-col justify-center items-center min-h-[100vh] border-t-2 section">
            <img src="../assets/images/flower_top.png" alt="" class="absolute top-0 right-0 w-[30%] sm:w-[20%] md:w-[15%] lg:w-[15%] xl:w-[10%]">
            <div class="flex flex-col justify-center items-center px-10 py-10">
                <small>yang akan di selenggarakan pada:</small>
            </div>

            <div class="flex flex-col justify-center items-center px-10 py-10 gap-5">
                <h1 class="font-dancing font-bold text-5xl">Jumat</h1>
                <div class="flex flex-row w-100">
                    <div class="flex flex-col justify-center items-center w-100">
                        <h1 class="text-6xl">30</h1>
                        <p>Agustus 2024</p>
                    </div>
                    <div class="h-auto border-r-2 border-black mx-2"></div>
                    <div class="flex flex-col justify-between w-100">
                        <h1 class="text-lg text-center">Akad</h1>
                        <h1 class="text-lg text-center">& Resepsi</h1>
                        <p class="text-center">10:00 WITA-Selesai</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col justify-center items-center px-10 py-10">
                <p class="text-center">Binuang 1, kelurahan Amassangan, kecamatan Binuang, kabupaten Polewali Mandar, Jln. Poros Pinrang Polewali</p>
            </div>
            <img src="../assets/images/flower_bottom.png" alt="" class="absolute bottom-0 left-0 w-[30%] sm:w-[20%] md:w-[15%] lg:w-[15%] xl:w-[10%]">
        </div>

        <div class="flex flex-col justify-center items-center min-h-[100vh] border-t-2 section">
            <img src="../assets/images/flower_top.png" alt="" class="absolute top-0 right-0 w-[30%] sm:w-[20%] md:w-[15%] lg:w-[15%] xl:w-[10%]">
            <div class="flex flex-col justify-center items-center gap-5 px-10 py-5">
                <h1 class="text-2xl font-bold font-dancing text-center">Galeri Kami</h1>
            </div>

            <div class="w-[70%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[20%]">
                <swiper :slides-per-view="1" :space-between="10">
                    <swiper-slide><img src="../assets/images/foto4.jpg" alt="" /></swiper-slide>
                    <swiper-slide><img src="../assets/images/foto3.jpg" alt="" /></swiper-slide>
                    <swiper-slide><img src="../assets/images/foto2.jpg" alt="" /></swiper-slide>
                    <swiper-slide><img src="../assets/images/foto1.jpg" alt="" /></swiper-slide>
                </swiper>
            </div>
            <img src="../assets/images/flower_bottom.png" alt="" class="absolute bottom-0 left-0 w-[30%] sm:w-[20%] md:w-[15%] lg:w-[15%] xl:w-[10%]">
        </div>

        <div class="flex flex-col justify-center items-center min-h-[100vh] border-t-2 section">
            <img src="../assets/images/flower_top.png" alt="" class="absolute top-0 right-0 w-[30%] sm:w-[20%] md:w-[15%] lg:w-[15%] xl:w-[10%]">
            <div class="flex flex-col justify-center items-center px-5 py-10">
                <p class="text-center">Suatu kehormatan dan kebahagiaan bagi kami apabila, Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restu bagi putra putri kami.</p>
            </div>

            <div class="flex flex-col justify-center items-center px-5 py-10">
                <h2 class="text-2xl font-bold">Segera:</h2>
                <p class="text-center">
                    {{ countdown.days }} days, {{ countdown.hours }} hours, {{ countdown.minutes }} minutes, {{ countdown.seconds }} seconds
                </p>
            </div>
            <img src="../assets/images/flower_bottom.png" alt="" class="absolute bottom-0 left-0 w-[30%] sm:w-[20%] md:w-[15%] lg:w-[15%] xl:w-[10%]">
        </div>

        <!-- <div class="flex flex-col justify-center items-center min-h-[100vh] border-t-2 section">
            <img src="../assets/images/flower_top.png" alt="" class="absolute top-0 right-0 w-[30%] sm:w-[20%] md:w-[15%] lg:w-[15%] xl:w-[10%]">
            <div class="flex flex-col justify-center items-center gap-5 px-10 py-5 w-full sm:w-96 md:w-96 lg:w-96 xl:w-96">
                <h1 class="text-2xl font-bold font-dancing text-center">GIFT</h1>
                <div class="flex flex-row bg-white w-full px-6 py-5 rounded-lg">
                    <div class="flex flex-col justify-center items-start gap-7">
                        <img src="../assets/images/bri_logo.png" alt="" width="60">
                        <div class="flex flex-col justify-center items-start gap-2">
                            <p class="font-arial">Muhammad Alfaruhq Keraf</p>
                            <div class="flex flex-row justify-center items-center gap-3 rekening" @click="copyToClipboard('744201015103531')">
                                <p class="font-arial font-bold">744201015103531</p>
                                <font-awesome-icon :icon="['fas', 'copy']" class="text-blue-600" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="../assets/images/flower_bottom.png" alt="" class="absolute bottom-0 left-0 w-[30%] sm:w-[20%] md:w-[15%] lg:w-[15%] xl:w-[10%]">
        </div> -->

        <div class="fixed mx-5 my-5 right-0 bottom-0 text-white">
            <button @click="toggleAudio" class="bg-[#9A6A2D] w-10 h-10 rounded-full">
                <font-awesome-icon :icon="isPlaying ? ['fas', 'pause'] : ['fas', 'play']" />
            </button>
        </div>
    </div>
</template>

<style scoped>
    .section {
        position: relative;
    }
</style>