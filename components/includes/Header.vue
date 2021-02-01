<template>
	<div class="header-wrap">
		<div class="header">
			<NuxtLink to="/login" class="btn-login">Login</NuxtLink>
			<NuxtLink to="/"><img src="~/assets/mtnw_logo.png" class="mtnw-logo" alt="MTNW Logo"></NuxtLink>
			<button type="button" class="p-link layout-menu-button" @click="checkFlag">
				<span class="pi pi-bars"></span>
			</button>
		</div>

		<!-- static props send to GnbMenu component -->
		<GnbMenu customData='{"a":"b"}' />
		
		<!-- dynamic props send to Sitemap component -->
		<Sitemap v-bind:showMenu="showMenu" />

	</div>
</template>

<script>
export default {
	props: ['layout'],
	data() {
		return {
			showMenu : this.$store.state.states.sitemapFlag
		}
	},
	computed: {
	},
	methods: {
		checkFlag(){
			// Sitemap show & hide 상태 변경
			this.showMenu = !this.showMenu;

			/*
				변경된 상태를 Global State에 저장
				Global State에 저장 후 다른 Components에서 변경된 Status를 사용 가능.
				- 부모 <-> 자식 컴포넌트 간에 object 타입이 아닌경우 props로 넘기는게 효과적일 수도 있음.
				  (showMenu는 현재 props로 넘기고 있다.)
				- Page간 데이터 공유는 Veux $store를 사용하는게 효과적
			*/
			this.$store.commit('states/toggle', this.showMenu);
		}
	},
	
}
</script>

<style lang="scss">

</style>