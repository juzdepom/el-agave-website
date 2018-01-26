<template>
    <div class="section main-menu" style="padding-top:10px">
		<div class="container">
			<!-- open hours -->
			<card-component id="hours">
				<h3 class="w3layouts-title text-center">Open Hours</h3><br>
				<h2 class="text-center" v-html="hours">
				</h2>
				<br>
				<h2 style="color: #a51c21" class="text-center">
					Available for Catering and Orders To Go<br>
					(see <a class="scroll" href="#locations">locations</a> for phone number)</h2>
			</card-component>
			<!-- images -->
			<slot name="topImages"></slot>
			<div id="menu" class="main-menu-bg" style="margin-top: 10px">
				<h3 class="w3layouts-title text-center">our menu</h3>
				<div class="menu-info">
        			<search-bar-component placeholder="Search entire menu..." v-model="searchText"></search-bar-component>
					<!-- Nav tabs -->
					<ul v-if="searchText.length < 1" class="nav nav-tabs" role="tablist" style="border-radius: 5px">
						<li
							v-for="(m, index) in mainMenu"
							:key="index"
							role="presentation"
							:class="{active : (index==0)}">
							<a
								:href="'#' + m.category.toLowerCase().replace(/\s/g, '-')"
								:aria-controls="m.category.toLowerCase().replace(/\s/g, '-')"
								role="tab"
								data-toggle="tab">
								{{m.category}} <span style="font-size: 12px">({{m.menu.length}})</span>
							</a>
						</li>
					</ul>
				</div>
				<!-- Tab panes -->
					<div class="tab-content">
						<!-- Main menu -->
						<div v-if="searchText.length < 1"
							v-for="(m, index) in mainMenu"
							:key="index"
							:id="m.category.toLowerCase().replace(/\s/g, '-')"
							:class="{active: (index==0)}"
							role="tabpanel"
							class="tab-pane">
							<div
								v-if="m.subtitle"
								class="menu-title"
								style="width: 100%; text-align: center; color: #a51c21">
								<h2>{{m.subtitle}}</h2><br>
							</div>
								<div style="" v-for="(item, index) in m.menu" :key="index" class="col-lg-3 col-md-4 col-sm-6 col-xs-12 agileinfo-tab-content1">
									<div class="menu-text-right1">
										<div class="menu-title">
											<h4>{{item.title}}</h4>
										</div>
										<div class="menu-price">
											<h4 class="price-clr">$ {{((item.price + 0.5)% 1 == 0 ) ? item.price + '0' : item.price}}</h4>
										</div>
										<div class="clearfix"></div>
										<p style="line-height: 1.1; color: #a51c21">{{item.redText}}</p>
										<p style="line-height: 1.1;" v-html="item.blackText"></p>
									</div>
								</div>
							<div class="clearfix"></div>
						</div>


					</div>
					<!-- Filtered menu -->

						<div class="tab-pane active">
							<div v-if="searchText.length >= 1" v-for="(item, index) in filteredMenu" :key="index" class="col-lg-3 col-md-4 col-sm-6 col-xs-12 agileinfo-tab-content1">
								<div class="menu-text-right1">
									<div class="menu-title">
										<h4>{{item.title}}</h4>
									</div>
									<div class="menu-price">
										<h4 class="price-clr">$ {{((item.price + 0.5)% 1 == 0 ) ? item.price + '0' : item.price}}</h4>
									</div>
									<div class="clearfix"></div>
									<p style="line-height: 1.1; color: #a51c21">{{item.redText}}</p>
									<p style="line-height: 1.1;" v-html="item.blackText"></p>
								</div>
							</div>
						</div>
				</div>
				<!-- Download button -->
				<div style="display: flex; justify-content: center; text-align: center; margin-top: 40px" >
					<a
						href="../../src/assets/el-agave-menu.pdf"
						style="position: relative; margin: 0 auto"
						class="btn btn-success ">
						<span class="fa fa-cloud-download" aria-hidden="true"></span>
						&nbsp;&nbsp;Download Menu PDF
					</a>
				</div>
			</div>
			<slot name="bottomImages"></slot>
        </div>
</template>

<script>
import { mainMenu } from './Menu'
import Card from './Card.vue'
import Searchbar from './Searchbar.vue'

export default {
	props: ['hours', 'mainMenu'],
	components: {
	SearchBarComponent: Searchbar,
	CardComponent: Card,
	},
	data(){
		return {
			searchText: "",
		}
	},
	computed: {
		filteredMenu(){
			var array = []
			this.mainMenu.forEach((category, index) => {
				var text = category.category
				category.menu.forEach((dish, index) => {
					text = dish.title + " " + dish.redText + " " + dish.price + " " + dish.blackText
					text = text.replace('undefined', '');
					text = text.toLowerCase();
					if(text.indexOf(this.searchText.toLowerCase()) >= 0 ){
						array.push(dish)
					}
				});
			});
			return array;
		}
	},
  methods: {
    searchInput(event){
      console.log(event)
    }
  }
}
</script>

<style scoped>
.menu-info {
    margin-top: 10px;
}
.tab-pane.active {
	display: flex;
	flex-wrap: wrap;
}
.agileinfo-tab-content1 div {
	flex: 1,
}
.main-menu {
    border-top: 5px solid rgb(88, 16, 18);
    padding: 5em 0 10px;
    background-color: rgb(126, 23, 27);
    background-size:cover;
	min-height:564px;
}
.main-menu-bg {
    border-radius: 10px;
	background: url(../../images/parchment.jpg);
	/* background-repeat: no-repeat; */
    padding: 1em 3em 3em;
}
.slide-enter {
    opacity: 0;
}
.slide-enter-active {
animation: slide-in 0.3s ease-out forwards;
transition: opacity 0.3s;
}
.slide-leave {
}
.slide-leave-active {
animation: slide-out 0.3s ease-out forwards;
transition: opacity 0.3s;
opacity: 0;
}
@keyframes slide-in {
from {
	transform: translateY(-20px);
}
to {
	transform: translateY(0);
}
}
@keyframes slide-out {
from {
	transform: translateY(0);
}
to {
	transform: translateY(-20px);
}
}

</style>
