<template>
    <div class="item" :class="{ active: isActive }">
        <div v-for="(review, i) in reviews" :key="i" class="col-md-4 col-sm-6">
            <div class="block-text rel zmin">
                <h6>{{review.title}}</h6>
                <div class="mark">Rating:
                    <span class="rating-input">
                        <span v-for="(num, i) in review.stars" :key="i" class="fa fa-star"></span>
                    </span>
                </div>
                <p>{{review.text}}</p>
            </div>
            <div class="person-text rel">
                <img :src="imageUrls[i]" style="height: 60px; border-radius: 50px" />
                <h5>{{review.name}}</h5>
                <i>{{review.origin}}<br> {{review.date}}</i>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</template>

<style>
    .rel {
        position: relative;
        background: white;
        padding: 2em;
    }
    .person-text h5 {
        color: white;
        display: block;
        font-size: 14px;
        margin-top: 3px;
        font-family: 'PT Sans', sans-serif;
    }
    .person-text i {
        color: white;
        font-size: 13px;
    }
</style>


<script>

export default {
    props: ['isActive', 'reviews'],
    computed: {
        imageUrls(){
            var array = []
            this.reviews.forEach(review => {
                // var path = '../../images/' + review.imageUrl
                var required = require(`../../images/${review.imageUrl}`)
                array.push(required)
            })
            return array
        }
    }
}
</script>

