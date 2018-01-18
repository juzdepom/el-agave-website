<template>
  <div id="app">
		<navbar-component :navItems="navItems"></navbar-component>

    <banner-component></banner-component>

		<menu-component>
      <images-component slot="topImages" :imagePaths="dishImagesMenuTop"></images-component>
      <images-component slot="bottomImages" :imagePaths="dishImagesMenuBottom"></images-component>
    </menu-component>

		<about-component id="about"
      :title="about.title"
      :description="about.description"
      :imagePath="about.imagePath"
      :pullRight="about.pullRight">
      <div slot="images" style="display: flex;">
        <img src="./images/cruz.jpg"
          class="shadow-down"
          style="height:150px; border-radius: 10px 0 0 10px"/>
        <img src="./images/family.jpg"
          class="shadow-down"
          style="height:150px;margin-bottom: 35px; border-radius: 0 10px 10px 0"/>
      </div>
      <div slot="addOn" class="pull-right row">
        <img
          src="./images/taco-truck.png"
          class="pull-right"
          style="margin: 0 30px 20px 20px; height: 150px; display: table-cell; vertical-align: bottom;"/>
        <h4 class="pull-right" style="margin: 60px 0 0 50px ; ">
        We also have a Taco Truck!<br><h5 class="pull-left" style="font-size: 25px">700 Ohio Street, Bellingham, WA</h5>
        </h4>
      </div>
    </about-component>

		<locations-component></locations-component>

    <about-component :title="student.title" :description="student.description" :imagePath="student.imagePath" :pullRight="student.pullRight"></about-component>

    <testimonials-component></testimonials-component>

    <coupons-component imagePath="coupons.jpg">
      <images-component slot="imageTop" :imagePaths="dishImagesCouponsTop"></images-component>
      <images-component slot="imageBottom" :imagePaths="dishImagesCouponsBottom"></images-component>
    </coupons-component>

    <footer-component>
      <h3>Thank you for visiting!</h3><br>
      Copyright © 2017 El Agave Restaurant. All rights reserved.
      <br> Coded with ♥ by Julia Gao Miller | Design by W3layouts
    </footer-component>


  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue'
import Banner from './components/Banner.vue'
import Testimonials from './components/Testimonials/Testimonials.vue'
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
		BannerComponent: Banner,
    CouponsComponent: Coupons,
    ImagesComponent: Images,
    FooterComponent: Footer,
  },
  data () {
    return {
      navItems: [
          // {link: `#about`, title: 'About'},
          {link: `#menu`, title: 'Menu'},
          {link: `#about`, title: 'About'},
          {link:  `#locations`, title: "Locations"},
          {link: `#testimonials`, title: 'Fan Mail'},
          {link: `#coupons`, title: 'Deals'},

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
      dishImagesCouponsTop: ['dish1.jpg', 'dish2.jpg', 'dish3.jpg', 'dish4.jpg'],
      dishImagesCouponsBottom: ['5.jpg', '6.jpg', '7.jpg', '8.jpg'],
    }
  }
}

</script>

