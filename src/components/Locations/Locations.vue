<template>
    <div id="locations">
        <div class="about-grid shadow-down" style="display: flex" >
		<div class="row" style="width: 100%;" >
            <grid-top-component class="col-sm-4 col-12" :entry="samish"></grid-top-component>
            <grid-top-component class="col-sm-4 col-12" :entry="clubhouse"></grid-top-component>
            <!-- <grid-bottom-component class="col-sm-4 col-12" :entry="clubhouse"></grid-bottom-component> -->
            <grid-top-component class="col-sm-4 col-12" :entry="harris"></grid-top-component>
			<div class="clearfix"></div>
		</div>
	</div>
    </div>
</template>

<script>
import Map from './Map.vue'
import GridTop from './GridTop.vue'
import GridBottom from './GridBottom.vue'

export default {
    components: {
        MapComponent: Map,
        GridTopComponent: GridTop,
        GridBottomComponent: GridBottom,
    },
    computed: {
    },
    data(){
        return {
            samish: {
                backgroundUrl: "red-texture.jpg",
                title: "Location #1",
                address: "207 N Samish Way",
                city: "Bellingham",
                state: "WA",
                zip: "98225",
                number: "360-676-0340"
            },
            clubhouse: {
                backgroundUrl: "red-texture.jpg",
                title: "Location #2",
                address: "4 Club House Circle",
                city: "Bellingham",
                state: "WA",
                zip: "98225",
                number: "360-393-3853"
            },
            harris: {
                backgroundUrl: "red-texture.jpg",
                title: "Location #3",
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

<style>
    .title1 {
        color: white;
    }

</style>

