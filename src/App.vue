<template>
  <div id="app">
    <div v-if="!isAdmin">
      <navbar-component :navItems="navItems"></navbar-component>

      <banner-component></banner-component>

      <menu-component :hours="hours" :mainMenu="menu">
        <images-component slot="topImages" :imagePaths="dishImagesMenuTop"></images-component>
        <images-component slot="bottomImages" :imagePaths="dishImagesMenuBottom"></images-component>
      </menu-component>

      <about-component id="about"
        :title="about.title"
        :description="about.description"
        :imagePath="about.imagePath"
        :pullRight="about.pullRight">
        <!-- family photos -->
        <div slot="image1">
            <img src="./images/cruz.jpg"
              class="shadow-down"
              style="border-radius: 10px; height: 150px; margin-bottom:30px"/>
        </div>
        <!-- <div slot="image2">
          <img src="./images/family.jpg"
              class="shadow-down"
              style="border-radius: 10px; height: 150px;"/>
        </div> -->
        <!-- taco truck -->
        <div slot="addOn" class="pull-right row hidden-xs">
          <img
            src="./images/taco-truck.png"
            class="pull-right"
            style="margin: 0 30px 20px 20px; height: 150px; display: table-cell; vertical-align: bottom;"/>
          <h4 class="pull-right text-outline" style="margin: 60px 0 0 50px ; ">
          We also have a Taco Truck!<br><h5 class="pull-left" style="font-size: 25px">700 Ohio Street, Bellingham, WA</h5>
          </h4>
        </div>
      </about-component>

      <locations-component :samish-number="numbers.samish" :clubhouse-number="numbers.clubhouse" :harris-number="numbers.harriss"></locations-component>

      <about-component :title="student.title" :description="student.description" :imagePath="student.imagePath" :pullRight="student.pullRight"></about-component>

      <testimonials-component></testimonials-component>

      <coupons-component imagePath="coupons.jpg" :description="couponDescription">
        <images-component slot="imageTop" :imagePaths="dishImagesCouponsTop"></images-component>
        <images-component slot="imageBottom" :imagePaths="dishImagesCouponsBottom"></images-component>
      </coupons-component>

      <footer-component>
        <h3>Thank you for visiting!</h3>
        <a class="btn btn-success admin" @click="login()" href="#admin">Admin Site</a>
        <br>Copyright © 2017 El Agave Restaurant. All rights reserved.
        <br> Coded with ♥ by Julia Gao Miller | Design by W3layouts
      </footer-component>
    </div>
    <admin-component v-if="isAdmin" :backToMain="backToMain" ></admin-component>
  </div>

</template>

<style>
  .admin {
    margin: 15px 0 15px 0;
  }
  .text-outline {
    text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  }
</style>


<script>
import Admin from './Admin.vue'
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
    AdminComponent: Admin,
  },
  created(){
    // if(localStorage.getItem('isAdmin')!=null){
    //   var isAdmin = localStorage.getItem('isAdmin')
    //   console.log('HEREEEE', localStorage.getItem('isAdmin'))
    //   this.isAdmin = isAdmin;
    // } else {
    //   this.isAdmin = false;
    //   this.localStorage.setItem('isAdmin', false)
    // }
    this.$store.dispatch('getData')
  },
  // beforeCreate(){
  //   //if page reloads, then stays in admin website;

  //   if(!isAdmin){ this.$store.dispatch('getData') }

  // },
  methods: {
    // admin site
    login(){
      var loginSuccessful = true;
      if(loginSuccessful) {
        this.isAdmin = true;
        // localStorage.setItem('isAdmin', true)
      }
    },
    backToMain(){
      this.isAdmin = false;
      // localStorage.setItem('isAdmin', false)
    }
  },
  computed:{
    // isAdmin(){
    //   return localStorage.getItem('isAdmin')
    // },
    about(){
      var description = this.$store.getters.description
      var about = {
        title: "About Us",
        description: description,
        imagePath: "agave-night.jpg",
        pullRight: false,
      }
      return about
    },
    student(){
      var description = this.$store.getters.description
      var student = {
        title: "We Support Our Students",
        description: description,
        imagePath: "wwu.jpg",
        pullRight: false,
      }
      return student
    },
    couponDescription(){
      return this.$store.getters.deals
    },
    numbers(){
      return this.$store.getters.numbers
    },
    hours(){
      return this.$store.getters.openHours
    },
    menu(){
      return this.$store.getters.menu
    }
  },

  data () {
    return {
      isAdmin: false,
      navItems: [
          // {link: `#about`, title: 'About'},
          {link: `#menu`, title: 'Menu'},
          {link: `#about`, title: 'About'},
          {link: `#locations`, title: "Locations"},
          {link: `#testimonials`, title: 'Fan Mail'},
          {link: `#coupons`, title: 'Deals'},

      ],
      dishImagesMenuTop: ['plate1.jpg', 'plate2.jpg', 'plate3.jpg', 'plate4.jpg'],
      dishImagesMenuBottom: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
      dishImagesCouponsTop: ['dish1.jpg', 'dish2.jpg', 'dish3.jpg', 'dish4.jpg'],
      dishImagesCouponsBottom: ['5.jpg', '6.jpg', '7.jpg', '8.jpg'],
    }
  }
}

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 80
        });
    });
  });

</script>

