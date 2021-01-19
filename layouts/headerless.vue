<template>
  <div class="wrapper">
    <Header class="headerless" :class="{fixed : isFixed}" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
    
}
</script>

<style>
.wrapper {
  display:flex;
  flex-direction:column;
}
</style>
