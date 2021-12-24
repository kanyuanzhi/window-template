<template>
  <tr>
    <td v-for="num in item">
      <div class="custom-cell">{{ num }}</div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "CustomTr",
  props: ['item'],
  data() {
    return {

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
