<template>
  <div class="organization-chart">
    <ul class="org-root">
      <OrgNode 
        v-for="(node, idx) in model" 
        :key="node.id ?? idx" 
        :node="node" 
      />
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import OrgNode from './OrgNode.vue';

const props = defineProps({
  model: {
    type: Array,
    required: true
  }
});


const classes = {
    root: 'p-organizationchart p-component',
    table: 'p-organizationchart-table',
    node: ({ instance }) => ['p-organizationchart-node', { 'p-organizationchart-node-selectable': instance.selectable, 'p-organizationchart-node-selected': instance.selected }],
    nodeToggleButton: ({ instance }) => ['p-organizationchart-node-toggle-button', { 'p-disabled': !instance.selectable }],
    nodeToggleButtonIcon: 'p-organizationchart-node-toggle-button-icon',
    connectors: 'p-organizationchart-connectors',
    connectorDown: 'p-organizationchart-connector-down',
    connectorLeft: ({ index }) => ['p-organizationchart-connector-left', { 'p-organizationchart-connector-top': !(index === 0) }],
    connectorRight: ({ props, index }) => ['p-organizationchart-connector-right', { 'p-organizationchart-connector-top': !(index === props.node.children.length - 1) }],
    nodeChildren: 'p-organizationchart-node-children'
};


</script>

<style scoped>
.organization-chart {
  /* basic container styling */
}

.org-root {
  list-style: none;
  padding-left: 0;
}

.org-node {
  margin: 0.5rem 0;
  text-align: center;
}

.org-children {
  list-style: none;
  padding-left: 2rem;
  border-left: 1px solid #ccc;
  margin-top: 0.5rem;
}
</style>
