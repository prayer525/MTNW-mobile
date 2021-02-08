export const state = () =>({
	sitemapFlag: false,
	jwt: ''
})

export const mutations = {
	toggle: (state, flag) => {
		state.sitemapFlag = flag;
	},
	setjwt: (state, value) => {
		state.jwt = value;
	}
}