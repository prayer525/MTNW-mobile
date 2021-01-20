<template>
    <div class="ad-header-wrap" :class="fnCheckShow">
        <span>(Header) 이벤트 배너영역</span>
        <Button icon="pi pi-times" class="btn-close" @click.native="fnCloseAd" />
    </div>
</template>

<script>
export default {
    computed: {
        fnCheckShow(){
            if(!this.$parent.isHeaderBannerShow){
                return 'hide';
            }
        }
    },
    methods: {
        fnCloseAd(){
            this.$parent.isHeaderBannerShow = false;

            return false;
        }
    }
}
</script>

<style lang="scss">

</style>