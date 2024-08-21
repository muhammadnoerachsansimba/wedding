<script setup lang="ts">
    import {ref, watch} from 'vue'
    import {useRoute} from 'vue-router'

    const route = useRoute()
    // const router = useRouter()
    const name = ref(route.params.name || '')

    watch(() => route.params.name, (value) => {
        name.value = value || ''
    })

    // const navigateToCover = () => {
    //     if (name.value) {
    //         router.push({name: 'cover', params: {name: name.value}})
    //     }
    // }
</script>

<template>
    <div class="flex flex-col justify-center items-center gap-10 h-[100vh] overflow-y-hidden" id="cover">
        <div class="flex flex-col justify-center items-center gap-6">
            <div class="flex flex-col justify-center items-center gap-10">
                <h1 class="font-bold text-4xl text-[#FBC02D]">Undangan Pernikahan</h1>
                <div class="flex flex-col justify-center w-24 gap-0.5">
                    <p class="font-bold text-xl text-white text-left">Albert</p>
                    <p class="font-bold text-xl text-white text-center">&</p>
                    <p class="font-bold text-xl text-white text-right">Isna</p>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center">
                <p class="font-bold text-sm">Jumat, 30 Agustus 2024</p>
            </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-4">
            <p>Turut mengundang:</p>
            <h1 class="font-bold text-lg">{{ name }}</h1>
            <p>di tempat</p>
        </div>
        <div class="flex flex-col justify-center items-center">
            <v-btn variant="outlined" color="yellow-darken-2" to="/undangan">Buka Undangan</v-btn>
        </div>
    </div>
</template>

<style scoped>
    #cover {
        background-image: url('../assets/images/cover_background.png');
        background-size: cover;
        background-position: center;
    }
</style>