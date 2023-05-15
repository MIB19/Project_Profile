<template>
  <div class="w-full min-h-screen flex flex-col">
    <div class="w-full flex flex-row items-center overflow-x-scroll gap-2 py-3">
      <img
        v-for="(da, i) in data.doc"
        :key="i"
        :src="da"
        class="w-full h-96 object-contain"
      />
    </div>
    <div
      class="w-full py-4 bg-gray-900 flex gap-1.5 flex-col justify-center items-center"
    >
      <h1 class="text-4xl text-white font-semibold">{{ data.title }}</h1>
      <span class="font-light text-gray-200">( {{ data.platform }} )</span>
    </div>
    <div
      class="w-full flex flex-col px-3 sm:px-6 md:px-10 mt-4 gap-4 lg:px-20 pb-6"
    >
      <span class="py-3 text-lg font-medium">{{ data.desc }}</span>
      <div
        class="w-full flex flex-col md:flex-row items-center justify-center gap-4"
      >
        <div
          class="p-4 border w-full rounded-xl h-64 flex flex-col hover:scale-105 animate duration-500 gap-2"
        >
          <span class="text-lg font-medium">Job Description</span>
          <ul class="list-disc list-inside text-sm font-light">
            <li v-for="(da, i) in data.job_desc" :key="i">
              {{ da }}
            </li>
          </ul>
        </div>
        <div
          class="p-4 border w-full rounded-xl h-64 flex flex-col animate duration-500 gap-2"
        >
          <span class="text-lg font-medium">Tech Stack</span>
          <div class="w-full flex flex-row items-center gap-3 flex-wrap">
            <span
              v-for="(sk, i) in data.tech_stack"
              :key="i"
              class="px-4 py-2 rounded-full text-sm hover:scale-105 border"
              >{{ sk }}</span
            >
          </div>
        </div>
      </div>
      <button
        class="py-3 px-10 border animate duration-500 rounded-full hover:bg-white hover:text-gray-900"
        @click="toWebsite"
      >
        Visit Website ->
      </button>
    </div>
  </div>
</template>
<script setup>
import { usePortoStore } from '~/store/porto';

const props = defineProps({
  id: { type: [String, Number], required: true },
});
const portoStore = usePortoStore();

const data = ref([]);

function toWebsite() {
  window.open(data.value.url);
}

onBeforeMount(() => {
  const portoId = parseInt(props.id);
  const da = portoStore.getPorto;
  for (const i in da) {
    if (da[i].id === portoId) {
      data.value = da[i];
    }
  }
  console.log(data);
});
</script>
