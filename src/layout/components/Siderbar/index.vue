<template>
  <div 
    :class="{'has-logo':showLogo}" 
    :style="{backgroundColor: setting.sideTheme === 'theme-dark' ? variables.menuBackgroud : variables.menuLightBackground}"
    v-if="showLogo" :collapse="isCollapse"  
  >
  <logo v-if="showLogo" :class="settings.sideTheme" wrap-class="scrollbar-wrapper"/>
    <el-scrollbar :class="settings.sideTheme" wrap-class="scrollbar-wrapper">
        <el-menu
            :default-active="activeMenu"
            :collapse="isCollapse"
            :background-color="settings.sideTheme === 'theme-dark' ? variables.menuBackground : variables.menuLightBackground"
            :text-color="settings.sideTheme === 'theme-dark' ? variables.menuColor : variables.menuLightColor"
            :unique-opened="true"
            :active-text-color="settings.theme"
            :collapse-transition="false"
            mode="vertical"
        >
            <sidebar-item
                v-for="(route, index) in sidebarRouters"
                :key="route.path  + index"
                :item="route"
                :base-path="route.path"
            />
        </el-menu>
    </el-scrollbar>  
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Logo from "./Logo"
import SidebarItem from '@/layout/components/Siderbar/SidebarItem'
import variables from "@/assets/styles/variables.scss"

export default {
  components: {
    SidebarItem,
    Logo
  },
  computed: {
    ...mapState(["settings"]),
    ...mapGetters(["sidebarRoutes", "siderbar"]),
    activeMenu() {
      const route = this.$route;
      const { meta, path } =  route;
      if(meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    }
  }
  
}
</script>