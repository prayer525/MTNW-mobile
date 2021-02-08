import Vue from 'vue'

Vue.mixin({
	data(){
		return ({
			api : {
				'login': 		{ path: '/login', type:'post'},
				'comments':	{ path: '/comments', type: 'get'},
				'posts':		{ path: '/posts', type: 'get'},
				'albums':		{ path: '/albums', type: 'get'},
				'photos':		{ path: '/photos', type: 'get'},
				'todos':		{ path: '/todos', type: 'get'},
				'authenticate': 	{ path: '/authenticate', type: 'post'},
				'userinfo':				{ path: '/api/v1/userInfo', type: 'get'}
			}
		})
	},
	methods:{
		createApiBody($param, $data){
			return this.$axios({
				headers: {
					'Accept-Language': 'utf-8',
					'Authorization': this.$store.state.states.jwt != '' ? 'Bearer ' + this.$store.state.states.jwt : ''
				},
				url: this.api[$param].path,
				method: this.api[$param].type,
				data: $data !== undefined ? JSON.parse($data) : {}
			}).catch(err => {
				console.log('err : ' , err)
			})
		},
		async getApi($param){
			let apiList = [];
			// this.blockShow = true;

			if(Array.isArray($param)){
				$param.forEach((item, idx) => {
					apiList.push(this.createApiBody(item.name, item.data));
				})
			}else{
				apiList.push(this.createApiBody($param.name, $param.data));
			}

			try{
				return new Promise(async (resolve, reject) => {
					await Promise.all(apiList).then((values) => {
						// this.blockShow = false;
						resolve(values)
					}).catch(error => {
						reject(error);
					})
				})

			}catch(e){
				console.log('error : ', e)
			}
		}
	}
})