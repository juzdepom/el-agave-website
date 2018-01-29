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

      <locations-component :samishNumber="numbers.samish" :clubhouseNumber="numbers.clubhouse" :harrisNumber="numbers.harris"></locations-component>

      <about-component :title="student.title" :description="student.description" :imagePath="student.imagePath" :pullRight="student.pullRight"></about-component>

      <testimonials-component></testimonials-component>

      <coupons-component imagePath="coupons.jpg" :description="couponDescription">
        <images-component slot="imageTop" :imagePaths="dishImagesCouponsTop"></images-component>
        <images-component slot="imageBottom" :imagePaths="dishImagesCouponsBottom"></images-component>
      </coupons-component>

      <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
        <div class="modal-dialog" >
            <div class="modal-content" style="background-color: white; padding-top: 0" >
              <div class="modal-body" style="padding-top: 0">
                  <p style="color: black; padding-bottom: 0px; padding-top: 5px;">Please enter the admin password.</p>
                  <input type="password" class="form-control" v-model="inputPassword">
                  <p style="padding-bottom: 0px; padding-top: 0px; color: red;" v-if="incorrectPassword">Incorrect password.</p>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-danger pull-left" data-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary" @click="login()">Enter</button>
              </div>
            </div>
        </div>
      </div>

      <footer-component>
        <h3>Thank you for visiting!</h3>
        <a class="btn btn-success admin" href="#admin" data-toggle="modal" data-target="#loginModal">Admin Site</a>
        <br>Copyright © 2017 El Agave Restaurant. All rights reserved.
        <br> Coded with ♥ by
        <a href="https://www.linkedin.com/in/julia-gao-miller/"
          target="_blank"
          style="color: white; text-decoration: underline">
        Julia Gao Miller</a> | Design by W3layouts
      </footer-component>
    </div>
    <admin-component v-if="isAdmin" :backToMain="backToMain" :admin="admin" ></admin-component>
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
    this.$http.get('data.json')
      .then(response => {
          return response.json()
      })
      .then(data => {
          this.admin = data;
      })
  },
  data () {
    return {
      password: "josecruz6.cl",
      inputPassword: "",
      incorrectPassword: false,
      admin: {},
      isAdmin: false,
      navItems: [
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
  },
  methods: {
    // admin site
    login(){
      if(this.password == this.inputPassword){
        this.incorrectPassword = false;
        this.isAdmin = true;
        this.inputPassword = "";
        $('#loginModal').modal('hide');
      } else {
        this.incorrectPassword = true;
      }
    },
    backToMain(){
      this.isAdmin = false;
      // localStorage.setItem('isAdmin', false)
    }
  },
  computed:{
    about(){
      var description = this.admin.aboutUs
      var about = {
        title: "About Us",
        description: description,
        imagePath: "agave-night.jpg",
        pullRight: false,
      }
      return about
    },
    student(){
      var description = this.admin.supportStudents
      var student = {
        title: "We Support Our Students",
        description: description,
        imagePath: "wwu.jpg",
        pullRight: false,
      }
      return student
    },
    couponDescription(){
      return this.admin.deals
    },
    numbers(){
      return this.admin.numbers
    },
    hours(){
      return this.admin.openHours
    },
    menu(){
      return this.admin.menu
    }
  },
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

