<template>
    <div
        class="section broun-block parallax"
        style="padding-top: 0; background-color: rgb(126, 23, 27); background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover;"
        :style="{'background-image':'url(' + background + ')'}">
        <slot></slot>
        <div style="display: flex; justify-content: center">
            <div style="background-color: rgba(165, 28, 33, 0.76); width: 50%; margin-top: 10px; padding: 0px 0 50px 0; display: flex; justify-content: center;">
                <div>
                    <h3 class="w3layouts-title text-center" style="color: white; padding-top: 30px">Coupons</h3>
                    <div class="row text-center" style="width: 80%; margin: auto; padding-top:10px; ">
                        <p style="color:white" >We've included some coupons for first time customers!<br> Coupons are valid on your phone (or printed) in all three restaurant locations.</p>
                        <button style="margin-top: 30px;" class="btn btn-success">
                            <span class="fa fa-cloud-download" aria-hidden="true"></span>
                            &nbsp;&nbsp;Download Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['imagePath'],
    computed: {
        background(){
            var path = '../images/' + this.imagePath
            var required = require(`../images/${this.imagePath}`)
            return required
        },
    }
}
</script>

<style>
    .parallax {
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>



