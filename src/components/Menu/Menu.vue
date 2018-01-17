<template>
    <div class="section main-menu" id="menu">
		<div class="container">
			<div class="main-menu-bg">
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
						class="tab-pane">
						<div v-for="(item, index) in m.menu" :key="index" class="col-lg-3 agileinfo-tab-content1">
							<div class="menu-text-right1">
								<div class="menu-title">
									<h4>{{item.title}}</h4>
								</div>
								<div class="menu-price">
									<h4 class="price-clr">{{item.price}}</h4>
								</div>
								<div class="clearfix"></div>
								<p>{{item.redText}}</p>
							</div>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
        </div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			mainMenu: [
				{
					category: "Appetizers",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						},
						{
						title: "Nachos",
						redText: "",
						price: "$4.95",
						blackText: "",
						},
						{
						title: "Nachos",
						redText: "",
						price: "$4.95",
						blackText: "",
						},
						{
						title: "Nachos",
						redText: "",
						price: "$4.95",
						blackText: "",
						},
						{
						title: "Nachos",
						redText: "",
						price: "$4.95",
						blackText: "",
						},
						{
						title: "Nachos",
						redText: "",
						price: "$4.95",
						blackText: "",
						},
						{
						title: "Nachos",
						redText: "",
						price: "$4.95",
						blackText: "",
						},
						{
						title: "Nachos",
						redText: "",
						price: "$4.95",
						blackText: "",
						},
						{
						title: "Nachos",
						redText: "",
						price: "$4.95",
						blackText: "",
						},







					]
				},
				{
					category: "Side Orders",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						},
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						}

					],
				},
				{
					category: "Drinks",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						}
					],
				},
				{
					category: "Kids Menu",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						}
					],
				},
				{
					category: "Chicken",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						}
					],
				},
				{
					category: "Beef",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						}
					],
				},
				{
					category: "Pork",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						}
					],
				},
				{
					category: "Egg",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						}
					],
				},
				{
					category: "Combinations",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						}
					],
				},
				{
					category: "Fajitas",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						}
					],
				},
				{
					category: "Burritos",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						}
					],
				},
				{
					category: "Enchiladas",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						}
					],
				},
				{
					category: "Seafood",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						}
					],
				},
				{
					category: "Burgers",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						}
					],
				},
				{
					category: "Sandwiches",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						}
					],
				},
				{
					category: "Soups",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						}
					],
				},
				{
					category: "Salads",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						}
					],
				},
				{
					category: "Vegetarian",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						}
					],
				},
				{
					category: "★ Daily Specials",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						}
					],
				},
				{
					category: "★ Lunch Specials",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						}
					],
				},

				{
					category: "Lunch Express",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						}
					],
				},
				{
					category: "Dessert",
					menu: [
						{
						title: "Nachos",
						redText: "",
						price: 4.95,
						blackText: "",
						}
					],
				},

			]
		}
	}
}
</script>

