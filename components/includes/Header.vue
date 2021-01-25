<template>
	<div class="header-wrap">
		<div class="header">
			<NuxtLink to="/login" class="btn-login">Login</NuxtLink>
			<NuxtLink to="/"><img src="~/assets/mtnw_logo.png" class="mtnw-logo" alt="MTNW Logo"></NuxtLink>
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