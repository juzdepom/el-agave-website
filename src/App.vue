<template>
  <div id="app">
		<navbar-component :navItems="navItems"></navbar-component>
		<banner-text-component></banner-text-component>

		<menu-component>
      <images-component slot="topImages" :imagePaths="dishImagesMenuTop"></images-component>
      <images-component slot="bottomImages" :imagePaths="dishImagesMenuBottom"></images-component>
    </menu-component>
    <!-- <images-component :imagePaths="dishImagesMenuBottom"></images-component> -->
		<about-component :title="about.title" :description="about.description" :imagePath="about.imagePath" :pullRight="about.pullRight"></about-component>
		<locations-component></locations-component>
    <about-component :title="student.title" :description="student.description" :imagePath="student.imagePath" :pullRight="student.pullRight"></about-component>
		<testimonials-component></testimonials-component>

    <coupons-component imagePath="coupons.jpg">
      <images-component :imagePaths="dishImagesCoupons"></images-component>
    </coupons-component>

    <footer-component>
      Copyright © 2017 El Agave Restaurant. All rights reserved.
      <br> Coded with ♥ by Julia Gao Miller | Design by W3layouts
    </footer-component>


  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue'
import BannerText from './components/BannerText.vue'
import Testimonials from './components/Testimonials.vue'
import Locations from './components/Locations/Locations.vue'
import Menu from './components/Menu/Menu.vue'
import About from './components/About.vue'
import Coupons from './components/Coupons.vue'
import Images from './components/Images.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    NavbarComponent: Navbar,
		TestimonialsComponent: Testimonials,
		LocationsComponent: Locations,
		MenuComponent: Menu,
		AboutComponent: About,
		BannerTextComponent: BannerText,
    CouponsComponent: Coupons,
    ImagesComponent: Images,
    FooterComponent: Footer,
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

      ],
      about: {
        title: "About Us",
        description: "El Agave offers fresh, authentic Mexican food in a comfortable family environment at an affordable price. We only use the freshest ingredients to prepare all of our dishes – they are all prepared daily by our family in order to ensure the quality of taste for which El Agave has become known for. So come in, taste the flavor of food and enjoy the casual ambiance and attentive servers.\n If you are in the mood for sizzling fajitas, mouth-watering enchildadas or a great taco salad all in a clean, fun, comfortable atmosphere, you will not be disappointed. We are family-owned, and do our best to treat each of our customers as one of our own family. We look forward to meeting you!",
        imagePath: "agave-night.jpg",
        pullRight: false,
      },
      student: {
        title: "We Support Our Students",
        description: "WWU, WCC and BTC get 20% off when they present an id!",
        imagePath: "wwu.jpg",
        pullRight: false,
      },
      dishImagesMenuTop: ['plate1.jpg', 'plate2.jpg', 'plate3.jpg', 'plate4.jpg'],
      dishImagesMenuBottom: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
      dishImagesCoupons: ['dish1.jpg', 'dish2.jpg', 'dish3.jpg', 'dish4.jpg']
    }
  }
}

</script>

