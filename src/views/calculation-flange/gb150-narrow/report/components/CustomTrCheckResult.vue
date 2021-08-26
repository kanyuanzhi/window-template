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
        {{ general[input_output][para].check_result }}
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "CustomTrCheckResult",
  props: ['section', 'input_output', 'para', 'rowspan'],
  data() {
    return {
      general: this.$store.getters.flange_gb150_narrow_general,
    }
  },
  methods: {
    formatLabel(para) {
      return [para.meaning, para.label, '校核结果'].join(' ')
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
