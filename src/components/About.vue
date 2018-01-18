<<template>
  <div class="slid" :style="{'background-image':'url(' + background + ')'}">
	  	<!-- <img src="../images/b1.jpg" width= "100%" style="position: absolute; z-index:1;"/> -->
		<div class="slid-text" :class="{'pull-right': pullRight}">
			<h4>{{title}}</h4>
			<p v-for="(paragraph, i) in text" :key="i">
				{{paragraph}}
				<br><br>
			</p>
		</div>
		<div class="clearfix"> </div>
	</div>
</template>
<script>
export default {
	props:['imagePath', 'title', 'description', 'pullRight'],
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

