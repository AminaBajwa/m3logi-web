<template>
  <section class="lm">
    <div class="lm__container">
      <header class="lm__header">
        <h2>Office Locations</h2>
        <p>Find and contact our offices around the world.</p>
      </header>

      <div class="lm__layout">
        <!-- Map -->
        <div class="lm__map">
          <ClientOnly>
            <iframe
              v-if="selected"
              class="lm__mapFrame"
              :src="mapEmbedSrc"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </ClientOnly>
        </div>

        <!-- Cards -->
        <div class="lm__grid">
          <article
            v-for="loc in locations"
            :key="loc.id"
            class="lm__card"
            :class="{ 'is-active': selected?.id === loc.id }"
            @click="select(loc)"
          >
            <div class="lm__image" :style="{ backgroundImage: `url(${loc.image || fallbackImage})` }">
              <span v-if="loc.tag" class="lm__badge">{{ loc.tag }}</span>
            </div>

            <div class="lm__body">
              <h3 class="lm__title">{{ loc.name }}</h3>
              <p class="lm__address">{{ loc.address }}</p>

              <div class="lm__contact">
                <a
                  v-if="loc.phone"
                  class="lm__chip"
                  :href="telHref(loc.phone)"
                  @click.stop
                  aria-label="Call office"
                >
                  <svg viewBox="0 0 24 24" class="lm__icon"><path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2a1 1 0 011-.26c1.1.36 2.3.56 3.6.56a1 1 0 011 1v3.5a1 1 0 01-1 1C10.5 20 4 13.5 4 5.9a1 1 0 011-1h3.5a1 1 0 011 1c0 1.3.2 2.5.56 3.6a1 1 0 01-.26 1l-2.2 2.2z"/></svg>
                  <span>{{ loc.phoneLabel || loc.phone }}</span>
                </a>
                <span v-else class="lm__chip lm__chip--muted">
                  <svg viewBox="0 0 24 24" class="lm__icon"><path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2a1 1 0 011-.26c1.1.36 2.3.56 3.6.56a1 1 0 011 1v3.5a1 1 0 01-1 1C10.5 20 4 13.5 4 5.9a1 1 0 011-1h3.5a1 1 0 011 1c0 1.3.2 2.5.56 3.6a1 1 0 01-.26 1l-2.2 2.2z"/></svg>
                  <span>Phone coming soon</span>
                </span>

                <a
                  v-if="loc.email"
                  class="lm__chip"
                  :href="`mailto:${loc.email}`"
                  @click.stop
                  aria-label="Email office"
                >
                  <svg viewBox="0 0 24 24" class="lm__icon"><path d="M4 6h16a2 2 0 012 2v.2l-10 6.25L2 8.2V8a2 2 0 012-2zm0 4.55l8 5 8-5V16a2 2 0 01-2 2H6a2 2 0 01-2-2v-5.45z"/></svg>
                  <span>{{ loc.email }}</span>
                </a>
              </div>

              <div class="lm__links">
                <a
                  class="lm__link"
                  :href="directionsUrl(loc)"
                  target="_blank"
                  rel="noopener"
                  @click.stop
                >
                  Get directions
                </a>
                <button class="lm__link" @click.stop="copyAddress(loc.address)">
                  Copy address
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

/**
 * Props: locations array
 * Each location:
 * {
 *  id: string,
 *  name: string,
 *  address: string,
 *  phone?: string|null,
 *  phoneLabel?: string, // optional custom label like "Coming Soon"
 *  email?: string|null,
 *  image?: string,
 *  lat?: number,
 *  lng?: number,
 *  tag?: string // e.g., "HQ"
 * }
 */
const props = defineProps({
  locations: {
    type: Array,
    required: true
  },
  initialId: {
    type: String,
    default: null
  }
})

const fallbackImage = '/images/placeholder-office.jpg'
const selected = ref(props.locations?.[0] || null)

watch(
  () => [props.locations, props.initialId],
  () => {
    const byId = props.locations?.find(l => l.id === props.initialId)
    selected.value = byId || props.locations?.[0] || null
  },
  { immediate: true }
)

const mapEmbedSrc = computed(() => {
  if (!selected.value) return ''
  const q = selected.value.lat && selected.value.lng
    ? `${selected.value.lat},${selected.value.lng}`
    : `${selected.value.name} ${selected.value.address}`
  return `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`
})

function select(loc) {
  selected.value = loc
}

function telHref(raw) {
  const num = String(raw).replace(/[^\d+]/g, '')
  return `tel:${num}`
}

