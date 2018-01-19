<template>
    <div class="section main-menu" id="menu" style="padding-top:10px">
		<div class="container">
			<slot name="topImages"></slot>
			<div class="main-menu-bg" style="margin-top: 10px">
				<h3 class="w3layouts-title text-center">our menu</h3>
				<div class="menu-info">
					<!-- Nav tabs -->
					<ul class="nav nav-tabs" role="tablist" style="border-radius: 5px">

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
								{{m.category}}
							</a>
						</li>
					</ul>
				</div>
				<!-- Tab panes -->
				<div class="tab-content">
					<div
						v-for="(m, index) in mainMenu"
						:key="index"
						:id="m.category.toLowerCase().replace(/\s/g, '-')"
						:class="{active: (index==0)}"
						role="tabpanel"
						class="tab-pane"
						style="">
						<div v-if="m.subtitle" class="menu-title" style="width: 100%"><h4>{{m.subtitle}}</h4><br><br></div>
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
	</div>
</template>

<style scoped>
.tab-pane.active {
	display: flex;
	flex-wrap: wrap;
}
.agileinfo-tab-content1 div {
	flex: 1,

}
.main-menu {
    border-top: 5px solid rgb(88, 16, 18);
    /* border-bottom: 4px dashed yellow; */
    /* -webkit-box-shadow: 0px -6px 32px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px -6px 32px -8px rgba(0,0,0,0.75);
    box-shadow: 0px -6px 32px -8px rgba(0,0,0,0.75); */
    padding: 5em 0 10px;
    /* background:url(../images/mbg.png) no-repeat center fixed; */
    background-color: rgb(126, 23, 27);
    background-size:cover;
	min-height:564px;
}
.main-menu-bg {
    border-radius: 10px;
    /* border: 4px dotted yellow; */
    background: url(../../images/parchment.jpg);
    /* opacity: 0.8; */
    padding: 1em 3em 3em;
}
</style>


<script>
import { mainMenu } from './Menu'

export default {
	data(){
		return {
			mainMenu: mainMenu,
			// downloadUrl: require('../../assets/el-agave-menu.pdf'),
			// mainMenu:
		}
	},
	// mixins: ['mixin']
	// computed: {
	// 	mainMenu(){
	// 		return menu
	// 	}
	// }
}
</script>

