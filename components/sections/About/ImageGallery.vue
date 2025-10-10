<script setup lang="ts">
// Hard-code your images here. These files should exist in /public/images
type GalleryImage = {
  pathname: string // filename in /public/images
  alt?: string
  width?: number
  height?: number
  // optional slug if you keep detail pages: slug?: string
}

const images: GalleryImage[] = [
  { pathname: 'beach.jpg', alt: 'Sunny beach' },
  { pathname: 'forest.jpg', alt: 'Green forest' },
  { pathname: 'mountain.jpg', alt: 'Mountain range' },
  { pathname: 'city.jpg', alt: 'City skyline' },
  // add/remove items as you like
]
</script>

<template>
  <div>
    <section class="relative min-h-screen gap-[22px] p-4">
      <BottomMenu class="bottom-menu">
        <template #logo>
          <img src="/logo.svg" width="29" height="20">
        </template>

        <template #description>
          <div class="flex gap-x-4 items-center">
            <p class="bottom-menu-description text-sm sm:text-base leading-tight sm:leading-normal">
              Media Gallery template
            </p>
            <NuxtLink to="https://github.com/Flosciante/nuxt-image-gallery" target="_blank" class="flex items-center">
              <UIcon name="i-simple-icons-github" class="w-5 h-5" />
            </NuxtLink>
          </div>
        </template>

        <template #buttons>
          <!-- No auth buttons in static mode -->
        </template>
      </BottomMenu>

      <div class="w-full" :class="{ 'masonry-container': images.length }">
        <ul v-if="images.length" class="grid grid-cols-1 gap-4 lg:block">
          <li
            v-for="image in images"
            :key="image.pathname"
            class="relative w-full group masonry-item"
          >
            <img
              :src="`/images/${image.pathname}`"
              :alt="image.alt || ''"
              :width="image.width || 527"
              :height="image.height || 430"
              class="h-auto w-full max-h-[430px] rounded-md transition-all duration-200 border-image brightness-[.8] hover:brightness-100 will-change-[filter] object-cover"
            >
          </li>
        </ul>

        <div v-else class="text-2xl text-white flex flex-col gap-y-4 items-center justify-center h-full w-full pb-8">
          <h1 class="font-medium text-5xl">Welcome to image gallery</h1>
          <p class="text-gray-400">Add images to the images array to show them here.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="postcss">
@media (min-width: 768px) {
  .imageEl {
    view-transition-name: vtn-image;
  }

  .bottom-menu-description {
    view-transition-name: vtn-bottom-menu-description;
  }

  .bottom-menu-button {
    view-transition-name: vtn-bottom-menu-button;
  }

  .container-image {
    background-color: rgba(255, 255, 255, 0.1)
  }

  .container-image:hover {
    background-color: transparent;
  }

  .border-image {
    border-width: 1.15px;
    border-color: rgba(255, 255, 255, 0.1)
  }
}

@media screen and (min-width: 1024px) {
  .masonry-container {
    column-count: 3;
    column-gap: 20px;
    column-fill: balance;
    margin: 20px auto 0;
    padding: 2rem;
  }

  .masonry-item,
  .upload {
    display: inline-block;
    margin: 0 0 20px;
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
    width: 100%;
  }
}
</style>