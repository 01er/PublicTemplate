<template>
  <div>
    <div id="setting_box" class="delivery-box" :class="{ opensetting:layoutsidebar }">
      <div class="row">
        <div class="col-sm-6 top-title">详情</div>
        <div class="col-sm-6"><b-icon icon="x" class="close" @click="closelayoutSidebar"></b-icon></div>
      </div>
    </div>
    <!-- theme setting -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      layoutsidebar: false,
      activeItem: 'home',
      layoutType: 'ltr',
      modalShow: false,
    }
  },
  computed: {
    ...mapState({
      layout: state => state.layout.layout
    })
  },
  created() {
    this.tools.stopMove()
    this.$store.dispatch('layout/set')
    if (process.client) {
      this.activeColor = localStorage.getItem('color')
    }
  },
  methods: {
    openlayoutSidebar() {
      this.layoutsidebar = true
    },
    closelayoutSidebar() {
      this.layoutsidebar = false
      this.tools.Move()
    },
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    opensettingcontent: function (menuItem) {
      if (this.activeItem === menuItem) {
        this.activeItem = ''
      } else {
        this.activeItem = menuItem
      }
    },
    customizeLayoutType(val) {
      this.$store.dispatch('layout/setLayoutType', val)
      this.layoutType = val
    },
    selectedColor: function (menuItem) {
      return this.activeColor === menuItem
    },
    customizeThemeColor(val) {
      this.$store.dispatch('layout/setColorScheme', event.target.value)
        document.documentElement.style.setProperty('--theme-deafult', event.target.value);
    },
    customizeLayoutVersion() {
      this.$store.dispatch('layout/setLayoutVersion')
    }
  }
}
</script>
