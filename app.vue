<template>
  <div>
    <Html>
      <Head>
        <Title>MIB Profile</Title>
        <Meta charset="utf-8" />
        <Meta
          name="viewport"
          content="viewport-fit=cover"
          width="device-width"
          :initial-scale="1"
          :maximum-scale="1"
          user-scalable="no"
        />
        <Meta name="format-detection" content="telephone=no" />
        <Meta name="description" content="Profile of Muhammad Ivan Bastomi" />
        <Meta name="color-scheme" content="dark" />
        <Link rel="icon" type="image/png" href="/favicon.png" />
        <Link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          as="script"
        />
        <Link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          :cross-origin="true"
          as="script"
        />
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
        />
      </Head>
    </Html>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
