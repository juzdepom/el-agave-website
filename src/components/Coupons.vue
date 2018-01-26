<template>
    <div
        id="coupons"
        class="section broun-block parallax"
        style="padding-top: 0; background-color: rgb(126, 23, 27); background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover;"
        :style="{'background-image':'url(' + background + ')'}">
        <slot name="imageTop" ></slot>
        <div style="display: flex; justify-content: center">
            <div style="background-color: rgba(165, 28, 33, 0.76); width: 50%; margin-top: 10px; padding: 0px 0 50px 0; display: flex; justify-content: center;">
                <div>
                    <h3 class="w3layouts-title text-center"
                        style="color: white; padding-top: 30px">Deals</h3>
                    <div class="row text-center"
                        style="width: 80%; margin: auto; padding-top:10px; ">
                        <p style="color:white" v-html="description" >

                        </p>
                        <a
                            href="../src/assets/el-agave-coupon.pdf"
                            style="margin-top: 30px;"
                            class="btn btn-success">
                            <span class="fa fa-cloud-download" aria-hidden="true"></span>
                            &nbsp;&nbsp;Download Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <slot name="imageBottom"></slot>
    </div>
</template>

<script>
export default {
    props: ['imagePath', 'description'],
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