function directionsUrl(loc) {
  const q = loc.lat && loc.lng ? `${loc.lat},${loc.lng}` : `${loc.name} ${loc.address}`
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`
}

async function copyAddress(text) {
  try {
    await navigator.clipboard.writeText(text)
    toast('Address copied')
  } catch {
    // fallback
    window.prompt('Copy address:', text)
  }
}

function toast(msg) {
  const el = document.createElement('div')
  el.className = 'lm__toast'
  el.textContent = msg
  document.body.appendChild(el)
  requestAnimationFrame(() => el.classList.add('show'))
  setTimeout(() => {
    el.classList.remove('show')
    setTimeout(() => el.remove(), 200)
  }, 1500)
}
</script>

<style scoped>
/* Variables */
.lm {
  --lm-bg: #0b0f14;
  --lm-card: #11161d;
  --lm-border: #1f2630;
  --lm-text: #e7edf5;
  --lm-muted: #9fb0c3;
  --lm-accent: #2fd180; /* tweak to your brand */
  --lm-accent-10: rgba(47, 209, 128, 0.1);
  --lm-shadow: 0 8px 24px rgba(0,0,0,.25);
  color: var(--lm-text);
  background: linear-gradient(180deg, #0b0f14 0%, #0e131a 100%);
  padding: 48px 0;
}

.lm__container {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 16px;
}

.lm__header h2 {
  font-size: 32px;
  line-height: 1.2;
  margin: 0 0 6px;
  letter-spacing: .3px;
}
.lm__header p {
  margin: 0 0 24px;
  color: var(--lm-muted);
}

.lm__layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 992px) {
  .lm__layout {
    grid-template-columns: 1.15fr .85fr;
  }
  .lm__map {
    position: sticky;
    top: 88px;
    height: calc(100vh - 140px);
    min-height: 420px;
  }
}

.lm__map {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--lm-border);
  background: #0c1117;
  box-shadow: var(--lm-shadow);
}
.lm__mapFrame {
  width: 100%;
  height: 100%;
  min-height: 320px;
  border: 0;
}

.lm__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media (min-width: 600px) {
  .lm__grid {
    grid-template-columns: 1fr 1fr;
  }
}

.lm__card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--lm-border);
  background: linear-gradient(180deg, #10161e, #0f141b);
  transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
}
.lm__card:hover {
  transform: translateY(-2px);
  border-color: rgba(255,255,255,.08);
  box-shadow: 0 8px 32px rgba(0,0,0,.35);
}
.lm__card.is-active {
  border-color: var(--lm-accent);
  box-shadow: 0 8px 32px rgba(47, 209, 128, .25);
}

.lm__image {
  height: 160px;
  background-size: cover;
  background-position: center;
  position: relative;
}
.lm__image::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,.45));
}
.lm__badge {
  position: absolute;
  top: 10px; left: 10px;
  background: var(--lm-accent-10);
  color: var(--lm-accent);
  border: 1px solid var(--lm-accent);
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 999px;
  backdrop-filter: blur(4px);
}

.lm__body {
  padding: 14px 14px 12px;
}
.lm__title {
  font-size: 18px;
  margin: 0 0 6px;
}
.lm__address {
  color: var(--lm-muted);
  font-size: 14px;
  line-height: 1.45;
  margin: 0 0 10px;
  min-height: 40px;
}

.lm__contact {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
}

.lm__chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  font-size: 13px;
  color: var(--lm-text);
  background: #0f141b;
  border: 1px solid var(--lm-border);
  border-radius: 10px;
  text-decoration: none;
}
.lm__chip--muted {
  opacity: .65;
  cursor: default;
}

.lm__icon {
  width: 16px; height: 16px;
  fill: currentColor;
  opacity: .9;
}

.lm__links {
  display: flex;
  gap: 14px;
}
.lm__link {
  background: none;
  border: 0;
  padding: 0;
  color: var(--lm-accent);
  font-weight: 600;
  font-size: 13px;
  text-decoration: none;
  cursor: pointer;
}
.lm__link:hover { text-decoration: underline; }

/* Tiny toast */
.lm__toast {
  position: fixed;
  left: 50%;
  bottom: 18px;
  transform: translate(-50%, 20px);
  background: #0f141b;
  color: var(--lm-text);
  border: 1px solid var(--lm-border);
  padding: 10px 14px;
  border-radius: 10px;
  opacity: 0;
  transition: all .2s ease;
  z-index: 9999;
}
.lm__toast.show {
  transform: translate(-50%, 0);
  opacity: 1;
}
</style>