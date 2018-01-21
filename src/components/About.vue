<template>
  	<div class="slid" :style="{'background-image':'url(' + background + ')'}" >
		<div class="slid-text" :class="{'pull-right': pullRight}" style="padding-top: 30px">
			<h4 :id="id">{{title}}</h4>
			<!-- slot -->
			<slot name="image1"></slot>
			<p v-for="(paragraph, i) in text" :key="i">
				{{paragraph}}
				<br><br>
			</p>
			<slot name="image2"></slot>
		</div>
		<div class="clearfix"> </div>
		<!-- slot -->
		<slot name="addOn"></slot>
	</div>
</template>

<script>
export default {
	props:['imagePath', 'title', 'description', 'pullRight', 'id'],
	computed: {
		background(){
			var path = '../images/' + this.imagePath
			var required = require(`../images/${this.imagePath}`)
			return required
		},
		text(){
			var lines = this.description.split('\n')
			return lines
		}
 	}

}
</script>

