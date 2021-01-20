<template>
	<div class="vod-wrap">
		<img :src="vod.thumbnail" alt="" draggable="false" />
		<h3>{{vod.title}}</h3>
		<span>{{vod.regDate}}</span>
	</div>
</template>

<script>
export default {
	props:['vod'],
	computed: {
	},
	methods: {
	}
}
</script>
<style lang="scss">
.vod-wrap {
	position: relative;

	img {
		display: block;
		width: 100%;
	}

	h3 {
		position: absolute;
		top: 10px;
		left: 10px;
		right: 10px;
		background-color: rgba(0,0,0,0.6);
		color: #fff;
		font-size: 16px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin: 0;
	}

	span {
		position: absolute;
		bottom: 10px;
		right: 10px;
		color: #fff;
		font-size: 12px;
		text-shadow: 1px 1px #000;
	}
}
</style>