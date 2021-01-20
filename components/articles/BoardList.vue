<template>
	<li>
		<NuxtLink to="/">
			<h3>{{item.title}}</h3>
			<div>
				<strong>{{item.auth}}</strong>
				<span>{{item.regDate}}</span>
			</div>
		</NuxtLink>
	</li>
</template>

<script>
export default {
	props:['item'],
	computed: {
	},
	methods: {
	}
}
</script>
<style lang="scss">
.board-list {
	list-style-type: none;
	padding:0;
	padding-bottom:10px;
	margin:0;

	li {
		border-bottom: 1px solid #ccc;
		padding: 10px 5px;

		a {
			color:#333;
			text-decoration:none;
		}

		h3 {
			font-size: 16px;
			width: 100%;
			font-weight: bold;
			text-overflow: ellipsis;
			white-space: nowrap;
			margin-bottom: 5px;
			overflow: hidden;
		}
		
		div {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			color:#999;
		}
	}
}
</style>