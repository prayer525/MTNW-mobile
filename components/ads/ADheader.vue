<template>
	<!-- 
		:class="fnCheckShow" : Header area 배너의 show / hide 체크 
	-->
	<div class="ad-header-wrap" :class="fnCheckShow">
			<span>(Header) 이벤트 배너영역</span>
			<!--
				Component Button 을 사용할 경우 @click 에 suffix로 ".native" 를 추가해야 동작한다.
			-->
			<Button icon="pi pi-times" class="btn-close" @click.native="fnCloseAd" />
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