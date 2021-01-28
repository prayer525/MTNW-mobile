<template>
	<article class="user-information card">
		<form action="">
		<fieldset>
			<legend>회원 정보 입력</legend>
			<!-- infor field -->
			<div class="info-filed">
				<div class="input-form">
					<b-input type="text"
						id="user-info-id"
						:class="{fill : userinfo.userId}"
						v-model="userinfo.userId" />
					<label for="user-info-id">아이디</label>
				</div>
				<div class="input-form">
					<b-input type="password"
						id="user-info-pw"
						:class="{fill : userinfo.userPw}"
						v-model="userinfo.userPw"
						autocomplete="on" />
					<label for="user-info-pw">패스워드</label>
				</div>
				<div class="input-form">
					<b-input type="password"
						id="user-info-pw-check"
						:class="{fill : userinfo.userPwCheck}"
						v-model="userinfo.userPwCheck"
						autocomplete="on" />
					<label for="user-info-pw-check">패스워드 확인</label>
				</div>
				<div class="input-form">
					<b-input type="text"
						id="user-info-name"
						:class="{fill : userinfo.userName}"
						v-model="userinfo.userName"
						@change="check" />
					<label for="user-info-name">이름</label>
				</div>
				<div class="input-form">
					<b-input type="text"
						id="user-info-nickname"
						:class="{fill : userinfo.userNickName}"
						v-model="userinfo.userNickName" />
					<label for="user-info-nickname">필명</label>

					<div class="warning-text">
						<ol>
							<li>필명은 최대 10자, 한글, 영문, 숫자 혼용가능합니다.</li>
							<li>반사회적/미풍양속에 위배되는 단어는 사용할 수 없습니다.</li>
							<li>필명변경은 직접 변경이 불가하므로 신중히 입력하시기 바랍니다.</li>
						</ol>
					</div>
				</div>

				<div class="date-form">
					<label for="user-info-birthday">생년월일</label>

					<div class="flex-wrap">
						<b-form-select v-model="userinfo.year" :options="selectOpt.years" @change="check"></b-form-select>
						<b-form-select v-model="userinfo.month" :options="selectOpt.months" @change="check"></b-form-select>
						<b-form-select v-model="userinfo.day" :options="selectOpt.days" @change="check"></b-form-select>
					</div>
					<div class="flex-wrap justify-content-between">
						<b-form-radio-group
							id="user-gender"
							v-model="userinfo.gender"
							:options="selectOpt.gender"
							button-variant="outline-dark"
							name=""
							buttons
						></b-form-radio-group>

						<b-form-radio-group
							id="user-local"
							v-model="userinfo.local"
							:options="selectOpt.local"
							button-variant="outline-dark"
							name=""
							buttons
						></b-form-radio-group>
					</div>
				</div>

				<div class="date-form">
					<label for="user-info-birthday">인증</label>

					<div class="flex-wrap">
						<b-form-select v-model="certinfo.telecom" :options="selectOpt.telecom"></b-form-select>
						<b-form-select v-model="certinfo.phonePre" :options="selectOpt.phonePrefix"></b-form-select>
					</div>
					<div class="flex-wrap">
						<b-form-input type="tel"
						maxlength="4"
						class="flex-grow-1"
						id="user-phone-middle"
						v-model="certinfo.phoneMid"
						placeholder="중간자리"
						autocomplete="on"
						trim
						:formatter="numberCheck" />

						<b-form-input type="tel"
						maxlength="4"
						class="flex-grow-1"
						id="user-phone-last"
						v-model="certinfo.phoneLast"
						placeholder="마지막자리"
						autocomplete="on"
						trim
						:formatter="numberCheck" />

						<b-button type="button" class="p-button-rounded p-button-secondary flex-grow-1">인증</b-button>
					</div>
				</div>

			</div>
			<!-- // infor field -->

			<br />

			<!-- infor field -->
			<div class="info-filed">
			</div>
		</fieldset>
		</form>
	</article>
