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
						v-model="userinfo.userName" />
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
						<b-form-select v-model="selectedYear" :options="optYears"></b-form-select>
						<b-form-select v-model="selectedMonth" :options="optMonths"></b-form-select>
						<b-form-select v-model="selectedDay" :options="optDays"></b-form-select>
					</div>
					<div class="flex-wrap">
						
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
				userNickName: ''
			},
			selectedYear: null,
			optYears: [
				{ value: null, text: '년도'},
				{ value: '2000', text: '2000년'},
				{ value: '1999', text: '1999년'},
				{ value: '1998', text: '1999년'},
				{ value: '1997', text: '1999년'},
				{ value: '1996', text: '1999년'},
				{ value: '1995', text: '1999년'},
				{ value: '1994', text: '1999년'},
				{ value: '1993', text: '1999년'},
				{ value: '1992', text: '1999년'},
				{ value: '1991', text: '1999년'},
				{ value: '1990', text: '1999년'},
			],
			selectedMonth: null,
			optMonths: [
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
			selectedDay: null,
			optDays: [
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
			]
		}
	},
	computed: {
	},
	methods: {
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
			margin-bottom:5px;
		}
	}

	.flex-wrap {
		display: flex;

		input, select {
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