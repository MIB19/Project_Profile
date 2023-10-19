<template>
  <div class="w-full flex flex-col items-center py-16 bg-gray-600">
    <h2 class="text-white font-semibold text-4xl">Tech Skills</h2>
    <div
      class="mt-10 w-full max-w-screen-md flex flex-row gap-3 px-4 md:px-8 flex-wrap"
    >
      <span
        v-for="(sk, i) in skill"
        :key="i"
        class="py-2 px-4 rounded-full border text-sm font-medium"
        >{{ sk }}</span
      >
    </div>
  </div>
</template>
<script setup>
const skill = ref([
  'VueJs',
  'NuxtJs',
  'ReactJs',
  'React Native',
  'NextJs',
  'ExpressJs',
  'Node JS',
  'CapacitorJs',
  'IonicJs',
  'Laravel',
  'Javascript',
  'Typescript',
  'Redux',
  'Pinia',
  'Vuex',
  'Tailwind Css',
  'Bootstrap Css',
  'ANT Design',
  'MySql',
  'PostgreeSql',
  'Redis',
  'Firebase',
]);
</script>
