export const state = () =>({
	sitemapFlag: false
})

export const mutations = {
	toggle: (state, flag) => {
		state.sitemapFlag = flag;
	}
}