<template>
    <div class="col-md-12 about-right about-right-flex" style="background-color: transparent">
        <div class="about-bottom-grid">
            <map-component :location="entry"></map-component>
        </div>
        <div class="about-bottom-text ab1 custom-background" :style="{'background-image':'url(' + background + ')'}">
            <h4 class="title1">{{entry.title}}</h4>
            <h3 class="title1">
                <br><br>{{entry.address}}
                <br>{{entry.city}}, {{entry.state}}, {{entry.zip}}
                <br><br><span class="fa fa-phone" aria-hidden="true"></span>&nbsp;&nbsp;{{entry.number}}
            </h3>
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
.about-bottom-text.ab1 {
    /* background-color: #0e7758; */
    /* color: #fff; */
}
.about-bottom-text.ab1:before {
    transform: rotate(180deg);
    -webkit-transform:rotate(180deg);
    border-top: 13px solid rgb(107, 19, 22);
    border-right: 13px solid transparent;
    border-left: 13px solid transparent;
    bottom: 100%;
}
</style>

