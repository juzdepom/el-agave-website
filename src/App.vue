<template>
  <div id="app">
		<navbar-component :navItems="navItems"></navbar-component>
		<banner-text-component></banner-text-component>
		<menu-component></menu-component>
		<about-component></about-component>
		<locations-component></locations-component>
		<testimonials-component></testimonials-component>


  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue'
import BannerText from './components/BannerText.vue'
import Testimonials from './components/Testimonials.vue'
import Locations from './components/Locations/Locations.vue'
import Menu from './components/Menu/Menu.vue'
import About from './components/About.vue'

export default {
  name: 'app',
  components: {
    NavbarComponent: Navbar,
		TestimonialsComponent: Testimonials,
		LocationsComponent: Locations,
		MenuComponent: Menu,
		AboutComponent: About,
		BannerTextComponent: BannerText,
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
          // {link: `#contact`, title: 'Contact'},

      ]
    }
  }
}

</script>