</template>
<script>
export default {
	data(){
		return {
			userinfo: {
				userId: '',
				userPw: '',
				userPwCheck: '',
				userName: '',
				userNickName: '',
				year: null,
				month: null,
				day: null,
				gender: null,
				local: null
			},
			certinfo: {
				telecom : null,
				phonePre : '010',
				phoneMid : null,
				phoneLast : null
			},
			selectOpt : {
				years: [
					{ value: null, text: '년도'},
					{ value: '2000', text: '2000년'},
					{ value: '1999', text: '1999년'},
					{ value: '1998', text: '1998년'},
					{ value: '1997', text: '1997년'},
					{ value: '1996', text: '1996년'},
					{ value: '1995', text: '1995년'},
					{ value: '1994', text: '1994년'},
					{ value: '1993', text: '1993년'},
					{ value: '1992', text: '1992년'},
					{ value: '1991', text: '1991년'},
					{ value: '1990', text: '1990년'},
				],
				months: [
					{ value: null, text: '월'},
					{ value: '01', text: '01'},
					{ value: '02', text: '02'},
					{ value: '03', text: '03'},
					{ value: '04', text: '04'},
					{ value: '05', text: '05'},
					{ value: '06', text: '06'},
					{ value: '07', text: '07'},
					{ value: '08', text: '08'},
					{ value: '09', text: '09'},
					{ value: '10', text: '10'},
					{ value: '11', text: '11'},
					{ value: '12', text: '12'},
				],
				days: [
					{ value: null, text: '일'},
					{ value: '01', text: '01'},
					{ value: '02', text: '02'},
					{ value: '03', text: '03'},
					{ value: '04', text: '04'},
					{ value: '05', text: '05'},
					{ value: '06', text: '06'},
					{ value: '07', text: '07'},
					{ value: '08', text: '08'},
					{ value: '09', text: '09'},
					{ value: '10', text: '10'},
					{ value: '11', text: '11'},
					{ value: '12', text: '12'},
					{ value: '13', text: '13'},
					{ value: '14', text: '14'},
					{ value: '15', text: '15'},
					{ value: '16', text: '16'},
					{ value: '17', text: '17'},
					{ value: '18', text: '18'},
					{ value: '19', text: '19'},
					{ value: '20', text: '20'},
					{ value: '21', text: '21'},
					{ value: '22', text: '22'},
					{ value: '23', text: '23'},
					{ value: '24', text: '24'},
					{ value: '25', text: '25'},
					{ value: '26', text: '26'},
					{ value: '27', text: '27'},
					{ value: '28', text: '28'},
					{ value: '29', text: '29'},
					{ value: '30', text: '30'},
					{ value: '31', text: '31'},
				],
				gender: [
					{ text: '여자', value: 'F' },
          { text: '남자', value: 'M' }
				],
				local: [
					{ text: '내국인', value: 'L' },
          { text: '외국인', value: 'F' }
				],
				telecom: [
					{ value: null, text: '통신사'},
					{ value: 'SKT', text: 'SKT'},
					{ value: 'KTF', text: 'KT'},
					{ value: 'LGT', text: 'LG U+'},
					{ value: 'SKM', text: 'SK 알뜰폰'},
					{ value: 'KTM', text: 'KT 알뜰폰'},
					{ value: 'LGM', text: 'LG 알뜰폰'},
				],
				phonePrefix: [
					{ value: '010', text: '010'},
					{ value: '016', text: '016'},
					{ value: '017', text: '017'},
					{ value: '018', text: '018'},
					{ value: '019', text: '019'},
				]
			}
		}
	},
	computed: {
	},
	methods: {
		check(){
			this.certinfo.name = this.userinfo.userName;
			this.certinfo.birth = this.userinfo.year + '' + this.userinfo.month + '' + this.userinfo.day;
			this.certinfo.telCorp = this.certinfo.telecom;
			this.certinfo.phone = this.certinfo.phonePre + '' + this.certinfo.phoneMid + '' + this.certinfo.phoneLast;
			this.certinfo.nation = this.userinfo.local;
			this.certinfo.gender = this.userinfo.gender;

			console.log('certinfo : ' , this.certinfo)
		},
		numberCheck(event){
			return event.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
		}
	}
};
</script>

<style lang="scss" scoped>
legend {
	display:none;
}

.info-filed {
	border: 1px solid #ccc;

	.input-form {
		position: relative;
		border-bottom:1px solid #ccc;
		width: 100%;
		min-height:70px;
		padding: 15px 10px;

		label {
			display: block;
			position: absolute;
			top: 15px;
			left: 20px;
			right: 0;
			height: 40px;
			line-height: 40px;
			color: #999;
			margin: 0;
			z-index: 0;
			transition: 0.3s;
		}

		input {
			border: none;
			box-shadow: none !important;
			transition:0.3s
		}

		input.fill,
		input:focus {
			transform: translateY(15px);
		}

		input.fill + label,
		input:focus + label {
			transform: translate(-10px, -30%);
		}

		.warning-text {
			border-top: 1px solid #ccc;
			font-size: 11px;
			color: #999;
			margin-top: 15px;

			ol {
				padding: 20px;
				padding-bottom: 5px;
				margin: 0;
			}
		}
	}

	.date-form {
		position: relative;
		border-bottom:1px solid #ccc;
		width: 100%;
		min-height:70px;
		padding: 15px 10px;

		label {
			display: block;
			height: 20px;
			line-height: 20px;
			color: #999;
			margin: 0;
			z-index: 0;
		}
	}

	.flex-wrap {
		display: flex;
		padding-top:10px;

		input, select, button {
			flex: 1;
			margin-left:10px;

			&:first-child {margin:0;}
		}
	}

	> div:last-child {
		border-bottom: none;
	}
}
</style>