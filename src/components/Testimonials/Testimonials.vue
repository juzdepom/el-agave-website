<template>
  	<div class="section carousel-reviews broun-block"
  		id="testimonials"
		style="padding-bottom: 30px; background-color: rgb(126, 23, 27)">
		<div class="container">
			<h3 class="w3layouts-title text-center"
				style="color: white">
				Yelp Reviews
			</h3>
			<carousel-component></carousel-component>
		</div>
	</div>
</template>

<script>
import Carousel from './Carousel.vue'

export default {
	components: {
		carouselComponent: Carousel,
	}
}
</script>

