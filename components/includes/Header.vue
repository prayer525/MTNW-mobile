<template>
    <div class="header-wrap">
        <div class="header">
            <Button type="button" class="p-mr-2 p-mb-2 btn-login">로그인</Button>
            <img src="~/assets/mtnw_logo.png" class="mtnw-logo" alt="MTNW Logo">
            <button type="button" class="p-link layout-menu-button" @click="showMenu = true">
                <span class="pi pi-bars"></span>
            </button>
        </div>

        <GnbMenu customData='{"a":"b"}' />

        <div class="menu-area" :class="fnCheckShowMenu">
            <div class="back-panel" @click="showMenu = false"><!-- opacity overlay --></div>
            <div class="menu-wrap">content</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showMenu : false
        }
    },
    computed: {
        fnCheckShowMenu() {
            console.log(this)
            if(this.showMenu){
                return 'show';
            }
        }
    },
    methods: {
    }
}
</script>

<style lang="scss">

</style>