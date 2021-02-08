<template>
	<div class="container">
		<div class="login-form-wrap">
			<h2>로그인</h2>
			<form action="#">
				<fieldset>
					<legend>Login Form</legend>
					<b-form-input type="text" v-model="loginData.id" placeholder="아이디" />
					<b-form-input type="password" v-model="loginData.pw" placeholder="비밀번호" />

					<b-button type="button" class="btn-block btn-red" @click="login">로그인</b-button>
					<NuxtLink to="/membership" class="btn-block btn-red">회원가입</NuxtLink>

				</fieldset>
			</form>
		</div>
	</div>
</template>

<script>
import * as GibberishAES from '~/assets/js/gibberish-aes.js';
import CryptoJS from 'crypto-js';

export default {
	layout: 'headerless',
	data(){
		return {
			loginData: {
				id: 'kky486',
				pw: 'rldud8919'
			}
		}
	},
	computed:{
	},
	methods: {
		encrypt(){
			var newPwd = '';
			for (var i = this.loginData.pw.length - 1; i >= 0; i--) {
					if (i % 2 == 0) {
							newPwd += this.loginData.pw.charAt(i)
					}
			}
			for (var i = 0; i < this.loginData.pw.length; i++) {
					if (i % 2 == 1) {
							newPwd += this.loginData.pw.charAt(i)
					}
			}
			return newPwd
		},
		decrypt(param){
			param = param.split('');
			var newPwd = '';
			var i = this.loginData.pw.length;
			var j = 0;
			var k = i - 1;
			do{
				if(i % 2 == 1){
					newPwd += param[j]
					j++;
				}else if(i % 2 == 0){
					newPwd += param[k]
					k--;
				}

				i--;
			}while(i > 0)

			return newPwd.split('').reverse().join('')
		},
		async login(){
			let $data = {
				'username' : this.loginData.id,
				'password' : this.loginData.pw
			}
			let $param = {
				name: 'authenticate',
				data: JSON.stringify($data)
			}

			await this.getApi($param).then((res) => {
				console.log('login res : ' , res)
				console.log('login res : ' , res[0])
				console.log('login res : ' , res[0].data)
				console.log('login res : ' , res[0].data.jwt)

				this.$store.commit('states/setjwt', res[0].data.jwt);
			})

			$param = {
				name: 'userinfo'
			}

			await this.getApi($param).then((res) => {

				try{
					
					if(false){
						var bytes = CryptoJS.AES.decrypt(res[0].data, "96A11111A935EAF9811A577B6B6A7ABC", { mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7, iv: "96A11111A935EAF9" });
						console.log('bytes : ' , bytes)
						var plaintext = bytes.toString(CryptoJS.enc.Utf8);
						console.log('plaintext : ' , plaintext);
					}else{

						console.log('GibberishAES : ' , GibberishAES)
		
						var resData = GibberishAES.aesDecrypt(res[0].data, "96A11111A935EAF9811A577B6B6A7ABC")

						console.log('resData', resData)
					}
				}catch(e){
					console.log('GibberishAES error : ' , e)
				}



			})

			return false;
		}
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

	fieldset button {
		padding:0;
	}
}
</style>