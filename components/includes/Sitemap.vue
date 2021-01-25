<template>
	<div class="menu-area" :class="fnCheckShowMenu">
		<div class="back-panel" @click="$parent.fnToggleMenu"><!-- opacity overlay --></div>
		<div class="menu-wrap">
			<div class="user-info-area">
				<button type="button" class="btn-close" @click="fnToggleMenu">
					<span class="pi pi-times"></span>
				</button>
				<NuxtLink to="/login" @click="fnToggleMenu"><strong>로그인</strong></NuxtLink>
				/
				<NuxtLink to="/membership" @click="fnToggleMenu"><strong>회원가입</strong></NuxtLink>
				<p>로그인이 필요합니다.</p>
			</div>

			<ul class="menu-list">
				<li><NuxtLink to="/"><span>전문가방송</span></NuxtLink></li>
				<li><NuxtLink to="/"><span>카톡/문자 전용반</span></NuxtLink></li>
				<li><NuxtLink to="/"><span>증권아카데미</span></NuxtLink></li>
				<li><NuxtLink to="/"><span>ARS종목추천</span></NuxtLink></li>
				<li><NuxtLink to="/"><span>타라(TARA)</span></NuxtLink></li>
				<li><NuxtLink to="/"><span>감사후기</span></NuxtLink></li>
				<li><NuxtLink to="/"><span>투자전략</span></NuxtLink></li>
				<li><NuxtLink to="/"><span>추천주게시판</span></NuxtLink></li>
				<li><NuxtLink to="/"><span>녹화방송</span></NuxtLink></li>
				<li><NuxtLink to="/"><span>종목VOD</span></NuxtLink></li>
				<li><NuxtLink to="/"><span>강연회</span></NuxtLink></li>
				<li><NuxtLink to="/"><span>회원정보변경</span></NuxtLink></li>
			</ul>
		</div>
	</div>
</template>

<script>
import $ from 'jquery';

export default {
	computed: {
		fnCheckShowMenu() {
			if(this.$parent.showMenu){
				return 'show';
			}
		}
	},
	methods: {
		fnToggleMenu(){
			this.$parent.showMenu = !this.$parent.showMenu

			if(this.$parent.showMenu){
				$('body').addClass('block-scroll');
			}else{
				$('body').removeClass('block-scroll');
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.user-info-area {
	position: relative;
	border-bottom: 1px solid #999;
	font-size: 22px;
	text-align: center;
	padding: 15px 0;

	button {
		position: absolute;
		top: 5px;
		right: 5px;
		border: none;
		background: transparent;
		width:40px;
		height:40px;
		color:#333;
		font-size:18px;
		text-align:center;
		padding:0;
	}

	a {
		color: #333;
		font-size: 22px;
		text-decoration: none;
	}

	p {
		font-size: 14px;
		margin: 0;
		margin-top: 10px;
	}
}

.menu-list {
	list-style-type: none;
	padding: 15px;
	margin: 0;

	li {
		border-bottom: 1px solid #ccc;
		
		a {
			display: block;
			color: #666;
			font-size: 14px;
			text-decoration: none;
			padding: 10px;
		}
	}
}
</style>