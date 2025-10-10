<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'

type GalleryImage = {
  pathname: string
  alt?: string
  caption?: string
}

// Your images in /public/images
const images: GalleryImage[] = [
  { pathname: 'gallery-0.jpeg', caption: 'gallery' },
    { pathname: 'gallery-13.jpeg', caption: 'gallery' },
  { pathname: 'gallery-3.jpg', caption: 'gallery' },
  { pathname: 'gallery-5.jpg', caption: 'gallery' },
  { pathname: 'gallery-6.jpg', caption: 'gallery' },
   { pathname: 'gallery-14.jpeg', caption: 'gallery' },
  { pathname: 'gallery-11.jpeg', caption: 'gallery' },
  { pathname: 'gallery-12.jpeg', caption: 'gallery' },
 { pathname: 'gallery-2.jpg', caption: 'gallery' },
  { pathname: 'gallery-4.jpg', caption: 'gallery' },
  { pathname: 'gallery-15.jpeg', caption: 'gallery' },
  { pathname: 'gallery-16.jpeg', caption: 'gallery' },
 
]

// How many to show per page (set to 6 or 9)
const pageSize = ref(6)

const pages = computed(() => {
  const res: GalleryImage[][] = []
  for (let i = 0; i < images.length; i += pageSize.value) {
    res.push(images.slice(i, i + pageSize.value))
  }
  return res
})

const currentPage = ref(0)
const trackRef = ref<HTMLDivElement | null>(null)

function goToPage(index: number) {
  const el = trackRef.value
  if (!el) return
  const totalPages = pages.value.length
  currentPage.value = Math.max(0, Math.min(index, totalPages - 1))
  el.scrollTo({ left: currentPage.value * el.clientWidth, behavior: 'smooth' })
}
function nextPage() { goToPage(currentPage.value + 1) }
function prevPage() { goToPage(currentPage.value - 1) }
function onScroll() {
  const el = trackRef.value
  if (!el) return
  currentPage.value = Math.round(el.scrollLeft / el.clientWidth)
}
function handleResize() { nextTick(() => goToPage(currentPage.value)) }
function handleKeys(e: KeyboardEvent) {
  if (e.key === 'ArrowRight') nextPage()
  if (e.key === 'ArrowLeft') prevPage()
}

// Compact variable heights (clean look)
const spansPattern = [20, 24, 22, 28, 24, 20, 26, 22, 24]
function spanFor(globalIndex: number) { return spansPattern[globalIndex % spansPattern.length] }

// Lightbox
let lightbox: any | null = null
onMounted(async () => {
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  document.documentElement.classList.toggle('touch', isTouch)

  const { default: GLightbox } = await import('glightbox')
  lightbox = GLightbox({
    selector: '.gallery-link',
    skin: 'clean',
    loop: true,
    touchNavigation: true,
    openEffect: 'zoom',
    closeEffect: 'zoom',
    slideEffect: 'fade',
    draggable: true,
    width: '90vw',
    height: 'auto'
  })

  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', handleKeys)
})
onBeforeUnmount(() => {
  if (lightbox && typeof lightbox.destroy === 'function') lightbox.destroy()
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleKeys)
})
</script>

<template>
  <section class="gallery-carousel">
    <!-- Controls (no count) -->
    <header class="carousel-header">
      <div class="auto-container">
        <div class="controls">
        <button class="nav-btn" @click="prevPage" :disabled="currentPage === 0" aria-label="Previous">
          <svg viewBox="0 0 24 24" width="18" height="18"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <button class="nav-btn" @click="nextPage" :disabled="currentPage >= pages.length - 1" aria-label="Next">
          <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
      </div>
    </header>

    <!-- Track -->
   <div class="auto-container">
     <div ref="trackRef" class="carousel-track" @scroll.passive="onScroll">
      <div v-for="(page, pIdx) in pages" :key="'page-' + pIdx" class="slide">
        <article class="masonry-grid">
          <a
            v-for="(img, idx) in page"
            :key="'img-' + pIdx + '-' + idx"
            class="gallery-link"
            :style="{ gridRowEnd: `span ${spanFor(pIdx * pageSize + idx)}` }"
            :href="`/images/${img.pathname}`"
            :title="img.caption || img.alt || 'Photo caption'"
            data-gallery="mican-gallery"
            :data-glightbox="`title: ${img.caption || 'Photo caption'}`"
          >
            <figure class="gallery-image">
              <img :src="`/images/${img.pathname}`" :alt="img.alt || img.caption || 'Photo'" />
              <figcaption>{{ img.caption || 'Photo caption' }}</figcaption>
            </figure>
          </a>
        </article>
      </div>
    </div>
   </div>

    <!-- Dots -->
    <div class="dots" v-if="pages.length > 1">
      <button
        v-for="(_, i) in pages"
        :key="'dot-' + i"
        class="dot"
        :class="{ active: i === currentPage }"
        @click="goToPage(i)"
        :aria-label="`Go to page ${i + 1}`"
      />
    </div>
  </section>
</template>

<style>
:root {
  /* Responsive gap/size via clamp for better mobile feel */
  --gallery-gap: clamp(8px, 2.6vw, 14px);
  --row-height: clamp(5px, 1.2vw, 6px);
  --arrow-bg: rgba(255,255,255,0.95);
  --arrow-color: #111;
  --arrow-size: clamp(44px, 9vw, 46px); /* mobile-friendly tap size */
}

.gallery-carousel { position: relative; }

