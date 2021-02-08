const webpack = require("webpack");

export default {
	// deploy target : static's for the Github.io
	target: 'static',
	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'MTNW-Mobile',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [
		'primeicons/primeicons.css',
		'prismjs/themes/prism-coy.css',
		'assets/layout/layout.scss',
		'assets/layout/flags/flags.css',
		'vue-slick-carousel/dist/vue-slick-carousel.css'
	],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
		{ src: './plugins/vue-slick-carousel.js' },
		{ src: './plugins/api-service.js' }
	],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: [
		'~/components'
	],

	// move page animation
	pageTransition: {
		name: 'slide-right',
		mode: 'out-in'
	},	

	// Server's root directory
	router: {
    base: '/JS/study/mtn/'
	},

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		// https://go.nuxtjs.dev/bootstrap
		'bootstrap-vue/nuxt',
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
	],

	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {
		baseURL: 'http://10.10.70.27:8080'
	},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
		/**
     * add external plugins
     */
		// analyze: true,
		publicPath: '/nuxt/',
    vendor: [
			"jquery",
			"bootstrap"
		],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
			})
		],
		babel: {
			compact: true,
			plugins: process.env.NODE_ENV !== 'production' ? [] : ["transform-remove-console"]
		},
	},
	generate: {
	},
	cli: {
		badgeMessages: ['process.env.NODE_ENV : ' + process.env.NODE_ENV],
		bannerColor : 'yellow'
	}
}
