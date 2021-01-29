<template>
	<div class="container">
		전문가 Live 페이지
		<br />
		<NuxtLink to="/">Index page</NuxtLink>
		<br />
		<br />
		<NuxtLink to="/">Main Page</NuxtLink>
		<br />

		<div class="p-grid button-demo">
			<div class="p-col-12 p-md-6">
				<div class="card">
					<b-button type="button" class="p-mr-2 p-mb-2" @click="fnAxiosAsyncTest()">Axios Test - Call 5 API (Request step by step)</b-button>
					<b-button type="button" class="p-mr-2 p-mb-2" @click="fnAxiosSyncTest()">Axios Test - Call 5 API (Request all)</b-button>
				</div>
			</div>
		</div>

		<div class="axios-body">
			{{axiosData}}
		</div>

		<div class="block-ui" v-show="blockShow">
			<b-spinner label="Spinning"></b-spinner>
		</div>
	</div>
</template>

<script>
export default {
	layout: 'headerless',
	transition: 'slide-right',
	data(){
		return ({
			axiosData : null,
			blockShow : false
		})
	},
	methods: {
		async fnAxiosAsyncTest(){
			this.blockShow = true;
			await this.$axios.get('/posts').then((data) => {
				console.log('posts data : ' , data)
			})

			await this.$axios.get('/comments').then((data) => {
				console.log('comments data : ' , data)
			})

			await this.$axios.get('/albums').then((data) => {
				console.log('albums data : ' , data)
			})

			await this.$axios.get('/photos').then((data) => {
				console.log('photos data : ' , data)
			})

			await this.$axios.get('/todos').then((data) => {
				console.log('todos data : ' , data)
				this.axiosData = JSON.stringify(data);
			}).then(() => {
				console.log('aa')
			}).then(() => {
				console.log('bb')
			}).then(() => {
				console.log('cc')
			}).then(() => {
				console.log('dd')
				this.blockShow = false;
			})
		},
		fnAxiosSyncTest(){
			this.blockShow = true;

			var api = [
				this.$axios.get('/posts'),
				this.$axios.get('/comments'),
				this.$axios.get('/albums'),
				this.$axios.get('/photos'),
				this.$axios.get('/todos')
			];

			Promise.all(api).then((values) => {
				this.blockShow = false;
				console.log('values : ' , values)
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.axios-body {
	word-break: break-all;
}

.block-ui {
	 position:fixed;
	 top:0;
	 left:0;
	 width:100%;
	 height:100%;
	 background-color:rgba(0,0,0,0.5);

	 .spinner-border {
		 position:absolute;
		 top:50%;
		 left:50%;
		 width:4rem;
		 height:4rem;
		 color:#d9230f !important;
		 margin:-2rem 0 0 -2rem;
	 }
}

</style>