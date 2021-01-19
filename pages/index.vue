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

	
	<div class="p-grid button-demo">
		<div class="p-col-12 p-md-6">
		<div class="card">
			<h5 @click="clickTest($event)">Default</h5>
			<Button type="button" class="p-mr-2 p-mb-2" @click.native="clickTest($event)">Test Button</Button>
			<Button type="button" label="test" class="p-mr-2 p-mb-2" @click="clickTest($event)"></Button>
			<Button label="Disabled" class="p-mr-2 p-mb-2" :disabled="true"></Button>
			<button type="button" @click="clickTest($event)">button click</button>
		</div>
		</div>
	</div>
	<div class="p-grid button-demo">
		<div class="p-col-12 p-md-6">
		<div class="card">
			<h5 @click="clickTest($event)">Default</h5>
			<Button type="button" class="p-mr-2 p-mb-2" @click.native="clickTest($event)">Test Button</Button>
			<Button type="button" label="test" class="p-mr-2 p-mb-2" @click="clickTest($event)"></Button>
			<Button label="Disabled" class="p-mr-2 p-mb-2" :disabled="true"></Button>
			<button type="button" @click="clickTest($event)">button click</button>
		</div>
		</div>
	</div>
	<div class="p-grid button-demo">
		<div class="p-col-12 p-md-6">
		<div class="card">
			<h5 @click="clickTest($event)">Default</h5>
			<Button type="button" class="p-mr-2 p-mb-2" @click.native="clickTest($event)">Test Button</Button>
			<Button type="button" label="test" class="p-mr-2 p-mb-2" @click="clickTest($event)"></Button>
			<Button label="Disabled" class="p-mr-2 p-mb-2" :disabled="true"></Button>
			<button type="button" @click="clickTest($event)">button click</button>
		</div>
		</div>
	</div>
	<div class="p-grid button-demo">
		<div class="p-col-12 p-md-6">
		<div class="card">
			<h5 @click="clickTest($event)">Default</h5>
			<Button type="button" class="p-mr-2 p-mb-2" @click.native="clickTest($event)">Test Button</Button>
			<Button type="button" label="test" class="p-mr-2 p-mb-2" @click="clickTest($event)"></Button>
			<Button label="Disabled" class="p-mr-2 p-mb-2" :disabled="true"></Button>
			<button type="button" @click="clickTest($event)">button click</button>
		</div>
		</div>
	</div>
	<div class="p-grid button-demo">
		<div class="p-col-12 p-md-6">
		<div class="card">
			<h5 @click="clickTest($event)">Default</h5>
			<Button type="button" class="p-mr-2 p-mb-2" @click.native="clickTest($event)">Test Button</Button>
			<Button type="button" label="test" class="p-mr-2 p-mb-2" @click="clickTest($event)"></Button>
			<Button label="Disabled" class="p-mr-2 p-mb-2" :disabled="true"></Button>
			<button type="button" @click="clickTest($event)">button click</button>
		</div>
		</div>
	</div>
	<div class="p-grid button-demo">
		<div class="p-col-12 p-md-6">
		<div class="card">
			<h5 @click="clickTest($event)">Default</h5>
			<Button type="button" class="p-mr-2 p-mb-2" @click.native="clickTest($event)">Test Button</Button>
			<Button type="button" label="test" class="p-mr-2 p-mb-2" @click="clickTest($event)"></Button>
			<Button label="Disabled" class="p-mr-2 p-mb-2" :disabled="true"></Button>
			<button type="button" @click="clickTest($event)">button click</button>
		</div>
		</div>
	</div>
	<div class="p-grid button-demo">
		<div class="p-col-12 p-md-6">
		<div class="card">
			<h5 @click="clickTest($event)">Default</h5>
			<Button type="button" class="p-mr-2 p-mb-2" @click.native="clickTest($event)">Test Button</Button>
			<Button type="button" label="test" class="p-mr-2 p-mb-2" @click="clickTest($event)"></Button>
			<Button label="Disabled" class="p-mr-2 p-mb-2" :disabled="true"></Button>
			<button type="button" @click="clickTest($event)">button click</button>
		</div>
		</div>
	</div>
</div>
</template>

<script>
var dummyData = {
	expertList : [
		{
			name: '나리넷',
			image: 'http://static.mtnw.co.kr/images/main/thumb_201903261058555084SP.png',
			descTitle : '고래사냥 주식투자법',
			descBody : '40년 경력의<br>진짜 전문가'
		},
		{
			name: '강남큰손',
			image: 'http://static.mtnw.co.kr/images/main/thumb_201903261334431106SP.png',
			descTitle : '실전매매 최고수,',
			descBody : '쪽집게 명품방송!'
		},
		{
			name: '공명정지우',
			image: 'http://static.mtnw.co.kr/images/main/thumb_201903261355448669SP.png',
			descTitle : '최고는 최고를 알아본다',
			descBody : '부자만들기 프로젝트<br>특급분석'
		}
	]
}

export default {
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

<style>
</style>
