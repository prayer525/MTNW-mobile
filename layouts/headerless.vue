<template>
	<div class="wrapper">
		<Header class="headerless" :class="{fixed : isFixed}" />
		<Nuxt />
		<Footer />
	</div>
</template>

<script>
export default {
	data(){
		return ({
			isFixed : false
		})
	},
	beforeMount () {
		window.addEventListener('scroll', this.handleScroll);
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll () {
			this.isFixed = window.scrollY >= 0 ? true : false;
		}
	}
}
</script>

<style>
.wrapper {
	display:flex;
	flex-direction:column;
}
</style>
