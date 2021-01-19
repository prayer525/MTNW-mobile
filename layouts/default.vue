<template>
  <div class="wrapper">
    <ADheader />
    <Header :class="{fixed : isFixed}" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  data(){
    return ({
      isFixed : false,
      isHeaderBannerShow : true
    })
  },
  methods: {
    handleScroll () {
      var h = this.isHeaderBannerShow ? 50 : 0
      this.isFixed = window.scrollY >= h ? true : false;
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
.wrapper {
  display:flex;
  flex-direction:column;
}
</style>
