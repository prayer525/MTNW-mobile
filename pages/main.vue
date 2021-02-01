<template>
	<div class="container">
		<NuxtLink to="/" class="btn btn-dark">Index page</NuxtLink>
		<NuxtLink to="/expert/live" class="btn btn-dark">전문가 Live</NuxtLink>
		<br />
		<br />

		<div class="carousel-wrapper">
			<VueSlickCarousel v-bind="slickOptions">
				<div class="image-wrapper">
					<p>Slide Page 1</p>
					<p>Slide Page 1</p>
					<p>Slide Page 1</p>
					<p>Slide Page 1</p>
					<p>Slide Page 1</p>
					<p>Slide Page 1</p>
					<p>Slide Page 1</p>
				</div>
				<div class="image-wrapper">
					<p>Slide Page 2</p>
					<p>Slide Page 2</p>
					<p>Slide Page 2</p>
					<p>Slide Page 2</p>
					<p>Slide Page 2</p>
					<p>Slide Page 2</p>
					<p>Slide Page 2</p>
				</div>
				<div class="image-wrapper">
					<p>Slide Page 3</p>
					<p>Slide Page 3</p>
					<p>Slide Page 3</p>
					<p>Slide Page 3</p>
					<p>Slide Page 3</p>
					<p>Slide Page 3</p>
					<p>Slide Page 3</p>
				</div>
				<div class="image-wrapper">
					<p>Slide Page 4</p>
					<p>Slide Page 4</p>
					<p>Slide Page 4</p>
					<p>Slide Page 4</p>
					<p>Slide Page 4</p>
					<p>Slide Page 4</p>
					<p>Slide Page 4</p>
				</div>
				<div class="image-wrapper">
					<p>Slide Page 5</p>
					<p>Slide Page 5</p>
					<p>Slide Page 5</p>
					<p>Slide Page 5</p>
					<p>Slide Page 5</p>
					<p>Slide Page 5</p>
					<p>Slide Page 5</p>
				</div>
			</VueSlickCarousel>

			<VueSlickCarousel v-bind="slickOptions">
				<div class="image-wrapper">
					<p>Slide Page 2-1</p>
					<p>Slide Page 2-1</p>
					<p>Slide Page 2-1</p>
					<p>Slide Page 2-1</p>
					<p>Slide Page 2-1</p>
					<p>Slide Page 2-1</p>
					<p>Slide Page 2-1</p>
				</div>
				<div class="image-wrapper">
					<p>Slide Page 2-2</p>
					<p>Slide Page 2-2</p>
					<p>Slide Page 2-2</p>
					<p>Slide Page 2-2</p>
					<p>Slide Page 2-2</p>
					<p>Slide Page 2-2</p>
					<p>Slide Page 2-2</p>
				</div>
				<div class="image-wrapper">
					<p>Slide Page 2-3</p>
					<p>Slide Page 2-3</p>
					<p>Slide Page 2-3</p>
					<p>Slide Page 2-3</p>
					<p>Slide Page 2-3</p>
					<p>Slide Page 2-3</p>
					<p>Slide Page 2-3</p>
				</div>
				<div class="image-wrapper">
					<p>Slide Page 2-4</p>
					<p>Slide Page 2-4</p>
					<p>Slide Page 2-4</p>
					<p>Slide Page 2-4</p>
					<p>Slide Page 2-4</p>
					<p>Slide Page 2-4</p>
					<p>Slide Page 2-4</p>
				</div>
				<div class="image-wrapper">
					<p>Slide Page 2-5</p>
					<p>Slide Page 2-5</p>
					<p>Slide Page 2-5</p>
					<p>Slide Page 2-5</p>
					<p>Slide Page 2-5</p>
					<p>Slide Page 2-5</p>
					<p>Slide Page 2-5</p>
				</div>

				<div class="image-wrapper">
					<p>Slide Page 2-6</p>
					<p>Slide Page 2-6</p>
					<p>Slide Page 2-6</p>
					<p>Slide Page 2-6</p>
					<p>Slide Page 2-6</p>
					<p>Slide Page 2-6</p>
					<p>Slide Page 2-6</p>
				</div>

				<div class="image-wrapper">
					<p>Slide Page 2-7</p>
					<p>Slide Page 2-7</p>
					<p>Slide Page 2-7</p>
					<p>Slide Page 2-7</p>
					<p>Slide Page 2-7</p>
					<p>Slide Page 2-7</p>
					<p>Slide Page 2-7</p>
				</div>
				<div class="image-wrapper">
					<p>Slide Page 2-8</p>
					<p>Slide Page 2-8</p>
					<p>Slide Page 2-8</p>
					<p>Slide Page 2-8</p>
					<p>Slide Page 2-8</p>
					<p>Slide Page 2-8</p>
					<p>Slide Page 2-8</p>
				</div>
				<div class="image-wrapper">
					<p>Slide Page 2-9</p>
					<p>Slide Page 2-9</p>
					<p>Slide Page 2-9</p>
					<p>Slide Page 2-9</p>
					<p>Slide Page 2-9</p>
					<p>Slide Page 2-9</p>
					<p>Slide Page 2-9</p>
				</div>
			</VueSlickCarousel>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			slickOptions: {
				slidesToShow: 1,
				arrows: false,
				dots: true,
			}
		}
	}
}
</script>

<style>
.carousel-wrapper {
	padding: 40px;
	border:1px solid #ccc;
}
.img-wrapper {
	display:flex;
	align-items: center;
	justify-content: center;
	margin: auto;
	width: 100%;
	height: auto;
	background-image: linear-gradient(gray 100%, transparent 0);
}
</style>