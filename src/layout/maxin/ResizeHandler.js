import store from '@/store'

const { body } = document
const WIDTH = 992

export default {
  watch: {
    $router(route) {
      if(this.device === 'mobile' && this.sidebar.opened) {
        store.dispatch('app/closeSideBar', { withoutAnimation: false })
      }
    }
  },

  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },

  beforeDestory() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },

  mounted() {
    const isMobile = this.$_isMobile()
    if(isMobile){
      store.dispatch('app/toggleDevice', 'mobile')
      store.dispatch('app/closeSideBar', { withoutAnimation: true })
    }
  },

  methods: {
    $_isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width -1 < WIDTH
    },

    $_resizeHandler(){
      if(!document.hidden){
        const isMobile = this.$_isMobile()
        store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop')
        if(isMobile){
          store.dispatch('app/closeSideBar', {withoutAnimation: true})
        }
      }
    }

  }

}