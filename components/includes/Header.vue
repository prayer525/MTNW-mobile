<template>
	<div class="header-wrap">
		<div class="header">
			<Button type="button" class="p-mr-2 p-mb-2 btn-login">로그인</Button>
			<img src="~/assets/mtnw_logo.png" class="mtnw-logo" alt="MTNW Logo">
			<button type="button" class="p-link layout-menu-button" @click="fnToggleMenu">
				<span class="pi pi-bars"></span>
			</button>
		</div>

		<GnbMenu customData='{"a":"b"}' />

		<Sitemap />
	</div>
</template>

<script>
import $ from 'jquery';

export default {
	props: ['layout'],
	data() {
		return {
			showMenu : false
		}
	},
	computed: {
		fnCheckShowMenu() {
			if(this.showMenu){
				return 'show';
			}
		}
	},
	methods: {
		fnToggleMenu(){
			this.showMenu = !this.showMenu

			if(this.showMenu){
				$('body').addClass('block-scroll');
			}else{
				$('body').removeClass('block-scroll');
			}
		}
	}
}
</script>

<style lang="scss">

</style>