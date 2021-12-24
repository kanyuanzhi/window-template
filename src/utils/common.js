import router from '@/router'
import store from "@/store"
import localStorage from "localStorage";
import {Message} from "element-ui";

export function getStyle(obj, attr) {
  if (obj.currentStyle) {
    return parseInt(obj.currentStyle[attr])
  } else {
    return parseInt(document.defaultView.getComputedStyle(obj, null)[attr])
  }
}

export function generate_report(router_name, output) {
  let routeUrl = router.resolve({
    name: router_name,
    query: {output: JSON.stringify(output)}
  })
  window.open(routeUrl.href, '_blank')
}

export function clear_parameters(input, output) {
  for (let para in input) {
    input[para] = ""
  }
  for (let para in output) {
    output[para] = "--"
  }
}

export function formatLabel(para) {
  if (para.format_label !== undefined) {
    return para.format_label
  }
  let str = para.meaning.concat(para.label)
  if (para.unit === '') {
    return str
  } else {
    return str.concat('(', para.unit, ')')
  }
}

export function search(array, value) {
  // 向下取
  if (value < array[0]) {
    return array[0]
  }
  for (let i = 1; i < array.length; i++) {
    if (value < array[i]) {
      return array[i - 1]
    }
  }
  return array[array.length - 1]
}

export function search_upper(array, value) {
  // 向上取
  if (value <= array[0]) {
    return array[0]
  }
  for (let i = 1; i < array.length; i++) {
    if (value <= array[i]) {
      return array[i]
    }
  }
  return array[array.length - 1]
}

export function saveCase(parameter) {
  const current_case_index = store.getters.current_case_index
  const index = current_case_index[parameter]
  const local_cases = localStorage.getItem(parameter)
  if (local_cases !== null) {
    const local_cases_obj = JSON.parse(local_cases)
    local_cases_obj[index] = store.getters[parameter].input
    localStorage.setItem(parameter, JSON.stringify(local_cases_obj))
  }
  Message.success("保存算例" + index + "成功！")
}

export function printExcel(id) {
  // 空页面
  let printStr = "<html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'></head>";
  // 定义element-ui table组件的样式
  const tabStyle = `<style>
                table{width:100%;display:table-cell!important;box-sizing:border-box;}
                .el-table__header,.el-table__body,.el-table__footer{width:100%!important;border-collapse: collapse;text-align:center;}
                table,table tr th, table tr td { border:1px solid #ddd;color:#606266;word-wrap:break-word}
                table tr th,table tr td{padding:4mm 0mm;word-wrap:break-word }
                .el-table__body, tr td .cell{width:100%!important}
                .el-table th.gutter{display: none;}
                .el-table colgroup.gutter{display: none;}
                </style><body>`;
  let content = "";
  // 获取名为传入id的 dom元素内的内容
  let str = document.getElementById(id).innerHTML;
  // 拼接空页面+style样式+dom内容
  content = content + str;
  printStr = printStr + tabStyle + content + "</body></html>";
  // 打开新页面
  let pwin = window.open("_blank");
  // 将内容赋值到新页面
  pwin.document.write(printStr);
  pwin.document.close();
  // 聚焦-不加focuse，在某些情况下，打印页面会有问题。
  pwin.focus();
  // 使用setTimeout，等页面dom元素渲染完成后再打印。
  setTimeout(() => {
    pwin.print(); // 打印功能。 例如 window.print() 直接打印当前整个页面。
    pwin.close(); // 关闭 打印创建的当前页面
  }, 500);

}
