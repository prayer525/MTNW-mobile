<template>
	<div class="container">
		<div class="login-form-wrap">
			<h2>로그인</h2>
			<form action="#">
				<fieldset>
					<legend>Login Form</legend>
					<b-form-input type="text" placeholder="아이디" />
					<b-form-input type="password" placeholder="비밀번호" />

					<NuxtLink to="./" class="btn-block btn-red">로그인</NuxtLink>
					<NuxtLink to="./membership" class="btn-block btn-red">회원가입</NuxtLink>

				</fieldset>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	layout: 'headerless',
	computed:{
	},
	methods: {
	}
}
</script>

<style lang="scss" scoped>
.login-form-wrap {
	border: 1px solid #bbb;
	border-radius: 5px;
	background-color: #fff;
	padding: 10px;
	margin: 30px 0;

	fieldset legend {
		display: none;
	}

	fieldset input {
		width: 100%;
		margin-bottom: 10px;
	}
}
</style>