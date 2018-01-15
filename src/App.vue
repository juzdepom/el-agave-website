<template>
  <div id="app">
    <div class="agile-banner-main" id="home">
		<div class="banner-layer">
			<div class="header-main">
				 <div class="container">
					<navbar-component :navItems="navItems"></navbar-component>
				</div>
			</div>

			<div class="container">
				<div class="banner-top">
					<div class="banner-info">
						<h1>
							<a href="index.html">
								El Agave Restaurant</a>
						</h1>
						<h3>Fresh, authentic Mexican food in a comfortable family environment at an affordable price. </h3>

						<div class="about-p text-center">
							<span class="sub-title"></span>
							<span class="fa fa-cutlery" aria-hidden="true" style="color:#A51D21"></span>
							<span class="sub-title"></span>
						</div>
						<p><i>Family Owned</i></p>
					</div>
				</div>
			</div>
		</div>

	</div>
	<locations-component></locations-component>
	<testimonials-component></testimonials-component>


  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue'
import Testimonials from './components/Testimonials.vue'
import Locations from './components/Locations/Locations.vue'

export default {
  name: 'app',
  components: {
    NavbarComponent: Navbar,
		TestimonialsComponent: Testimonials,
		LocationsComponent: Locations,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      navItems: [
          // {link: `#about`, title: 'About'},
          {link: `#menu`, title: 'Menu'},
          // {link: `#team`, title: 'Team'},
          // {link: `#testimonials`, title: 'Testimonials'},
          {link:  `#locations`, title: "Locations"},
          {link: `#contact`, title: 'Contact'},

      ]
    }
  }
}

</script>

