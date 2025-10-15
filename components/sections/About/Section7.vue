<!-- <template>
  <div class="wrap">
    <div ref="el" class="orgchart-container" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as d3 from 'd3'
import { OrgChart } from 'd3-org-chart'

type Id = string | number
interface OrgNode {
  id: Id
  parentId?: Id | null
  name: string
  title?: string
  avatar?: string
}

const el = ref<HTMLElement | null>(null)
let chart: any

// Sample data (replace with yours)
const data: OrgNode[] = [
  { id: 1, name: 'Alex Johnson', title: 'Chief Executive Officer' },
  { id: 2, parentId: 1, name: 'Taylor Reed', title: 'VP, Marketing' },
  { id: 3, parentId: 1, name: 'Jordan Kim', title: 'VP, Operations' },
  { id: 4, parentId: 1, name: 'Morgan Blake', title: 'VP, Finance' },
  { id: 5, parentId: 2, name: 'Riley Chen', title: 'Director, Brand' },
  { id: 6, parentId: 2, name: 'Avery Shah', title: 'Director, Growth' },
  { id: 7, parentId: 3, name: 'Casey Lin', title: 'Director, Supply Chain' },
  { id: 8, parentId: 4, name: 'Jamie Park', title: 'Controller' }
]

onMounted(() => {
  if (!el.value) return

  chart = new OrgChart()
    .container(d3.select(el.value))
    .data(data as any)
    .nodeWidth(() => 260)
    .nodeHeight(() => 110)
    .childrenMargin(() => 40)
    .compact(false)
    .initialZoom(0.9)
    .nodeContent((d: any) => {
      const p = d.data as OrgNode
      const avatar = p.avatar || 'https://placehold.co/96x96?text=%20'
      return `
        <div class="org-node">
          <div class="avatar" style="background-image:url('${avatar}')"></div>
          <div class="meta">
            <div class="name">${p.name || ''}</div>
            <div class="title">${p.title || ''}</div>
          </div>
        </div>
      `
    })
    .render()

  // Ensure it fits the viewport after first layout
  setTimeout(() => chart.fit?.(), 0)
})

onBeforeUnmount(() => {
  if (chart?.destroy) chart.destroy()
})
</script>

