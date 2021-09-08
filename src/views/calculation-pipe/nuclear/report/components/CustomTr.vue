<template>
  <tr>
    <td :rowspan=rowspan v-if="rowspan">
      <div class="custom-cell">{{ section }}</div>
    </td>
    <td>
      <div class="custom-cell">
        {{ formatLabel(general[input_output][para]) }}
      </div>
    </td>
    <td>
      <div class="custom-cell">
        {{ general[input_output][para].unit }}
      </div>
    </td>
    <td>
      <div class="custom-cell">
        {{ general[input_output][para].value }}
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "CustomTr",
  props: ['section', 'input_output', 'para', 'rowspan'],
  data() {
    return {
      general: this.$store.getters.pipe_nuclear,
    }
  },
  methods: {
    formatLabel(para) {
      return [para.meaning, para.label].join(' ')
    }
  }
}
</script>

<style scoped>
td {
  border: 1px solid #5a5e66;
  text-align: center;
}

.custom-cell {
  line-height: normal;
  padding: 8px 4px;
}
</style>