/* Header: right-aligned on desktop; becomes floating bottom-right on mobile */
.carousel-header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  margin: 12px 0 10px;
}
.controls { display: flex; gap: 8px; }
.nav-btn {
  width: var(--arrow-size);
  height: var(--arrow-size);
  border-radius: 999px;
  background: var(--arrow-bg);
  color: var(--arrow-color);
  border: 0;
  display: grid;
  place-items: center;
  box-shadow: 0 8px 24px rgba(0,0,0,.18);
  cursor: pointer;
  transition: transform .15s ease, background .15s ease, opacity .15s ease;
}
.nav-btn:hover { transform: translateY(-1px); background: #fff; }
.nav-btn:disabled { opacity: .4; cursor: not-allowed; }

/* Track */
.carousel-track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.carousel-track::-webkit-scrollbar { display: none; }
.slide {
  flex: 0 0 100%;
  scroll-snap-align: start;
  padding: 4px 0;
}

/* Dots */
.dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
  padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 4px);
}
.dot {
  width: 8px; height: 8px; border-radius: 999px;
  background: rgba(0,0,0,.25);
  border: none; cursor: pointer;
  transition: transform .15s ease, background .15s ease;
}
.dot.active { background: rgba(0,0,0,.6); transform: scale(1.1); }

/* Masonry grid (per page) */
.masonry-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: var(--row-height);
  gap: var(--gallery-gap);
  padding: 0 2px;
}

/* Small phones: 2 columns for denser layout */
@media (min-width: 380px) {
  .masonry-grid { grid-template-columns: repeat(2, 1fr); }
}
/* Tablets and up: 3 columns */
@media (min-width: 900px) {
  .masonry-grid { grid-template-columns: repeat(3, 1fr); }
}

/* Mobile-specific: float controls bottom-right inside the carousel */
@media (max-width: 640px) {
  .carousel-header {
    position: absolute;
    right: calc(var(--gallery-gap) + 2px);
    bottom: calc(env(safe-area-inset-bottom, 0px) + var(--gallery-gap) + 28px);
    margin: 0;
    z-index: 5;
    background: rgba(255,255,255,0.88);
    border-radius: 999px;
    padding: 6px;
    box-shadow: 0 8px 24px rgba(0,0,0,.15);
    backdrop-filter: blur(4px);
  }
}

/* Cards + hover effect */
.gallery-link { display: block; width: 100%; color: inherit; text-decoration: none; }

.gallery-image {
  position: relative;
  margin: 0;
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  background: #0e0e0e;
}
.gallery-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
/* Border layers */
.gallery-image::before,
.gallery-image::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 12px solid rgba(0, 0, 0, 0.1);
  transition: all .2s;
  will-change: border;
  pointer-events: none;
}
.gallery-image::after { border-width: 0; }

/* Caption + sliding translucent panels */
.gallery-image figcaption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 14px;
  color: rgba(255,255,255,0);
  padding: 0.9em;
  transition: all .2s ease;
  font-weight: 600;
  max-width: calc(100% - 8em);
  line-height: 1.25;
  text-align: center;
  box-sizing: border-box;
  z-index: 1;
}
.gallery-image figcaption::before,
.gallery-image figcaption::after {
  content: '';
  position: absolute;
  background: rgba(0,0,0,.18);
  width: 100%;
  height: 100%;
  padding: 0.9em;
  transition: all .3s ease-in-out;
  opacity: 0;
  z-index: -1;
}
.gallery-image figcaption::before,
.gallery-image figcaption::after { right: 100%; bottom: 100%; }
.gallery-image figcaption::after { left: 100%; top: 100%; }

/* Hover (non-touch) */
html:not(.touch) .gallery-image:hover::before { border-width: 12px; }
html:not(.touch) .gallery-image:hover::after  { border-width: 24px; }
html:not(.touch) .gallery-image:hover figcaption {
  color: rgba(255,255,255,1);
  text-shadow: 0 0 1px rgba(0,0,0,.2);
  transition: all .2s ease .25s;
}
html:not(.touch) .gallery-image:hover figcaption::before,
html:not(.touch) .gallery-image:hover figcaption::after { opacity: 1; }
html:not(.touch) .gallery-image:hover figcaption::before { right: -1.2em; bottom: -1.2em; }
html:not(.touch) .gallery-image:hover figcaption::after  { left:  -1.2em; top:    -1.2em; }

/* Touch devices */
html.touch .gallery-image figcaption {
  color: rgba(255,255,255,1);
  text-shadow: 0 0 1px rgba(0,0,0,.2);
  top: auto; bottom: 1.5em; left: 50%; transform: translateX(-50%);
}
html.touch .gallery-image figcaption::before,
html.touch .gallery-image figcaption::after { opacity: 1; right: -1.2em; bottom: -1.2em; }
html.touch .gallery-image figcaption::after { left: -1.2em; top: -1.2em; }

/* Lightbox polish */
.goverlay { background: rgba(10,10,12,0.92); backdrop-filter: blur(2px); }
.glightbox-container .gbtn {
  background: rgba(255,255,255,0.9);
  color: #111;
  width: 42px; height: 42px;
  border-radius: 999px;
  box-shadow: 0 6px 18px rgba(0,0,0,.25);
  transition: transform .15s ease, background .15s ease;
}
.glightbox-container .gbtn:hover { background: #fff; transform: translateY(-1px); }
.glightbox-clean .gdesc-inner { font-size: 14px; font-weight: 600; color: #fff; }

/* Reduce motion */
@media (prefers-reduced-motion: reduce) {
  .nav-btn, .dot, .gallery-image::before, .gallery-image::after,
  .gallery-image figcaption, .gallery-image figcaption::before, .gallery-image figcaption::after {
    transition: none !important;
  }
}
</style>