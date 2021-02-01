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
	head() {
		return {
			bodyAttrs: {
				class: this.blockScroll
			}
		}
	},
	beforeMount () {
		window.addEventListener('scroll', this.handleScroll);
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	computed: {
		blockScroll(){
			return this.$store.state.states.sitemapFlag ? 'block-scroll' : '';
		}
	},
	methods: {
		handleScroll () {
			var h = this.isHeaderBannerShow ? 50 : 0
			this.isFixed = window.scrollY > h ? true : false;
		}
	}
}
</script>
