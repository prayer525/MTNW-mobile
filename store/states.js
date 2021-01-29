export const state = () =>({
	counter: 0,
	sitemapFlag: false
})

export const mutations = {
	toggle: (state, flag) => {
		state.sitemapFlag = flag;
	}
}