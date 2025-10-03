<template>
  <li class="org-node">
    <div class="org-content">
      <!-- simple default rendering; you may want slots or custom templates -->
      <div class="org-label">{{ node.label }}</div>
    </div>
    <ul v-if="hasChildren" class="org-children">
      <OrgNode 
        v-for="(child, cidx) in node.children" 
        :key="child.id ?? cidx" 
        :node="child" 
      />
    </ul>
  </li>
</template>

<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';
// import OrgNode from 'OrgNode.vue';  // recursive import

const props = defineProps({
  node: {
    type: Object,
    required: true
  }
});

const hasChildren = computed(() => {
  return Array.isArray(props.node.children) && props.node.children.length > 0;
});
</script>

<style scoped>
.org-content {
  padding: 0.5rem;
  border: 1px solid #999;
  display: inline-block;
}

.org-children {
  margin-top: 0.5rem;
  padding-left: 1rem;
}
</style>
