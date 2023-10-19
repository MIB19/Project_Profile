<template>
  <div class="w-full md:min-h-screen flex flex-col py-8 md:py-16 items-center">
    <span class="text-white font-semibold text-2xl md:text-4xl"
      >Portofolio</span
    >
    <div
      class="w-full flex flex-row items-center justify-center flex-wrap gap-4 mt-10 px-4 md:px-10"
    >
      <div
        v-for="(da, i) in data"
        :key="i"
        class="h-100 md:flex hidden flex-col relative items-start w-80 bg-gray-700 cursor-pointer"
        @click.stop="toPorto(da.id)"
      >
        <img :src="da.img" class="h-52 w-full object-contain bg-white" />
        <span
          class="h-10 bg-gray-900 w-full flex text-center items-center justify-center -mt-10 font-semibold"
          >{{ da.title }}</span
        >
        <div class="w-full flex mt-4 gap-2 z-10 flex-col items-start px-4">
          <span
            >Platform: <span class="font-light">{{ da.platform }}</span></span
          >
          <p class="text-sm text-gray-200 font-light">{{ da.desc }}</p>
          <a :href="da.url" class="absolute bottom-4 left-4"
            >Visit Website -></a
          >
        </div>
      </div>
      <div
        v-for="(da, i) in data"
        :key="i"
        class="h-32 md:hidden flex flex-col relative items-start w-40 bg-gray-700 cursor-pointer"
        @click.stop="toPorto(da.id)"
      >
        <img :src="da.img" class="h-32 w-full object-contain bg-white" />
        <span
          class="h-8 bg-gray-900 w-full text-xs flex items-center justify-center -mt-8"
          >{{ da.title }}</span
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { usePortoStore } from '~~/store/porto';

const portoStore = usePortoStore();
const router = useRouter();

const data = ref([]);

function toPorto(id) {
  router.push('/portofolio/' + id);
}

onBeforeMount(() => {
  data.value = portoStore.getPorto;
});
</script>
