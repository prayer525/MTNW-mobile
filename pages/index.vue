<template>
<div class="container">
	<div>
		<NuxtLink to="/main">Go Main</NuxtLink>
	</div>

	<!-- 전문가 3인 롤링 -->
	<VueSlickCarousel class="carusel-expert" v-bind="slickOptions">
		<Expert v-for="expert in dummyData.expertList" v-bind:expert="expert" v-bind:key="expert.id" />
	</VueSlickCarousel>
	<!-- // 전문가 3인 롤링 -->

	<ADMainMiddle />

	<!-- Live 전문가 -->
	<VueSlickCarousel class="carusel-expert" v-bind="slickOptions">
		<Expert v-for="expert in dummyData.liveExpertList" v-bind:expert="expert" v-bind:key="expert.id" />
	</VueSlickCarousel>
	<!-- // Live 전문가 -->

	<!-- 투자 전략 게시글 리스트 -->
	<div class="title-with-btn">
		<h2>투자 전략</h2>
		<NuxtLink to="/">더보기 + </NuxtLink>
	</div>
	<ul class="board-list">
		<BoardList v-for="item in dummyData.listInvestmentStrategy" v-bind:item="item" v-bind:key="item.id" />
	</ul>
	<!-- // 투자 전략 게시글 리스트 -->

	<!-- 투자 전략 게시글 리스트 -->
	<div class="title-with-btn">
		<h2>추천주 게시판</h2>
		<NuxtLink to="/">더보기 + </NuxtLink>
	</div>
	<ul class="board-list">
		<BoardList v-for="item in dummyData.listRecommend" v-bind:item="item" v-bind:key="item.id" />
	</ul>
	<!-- // 투자 전략 게시글 리스트 -->

	<!-- Live 전문가 -->
	<div class="title-with-btn">
		<h2>증권 VOD</h2>
		<NuxtLink to="/">더보기 + </NuxtLink>
	</div>
	<VueSlickCarousel class="carusel-expert" v-bind="slickOptions">
		<VodList v-for="vod in dummyData.vodList" v-bind:vod="vod" v-bind:key="vod.id" />
	</VueSlickCarousel>
	<!-- // Live 전문가 -->
	
</div>
</template>

<script>
import * as dummyData from '../assets/js/dummy.js';
export default {
	transition: 'slide-right',
	data() {
		return {
			dummyData : dummyData,
			slickOptions: {
				slidesToShow: 1,
				arrows: false,
				dots: true,
			}
		}
	},
	methods : {
		clickTest(event) {
			console.log('click test : ', event)

			return false;
		}
	}
}
</script>

<style lang="scss">
.title-with-btn {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #999;
	padding: 10px 0;
	margin-top: 10px;

	h2 {
		font-size: 22px;
		font-weight: bold;
		margin: 0;
	}

	a {
		font-size: 12px;
		color: #999;
	}
}
</style>
