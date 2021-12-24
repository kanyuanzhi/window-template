<template>
  <div :class="classObj" class="app-wrapper">
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        <navbar/>
      </div>
      <app-main/>
    </div>
  </div>
</template>

<script>
import {Navbar, Sidebar, AppMain} from './components'
import ResizeMixin from './mixin/ResizeHandler'
import localStorage from "localStorage";

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  mixins: [ResizeMixin],
  data() {
    return {
      current_case_index: this.$store.getters.current_case_index
    }
  },
  created() {
    this.init_current_case_index()
    this.init_parameter_page("flange_rcc_m_general")
    this.init_parameter_page("flange_rcc_m_design")
    this.init_parameter_page("flange_rcc_m_running")
    this.init_parameter_page("flange_rcc_m_abnormal")
    this.init_parameter_page("flange_rcc_m_emergency")
    this.init_parameter_page("flange_rcc_m_accident")
    this.init_parameter_page("flange_rcc_m_trial")

    this.init_parameter_page("flange_gb150_wide_plate")
    this.init_parameter_page("flange_gb150_wide_hubbed")
    this.init_parameter_page("flange_gb150_narrow")

    this.init_parameter_page("valve_headstock_edf_sluice_c")
    this.init_parameter_page("valve_headstock_edf_sluice_v")
    this.init_parameter_page("valve_headstock_edf_sluice_w")
    this.init_parameter_page("valve_headstock_edf_cutoff_s")
    this.init_parameter_page("valve_headstock_areva_sluice")
    this.init_parameter_page("valve_headstock_areva_cutoff")
    this.init_parameter_page("valve_headstock_enchiridion_butterfly")
    this.init_parameter_page("valve_headstock_enchiridion_ball")

    this.init_parameter_page("valve_packing_edf")
    this.init_parameter_page("valve_packing_areva")
    this.init_parameter_page("valve_packing_enchiridion")
    this.init_parameter_page("valve_packing_epri")

    this.init_parameter_page("pipe_nuclear")
    this.init_parameter_page("pipe_conventional")

  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', {withoutAnimation: false})
    },
    init_current_case_index() {
      // 初始化parameter_current_case_index（当前各参数所选择算例序号）
      const local_current_case_index = localStorage.getItem("current_case_index")
      if (local_current_case_index !== null) {
        // 如果本地有current_case_index数据，则将store中的数据更新为本地存储的数据
        this.$store.commit("parameter_current_case/update", JSON.parse(local_current_case_index))
      } else {
        // 如果本地无current_case_index数据，则将store中的数据存入本地
        localStorage.setItem("current_case_index", JSON.stringify(this.$store.getters.current_case_index))
      }
    },
    init_parameter_page(parameter) {
      // 按照store中current_case_index的数据初始化各页面的参数（对应算例序号的算例）
      let local_cases = localStorage.getItem(parameter)
      if (local_cases !== null) {
        const local_cases_obj = JSON.parse(local_cases)
        if (parameter.includes("rcc_m")) {
          this.$store.commit("parameter_flange_rcc_m/update_" + parameter, local_cases_obj[this.$store.getters.current_case_index[parameter]])
        }else {
          this.$store.commit("parameter_" + parameter + "/update", local_cases_obj[this.$store.getters.current_case_index[parameter]])
        }
      } else {
        local_cases = {}
        let store_case = this.$store.getters[parameter].input
        for (let i = 0; i <= 5; i++) {
          local_cases['case' + i] = store_case
        }
        let original_output = this.$store.getters[parameter].output
        localStorage.setItem(parameter, JSON.stringify(local_cases))
        localStorage.setItem(parameter+"_output", JSON.stringify(original_output))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
