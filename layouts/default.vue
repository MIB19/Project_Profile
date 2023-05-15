<template>
  <div class="w-full min-h-screen flex flex-col items-center app bg-gray-600">
    <!-- <LayoutsHeaderSection /> -->
    <slot />
    <LayoutsFooterSection />
  </div>
</template>
<script setup></script>
<style>
.app {
  font-family: 'Poppins', sans-serif;
}
</style>
