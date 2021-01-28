<template>
	<section class="container">
		<div class="reg-step-wrap">
			<div :style="progressWidth"><!-- progress-bar for step --></div>
			<ul class="reg-step">
				<li class="active"><span>약관동의</span></li>
				<li :class="{active : currentStep == 2 || currentStep == 3}"><span>정보입력</span></li>
				<li :class="{active : currentStep == 3}"><span>가입완료</span></li>
			</ul>
		</div>
		<!--
			~/components/membership/Terms.vue
		-->
		<Terms v-if="currentStep == 1" />

		<!--
			~/components/membership/Information.vue
		-->
		<Information  v-if="currentStep == 2" />

		<b-modal id="test-modal" v-model="modalShow" hide-header hide-footer>
			<div class="d-block text-center">
				<h3>가입을 축하합니다.</h3>
			</div>
			<b-button class="mt-3" block @click="$bvModal.hide('test-modal')">닫기</b-button>
		</b-modal>

		<div class="btn-step-control">
			<NuxtLink to="/" class="btn btn-secondary" v-if="currentStep == 1">취소</NuxtLink>
			<b-button type="button" v-if="currentStep == 2" @click="prevStep">이전</b-button>
			<b-button type="button" v-if="currentStep == 1" @click="nextStep">다음</b-button>
			<b-button type="button" v-if="currentStep == 2" @click="regRequest">가입하기</b-button>
			<NuxtLink to="/" class="btn btn-success btn-block" v-if="currentStep == 3">확인</NuxtLink>
		</div>
	</section>
</template>
<script>
export default {
	layout: 'headerless',
  data() {
    return {
			currentStep: 1,
			totalStep: 3,
			terms: false,
			personal: false,
			SMS : false,
			modalShow : false
    };
	},
	computed: {
		progressWidth() {
			return `width:${this.currentStep / this.totalStep * 100}%;`;
		}
	},
	methods: {
		prevStep(){
			this.currentStep -= 1;
		},
		nextStep(){
			this.currentStep += 1;
		},
		regRequest(){
			this.modalShow = true;

			this.currentStep += 1;
		}
	}
};
</script>

<style lang="scss" scoped>
.reg-step-wrap {
	position: relative;
	height: 40px;
	border-radius: 20px;
	margin: 15px 0;
	overflow: hidden;

	> div {
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 20px;
		background-color: #d9230f;
		width: 0;
		height: 40px;
		z-index: 1;
		transition: 0.5s;
	}

	.reg-step {
		display: flex;
		position: relative;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color:transparent;
		width:100%;
		height:40px;
		list-style: none;
		padding: 0;
		margin: 0;
		overflow: hidden;
		z-index: 2;

		li {
			flex: 1;
			height: 40px;
			line-height: 40px;
			color: #999;
			font-size: 14px;
			text-align: center;
			padding: 0;
			margin: 0;
			transition: 0.5s;

			&.active {
				color: #fff;
				font-weight: bold;
			}
		}
	}
}

.btn-step-control {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 15px 0;

	.btn-confirm {
		width: 100%;
		justify-content: center;
	}
}
</style>