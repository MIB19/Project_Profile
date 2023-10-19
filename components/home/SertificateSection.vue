<template>
  <div class="w-full flex flex-col items-center py-8 md:py-16 bg-gray-700">
    <h2 class="text-white font-semibold text-2xl md:text-4xl">Sertificate</h2>
    <div
      class="mt-6 md:mt-10 w-full max-w-screen-lg flex flex-row justify-center gap-4 flex-wrap"
    >
      <div
        v-for="(da, i) in data"
        :key="i"
        class="h-32 w-40 md:h-64 md:w-80 flex flex-col border-2 border-gray-900 bg-gray-500 cursor-pointer"
        @click="showModal(da.img)"
      >
        <img :src="da.img" class="w-full h-24 md:h-52" />
        <span
          class="w-full h-full flex justify-center items-center bg-gray-900 text-xs md:text-base text-white"
          >{{ da.title }}</span
        >
      </div>
    </div>
    <ModalLoginModal v-if="openImage" :img="image" @close="closeModal" />
  </div>
</template>
<script setup>
const data = ref([
  { img: '/sertif/AplikasiBackend.png', title: 'Backend Application' },
  { img: '/sertif/DasarAws.png', title: 'Basic AWS' },
  { img: '/sertif/DasarJs.png', title: 'Basic Javascript' },
  { img: '/sertif/DasarWeb.png', title: 'Basic Backend' },
  { img: '/sertif/NgrokTunnel.png', title: 'Ngrok Tunnel' },
  { img: '/sertif/WebBasic.png', title: 'Basic WEB' },
]);
const openImage = ref(false);
const image = ref('');

function showModal(val) {
  image.value = val;
  openImage.value = true;
}
function closeModal() {
  image.value = '';
  openImage.value = false;
}
</script>