<style scoped>
.wrap { width: 100%; height: 100%; }
.orgchart-container {
  width: 100%;
  height: calc(100vh - 2rem);
  background: #f7f8fb;
  border: 1px solid #eef0f4;
  border-radius: 8px;
  overflow: hidden;
}
.org-node {
  width: 260px;
  height: 110px;
  box-sizing: border-box;
  padding: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0,0,0,.06);
  border-left: 4px solid #4ade80;
}
.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-color: #e5e7eb;
}
.name { font-weight: 600; line-height: 1.2; }
.title { color: #6b7280; font-size: 12px; }
.meta { display: flex; flex-direction: column; gap: 4px; }
</style> -->



<template>
  <div class="orgchart-wrapper" :style="wrapperStyle">
    <div class="sec-title text-center">
      <span class="sub-title">{{ $t('orgchart.subtitle') }}</span>
      <h2>{{ $t('orgchart.title') }}</h2>
    </div>

    <div ref="el" class="orgchart-container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue'

const props = defineProps({
  // Agar props se nodes pass na karo, to niche M3 data use hoga
  nodes: { type: Array, default: () => [] },
  height: { type: [Number, String], default: '75vh' },
  // 'vertical' (default, pehle jaisa) | 'horizontal'
  orientation: { type: String, default: 'vertical' },
  // movement OFF (static)
  interactive: { type: Boolean, default: false },
  linkColor: { type: String, default: '#cbd5e1' },
  linkWidth: { type: Number, default: 1.25 }
})

const wrapperStyle = computed(() => ({
  height: typeof props.height === 'number' ? `${props.height}px` : props.height
}))

const el = ref(null)
let chart = null
let ro = null
let d3 = null

// ============== M3LOGI DATA (design same, sirf data replace) ==============
const m3Nodes = [
  // Exec
  { id: 'CEO', name: 'CEO' },
  { id: 'CFO', parentId: 'CEO', name: 'CFO' },
  { id: 'COO', parentId: 'CEO', name: 'COO' },

  // Divisions under CEO
  { id: 'Domestic',       parentId: 'CEO', name: 'Domestic Division' },
  { id: 'OverseasMarine', parentId: 'CEO', name: 'Overseas Division - Marine Cargo' },
  { id: 'OverseasAir',    parentId: 'CEO', name: 'Overseas Division - Air Cargo' },
  { id: 'Transportation', parentId: 'CEO', name: 'Transportation Division' },
  { id: 'Automotive',     parentId: 'CEO', name: 'Automotive Mngt. Division' },
  { id: 'GeneralAffairs', parentId: 'CEO', name: 'General Affairs Division' },
  { id: 'InfoSystem',     parentId: 'CEO', name: 'Information System Division' },

  // Domestic Division
  { id: 'Domestic-Advertising', parentId: 'Domestic', name: 'Advertising Planning' },
  { id: 'Domestic-Marketing',   parentId: 'Domestic', name: 'Marketing' },
  { id: 'Domestic-Product',     parentId: 'Domestic', name: 'Domestic Product Planning' },

  // Overseas Division - Marine Cargo
  { id: 'Marine-Export',              parentId: 'OverseasMarine', name: 'Export section' },
  { id: 'Marine-Import',              parentId: 'OverseasMarine', name: 'Import section' },
  { id: 'Marine-OverseasProductPlan', parentId: 'OverseasMarine', name: 'Overseas Product Planning' },
  { id: 'Marine-Custom',              parentId: 'OverseasMarine', name: 'Custom Section' },

  // Overseas Division - Air Cargo
  { id: 'Air-Export',                 parentId: 'OverseasAir', name: 'Export section' },
  { id: 'Air-Import',                 parentId: 'OverseasAir', name: 'Import section' },
  { id: 'Air-OverseasProductPlan',    parentId: 'OverseasAir', name: 'Overseas Product Planning' },
  { id: 'Air-Custom',                 parentId: 'OverseasAir', name: 'Custom Section' },

  // Transportation Division
  { id: 'Transportation-Shipping', parentId: 'Transportation', name: 'Shipping Administration' },
  { id: 'Transportation-Land',     parentId: 'Transportation', name: 'Land Transport Administration' },

  // Automotive Mngt. Division
  { id: 'Automotive-Inspection', parentId: 'Automotive', name: 'Inspection Management' },
  { id: 'Automotive-Inventory',  parentId: 'Automotive', name: 'Inventory Management' },

  // General Affairs Division
  { id: 'GA-Accounting', parentId: 'GeneralAffairs', name: 'Accounting' },
  { id: 'GA-HRM',        parentId: 'GeneralAffairs', name: 'HRM' },
  { id: 'GA-Legal',      parentId: 'GeneralAffairs', name: 'Legal Affairs' },

  // Information System Division
  { id: 'IS-Software',     parentId: 'InfoSystem', name: 'Software Section' },
  { id: 'IS-Network',      parentId: 'InfoSystem', name: 'Network Section' },
  { id: 'IS-Information',  parentId: 'InfoSystem', name: 'Information Management' },
]
// ==========================================================================

const getData = () => (props.nodes && props.nodes.length ? props.nodes : m3Nodes)
const getLayout = () => (props.orientation === 'horizontal' ? 'left' : 'top')

onMounted(async () => {
  const { OrgChart } = await import('d3-org-chart')
  d3 = await import('d3')

  // Zoom off for static feel
  const zoomDisabled = d3.zoom().filter(() => false)
  const zoomEnabled = d3.zoom().scaleExtent([0.6, 2])

  chart = new OrgChart()
    .container(el.value)
    .data(getData())
    .layout(getLayout())
    .initialZoom(1)
    .duration(props.interactive ? 350 : 0)
    .zoomBehavior(props.interactive ? zoomEnabled : zoomDisabled)
    .nodeWidth(() => 320)
    .nodeHeight(() => 130)
    .childrenMargin(() => 60)
    .neighbourMargin(() => 40)
    .compact(false)
    .linkUpdate(function () {
      d3.select(this).attr('stroke', props.linkColor).attr('stroke-width', props.linkWidth).attr('fill', 'none')
    })
    .nodeContent(d => {
      const { name, title, image } = d.data
      const w = d.width, h = d.height
      // SAME CARD DESIGN (white card + green top bar + avatar)
      return `
        <div style="width:${w}px;height:${h}px;background:#fff;border-radius:12px;
                    box-shadow:0 4px 24px rgba(0,0,0,0.08);overflow:hidden;border:1px solid #e6e8eb;">
          <div style="height:6px;background:#3E90E8;"></div>
          <div style="display:flex;gap:12px;align-items:center;padding:14px;">
            <img src="${'https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg' || 'https://i.pravatar.cc/100'}"
                 style="width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid #eaeaea;" />
            <div style="display:flex;flex-direction:column;">
              <div style="font-weight:600;color:#0f172a;font-size:15px;line-height:1.2">${name || ''}</div>
              <div style="color:#64748b;font-size:12px;line-height:1.3;margin-top:4px">${title || ''}</div>
            </div>
          </div>
        </div>`
    })
    .onNodeClick(d => {
      d.data._expanded = !d.data._expanded
      chart.updateNodesState()
    })
    .render()

  // No fit() — static position
  if ('ResizeObserver' in window) {
    ro = new ResizeObserver(() => {})
    ro.observe(el.value)
  }
})

onBeforeUnmount(() => {
  ro?.disconnect?.()
  chart?.destroy?.()
})

watch(
  () => [props.nodes, props.orientation, props.interactive, props.linkColor, props.linkWidth],
  () => {
    if (!chart) return
    const zoom = props.interactive ? d3.zoom().scaleExtent([0.6, 2]) : d3.zoom().filter(() => false)
    chart
      .data(getData())
      .layout(getLayout())
      .duration(props.interactive ? 350 : 0)
      .zoomBehavior(zoom)
      .render()
  },
  { deep: true }
)
</script>

<style scoped>
.orgchart-wrapper {
  width: 100%;
  background: #f3f6fb;
  border-radius: 16px;
  padding: 12px;
  box-sizing: border-box;
  overflow: auto;        /* scroll se dekho; drag/zoom off */
}

.orgchart-container {
  width: 100%;
  height: 100%;
  cursor: default;
  user-select: none;
  -webkit-user-drag: none;
  touch-action: pan-x pan-y; /* touch drag = normal scroll only */
}
</style>