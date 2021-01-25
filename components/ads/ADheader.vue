<template>
	<!-- 
		:class="fnCheckShow" : Header area 배너의 show / hide 체크 
	-->
	<div class="ad-header-wrap" :class="fnCheckShow">
			<span>(Header) 이벤트 배너영역</span>
			<button type="button" class="btn-close" @click="fnCloseAd">
					<span class="pi pi-times"></span>
				</button>
	</div>
</template>

<script>
export default {
	/*
	~/layout/default.vue 의 isHeaderBannerShow 를 참조 : 전체 페이지에서 공통으로 접근 가능해야 하니 Root에 선언
	 */
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