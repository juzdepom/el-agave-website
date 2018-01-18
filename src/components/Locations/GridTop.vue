<template>
    <div class="col-md-6 about-right about-right-flex">
        <div class="about-bottom-text custom-background" style="" :style="{'background-image':'url(' + background + ')'}">
            <!-- <div style="background-color: rgb(165, 29, 33); height: 100%;"> -->
            <h4 class="title1">{{entry.title}}</h4>
            <h3 class="title1">
                <br><br>{{entry.address}}
                <br>{{entry.city}}, {{entry.state}}, {{entry.zip}}
                <br><br><span class="fa fa-phone" aria-hidden="true"></span>&nbsp;&nbsp;{{entry.number}}
            </h3>
            <!-- </div> -->
        </div>
        <div class="about-bottom-grid">
            <map-component :location="entry"></map-component>
        </div>
    </div>
</template>

<script>
import Map from './Map.vue'

export default {
    components: {
        MapComponent: Map,
    },
    props: ['entry'],
    computed: {
        background(){
            // var path = '../../images/' + this.entry.backgroundUrl,
            var required = require(`../../images/${this.entry.backgroundUrl}`)
            return required
		},
    }
}
</script>

<style>
.custom-background {
    border: 4px solid rgb(107, 19, 22);
    background-position: center center;
    background-repeat: no-repeat;
}
.about-bottom-text {
    padding: 5.85em 5em;
    text-align: center;
    position: relative;
    -webkit-transition: .5s all;
    transition: .5s all;
    -moz-transition: .5s all;
}
.about-bottom-text:before {
    content: '';
    position: absolute;
    bottom: -13px;
    left: 50%;
    z-index: 999;
    border-top: 13px solid rgb(107, 19, 22);
    border-right: 13px solid transparent;
    border-left: 13px solid transparent;
    -webkit-transition: .5s all;
    transition: .5s all;
    -moz-transition: .5s all;
}
</style>

