<template>
  <div class="w-full flex flex-row h-screen">
    <div
      class="w-5/12 md:flex h-full hidden bg-[url('/banner/MibImg.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div class="w-full h-full bg-gray-900 bg-opacity-70"></div>
    </div>
    <div class="w-7/12 md:flex hidden h-full flex-col justify-center">
      <div
        class="px-16 py-16 h-2/3 w-full bg-gray-500 shadow-md flex flex-col -ml-40 z-10 bg-gray-700"
      >
        <span class="text-4xl font-semibold text-white"
          >Muhammad Ivan Bastomi</span
        >
        <span class="text-gray-300">Fullstack Developer</span>
        <p class="w-96 text-left text-base font-light mt-10">
          Hello, I am a highly motivated programmer with more two years of
          experience in software development. My areas of expertise include
          developing and maintaining web applications, writing clean and
          efficient code, and collaborating with cross-functional teams to
          deliver highquality software products. I am committed to staying
          up-to-date with the latest technologies and best practices in the
          industry.
        </p>
        <div class="w-full flex flex-row items-center gap-10">
          <div class="flex flex-col gap-2">
            <span class="mt-6 text-sm text-gray-300">See my code at: </span>
            <div class="flex flex-row items-center gap-3">
              <div
                class="flex flex-row items-center cursor-pointer p-2 gap-1.5 rounded-full border"
                @click.stop="jumpPage('https://github.com/MIB19')"
              >
                <font-awesome-icon icon="fa-brands fa-github" size="lg" />
                <span class="text-xs text">Github</span>
              </div>
              <div
                class="flex flex-row items-center cursor-pointer p-2 gap-1.5 rounded-full border"
                @click.stop="jumpPage('https://gitlab.com/MIB19')"
              >
                <font-awesome-icon icon="fa-brands fa-gitlab" size="lg" />
                <span class="text-xs text">Gitlab</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <span class="mt-6 text-sm text-gray-300">Social Media: </span>
            <div class="flex flex-row items-center gap-3">
              <div
                class="flex flex-row items-center cursor-pointer p-2 gap-1.5 rounded-full border"
                @click.stop="
                  jumpPage(
                    'https://www.linkedin.com/in/muhammad-ivan-bastomi-2b2801211/'
                  )
                "
              >
                <font-awesome-icon icon="fa-brands fa-linkedin" size="lg" />
                <span class="text-xs text">Linkedin</span>
              </div>
              <div
                class="flex flex-row items-center cursor-pointer p-2 gap-1.5 rounded-full border"
                @click.stop="jumpPage('https://www.instagram.com/ivanbastomi/')"
              >
                <font-awesome-icon icon="fa-brands fa-instagram" size="lg" />
                <span class="text-xs text">Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full h-full md:hidden flex bg-[url('/banner/MibImg.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div
        class="px-4 sm:px-8 h-full items-center justify-center bg-gray-900 bg-opacity-70 w-full flex flex-col"
      >
        <span class="text-4xl font-semibold text-white text-center"
          >Muhammad Ivan Bastomi</span
        >
        <span class="text-gray-300 text-center">Fullstack Developer</span>
        <p class="w-full text-center text-base font-light mt-10">
          Hello, I am a highly motivated programmer with more two years of
          experience in software development. My areas of expertise include
          developing and maintaining web applications, writing clean and
          efficient code, and collaborating with cross-functional teams to
          deliver highquality software products. I am committed to staying
          up-to-date with the latest technologies and best practices in the
          industry.
        </p>
        <div class="w-full flex flex-col items-center gap-2">
          <div class="flex flex-col items-center gap-2">
            <span class="mt-6 text-sm text-gray-300">See my code at: </span>
            <div class="flex flex-row items-center gap-3">
              <div
                class="flex flex-row items-center cursor-pointer p-2 gap-1.5 rounded-full border"
                @click.stop="jumpPage('https://github.com/MIB19')"
              >
                <font-awesome-icon icon="fa-brands fa-github" size="lg" />
                <span class="text-xs text">Github</span>
              </div>
              <div
                class="flex flex-row items-center cursor-pointer p-2 gap-1.5 rounded-full border"
                @click.stop="jumpPage('https://gitlab.com/MIB19')"
              >
                <font-awesome-icon icon="fa-brands fa-gitlab" size="lg" />
                <span class="text-xs text">Gitlab</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center gap-2">
            <span class="mt-6 text-sm text-gray-300">Social Media: </span>
            <div class="flex flex-row items-center gap-3">
              <div
                class="flex flex-row items-center cursor-pointer p-2 gap-1.5 rounded-full border"
                @click.stop="
                  jumpPage(
                    'https://www.linkedin.com/in/muhammad-ivan-bastomi-2b2801211/'
                  )
                "
              >
                <font-awesome-icon icon="fa-brands fa-linkedin" size="lg" />
                <span class="text-xs text">Linkedin</span>
              </div>
              <div
                class="flex flex-row items-center cursor-pointer p-2 gap-1.5 rounded-full border"
                @click.stop="jumpPage('https://www.instagram.com/ivanbastomi/')"
              >
                <font-awesome-icon icon="fa-brands fa-instagram" size="lg" />
                <span class="text-xs text">Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
function jumpPage(url) {
  window.open(url);
}
</script>
