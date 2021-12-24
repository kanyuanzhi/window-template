<template>
  <tr>
    <td :rowspan=rowspan v-if="rowspan">
      <div class="custom-cell">{{ section }}</div>
    </td>
    <td>
      <div class="custom-cell">
        {{
          is_general ? formatLabel(general[input_output][para]) : formatLabel(design[input_output][para])
        }}
      </div>
    </td>
    <td>
      <div class="custom-cell">
        {{ is_general ? general[input_output][para].unit : design[input_output][para].unit }}
      </div>
    </td>
    <td>
      <div class="custom-cell" v-if="value==='limit'">
        {{ is_general ? general[input_output][para].limit : design[input_output][para].value }}
      </div>
      <div class="custom-cell" v-else-if="value==='check_result'">
        {{ is_general ? general[input_output][para].check_result : design[input_output][para].check_result }}
      </div>
      <div class="custom-cell" v-else>
        {{ is_general ? general[input_output][para].value : design[input_output][para].value }}
      </div>
    </td>
    <td>
      <div class="custom-cell" v-if="value==='limit'">
        {{ is_general ? general[input_output][para].limit : running[input_output][para].value }}
      </div>
      <div class="custom-cell" v-else-if="value==='check_result'">
        {{ is_general ? general[input_output][para].check_result : running[input_output][para].check_result }}
      </div>
      <div class="custom-cell" v-else>
        {{ is_general ? general[input_output][para].value : running[input_output][para].value }}
      </div>
    </td>
    <td>
      <div class="custom-cell" v-if="value==='limit'">
        {{ is_general ? general[input_output][para].limit : abnormal[input_output][para].value }}
      </div>
      <div class="custom-cell" v-else-if="value==='check_result'">
        {{ is_general ? general[input_output][para].check_result : abnormal[input_output][para].check_result }}
      </div>
      <div class="custom-cell" v-else>
        {{ is_general ? general[input_output][para].value : abnormal[input_output][para].value }}
      </div>
    </td>
    <td>
      <div class="custom-cell" v-if="value==='limit'">
        {{ is_general ? general[input_output][para].limit : emergency[input_output][para].value }}
      </div>
      <div class="custom-cell" v-else-if="value==='check_result'">
        {{ is_general ? general[input_output][para].check_result : emergency[input_output][para].check_result }}
      </div>
      <div class="custom-cell" v-else>
        {{ is_general ? general[input_output][para].value : emergency[input_output][para].value }}
      </div>
    </td>
    <td>
      <div class="custom-cell" v-if="value==='limit'">
        {{ is_general ? general[input_output][para].limit : accident[input_output][para].value }}
      </div>
      <div class="custom-cell" v-else-if="value==='check_result'">
        {{ is_general ? general[input_output][para].check_result : accident[input_output][para].check_result }}
      </div>
      <div class="custom-cell" v-else>
        {{ is_general ? general[input_output][para].value : accident[input_output][para].value }}
      </div>
    </td>
    <td>
      <div class="custom-cell" v-if="value==='limit'">
        {{ is_general ? general[input_output][para].limit : trial[input_output][para].value }}
      </div>
      <div class="custom-cell" v-else-if="value==='check_result'">
        {{ is_general ? general[input_output][para].check_result : trial[input_output][para].check_result }}
      </div>
      <div class="custom-cell" v-else>
        {{ is_general ? general[input_output][para].value : trial[input_output][para].value }}
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "CustomTr",
  props: ['section', 'input_output', 'para', "is_general", 'rowspan', 'value'],
  data() {
    return {
      general: this.$store.getters.flange_rcc_m_general,
      design: this.$store.getters.flange_rcc_m_design,
      running: this.$store.getters.flange_rcc_m_running,
      abnormal: this.$store.getters.flange_rcc_m_abnormal,
      emergency: this.$store.getters.flange_rcc_m_emergency,
      accident: this.$store.getters.flange_rcc_m_accident,
      trial: this.$store.getters.flange_rcc_m_trial,
    }
  },
  methods: {
    formatLabel(para) {
      if (para.format_label !== undefined) {
        return para.format_label
      }
      return para.meaning.concat(' ', para.label)
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
