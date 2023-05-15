<template>
  <div
    class="w-full z-50 flex bg-gray-900 bg-opacity-90 fixed h-screen top-0 left-0 justify-center items-center"
    @click="closeModal"
  >
    <font-awesome-icon
      icon="fa-solid fa-times"
      class="absolute top-6 right-6 cursor-pointer"
      size="lg"
      @click="closeModal"
    />
    <img
      :src="props.img"
      class="w-full h-2/3 object-contain"
      @click.stop="doNothing"
    />
  </div>
</template>
<script setup>
const emit = defineEmits(['close']);
const props = defineProps({
  img: { type: String, required: true },
});

function closeModal() {
  emit('close');
}
function doNothing() {
  //
}
</script>
