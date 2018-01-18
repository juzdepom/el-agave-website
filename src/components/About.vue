<template>
  	<div :id="id" class="slid" :style="{'background-image':'url(' + background + ')'}">
		<div class="slid-text" :class="{'pull-right': pullRight}">
			<h4>{{title}}</h4>
			<slot name="images"></slot>
			<p v-for="(paragraph, i) in text" :key="i">
				{{paragraph}}
				<br><br>
			</p>
		</div>
		<div class="clearfix"> </div>
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

