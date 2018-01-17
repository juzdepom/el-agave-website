<template>
  <div class="about-grid">
		<div class="col-md-12 about-sub-grid" >
			<div class="col-md-6 about-right about-right-flex">
				<div class="about-bottom-text">
					<h4 class="title1">{{samish.address}}
                        <br>{{samish.city}}, {{samish.state}}, {{samish.zip}}
                        <br><br>{{samish.number}}
                    </h4>
				</div>
				<div class="about-bottom-grid">
                    <map-component :location="samish"></map-component>
				</div>
			</div>
			<div class="col-md-6 about-right about-right-flex">
				<div class="about-bottom-grid">
                    <map-component :location="clubhouse"></map-component>
				</div>
				<div class="about-bottom-text ab1">
					<h4 class="title1">{{clubhouse.address}}
                        <br>{{clubhouse.city}}, {{clubhouse.state}}, {{clubhouse.zip}}
                        <br><br>{{clubhouse.number}}
                    </h4>
				</div>
			</div>
            <div class="col-md-6 about-right about-right-flex">
				<div class="about-bottom-text">
					<h4 class="title1">
                        {{harris.address}}<br>{{harris.city}}, {{harris.state}}, {{harris.zip}}
                        <br><br>{{harris.number}}</h4>
				</div>
				<div class="about-bottom-grid">
                    <map-component :location="harris"></map-component>
				</div>
			</div>

			<div class="clearfix"></div>
		</div>
		<!-- <div class="col-md-6 about-bottom-grid about-bg"></div>
		<div class="clearfix"></div> -->
	</div>
</template>

<script>
import Map from './Map.vue'
export default {
    components: {
        MapComponent: Map,
    },
    data(){
        return {
            samish: {
                address: "207 N Samish Way",
                city: "Bellingham",
                state: "WA",
                zip: "98225",
                number: "360-676-0340"
            },
            clubhouse: {
                address: "4 Club House Circle",
                city: "Bellingham",
                state: "WA",
                zip: "98225",
                number: "360-393-3853"
            },
            harris: {
                address: "1111 Harris Ave",
                city: "Bellingham",
                state: "WA",
                zip: "98225",
                number: "360-733-9900"
            }
        }

    }
}
</script>

