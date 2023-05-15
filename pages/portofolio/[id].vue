<template>
  <PortofolioPage :id="id" />
</template>
<script setup>
definePageMeta({
  layout: 'default',
});

const route = useRoute();
const id = ref(route.params.id);
</script>
