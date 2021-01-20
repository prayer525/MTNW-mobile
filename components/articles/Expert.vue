<template>
	<div>
		<!-- 카톡 신청 버튼 영역 -->
		<div class="btn-group">
			<strong>{{expert.name}}<br />카톡신청</strong>
			<button type="button" class="btn-free">무료</button>
			<button type="button">유료</button>
		</div>
		<!-- // 카톡 신청 버튼 영역 -->

		<!-- 전문가 정보 영역 -->
		<div class="expert-wrap" :style="bgImage">
			<strong v-show="expert.best != undefined">{{expert.best}}</strong>
			<br />
			<strong>{{expert.name}}</strong>
			<NuxtLink to="/">Home</NuxtLink>
			<p>{{expert.descTitle}}<br /><span v-html="expert.descBody"></span></p>
			<div class="btn-wrap">
				<button type="button">무료방송</button>
				<button type="button">회원가입</button>
			</div>
		</div>
		<!-- // 전문가 정보 영역 -->
	</div>
</template>

<script>
export default {
	props:['expert'],
	computed: {
		bgImage(){
			return `background:url("${this.expert.image}") right bottom no-repeat; background-size:contain;`;
		}
	},
	methods: {
		
	}
}
</script>
<style lang="scss">
.btn-group {
	display: flex;
	flex-direction: row;
	justify-content: stretch;
	align-items: center;

	strong {
		flex: 0 0 auto;
		width: 120px;
		height: 50px;
		text-align: center;
	}

	button {
		flex: 2;
		height:50px;

		&.btn-free {
			flex:1;
		}
	}
}
</style>