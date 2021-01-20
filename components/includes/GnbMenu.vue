<template>
	<ul class="navi-list">
		<li @class="testData"><a href="#"><span>전문가방송</span></a></li>
		<li><a href="#"><span>카톡/문자반</span></a></li>
		<li><a href="#"><span>증권아카데미</span></a></li>
		<li><a href="#"><span>ARS종목추천</span></a></li>
		<li><a href="#"><span>타라(TARA)</span></a></li>
		<li><a href="#"><span>감사후기</span></a></li>
	</ul>
</template>

<script>
export default {
	props:['customData'],
	computed: {
		testData(){
			// customData came from Header.vue (parameter test)
			var testData = this.customData;

			console.log(JSON.parse(testData))

			return '';
		}
	}
}
</script>