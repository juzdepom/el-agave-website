<template>
    <div class="row">
        <div id="carousel-reviews"
            class="carousel slide"
            data-ride="carousel">
            <div class="carousel-inner">
                <carousel-view-component isActive=true :reviews="pageOne"></carousel-view-component>
                <div class="item">
                    <div v-for="(review,i) in pageTwo" :key="i" class="col-md-4 col-sm-6 view-testi">
                        <div class="block-text rel zmin">
                            <h6>{{review.title}}</h6>
                            <div class="mark">My rating:
                                <span class="rating-input">
                                    <span v-for="(x, i) in review.stars" :key="i" class="fa fa-star"></span>
                                </span>
                            </div>
                            <p>{{review.text}}</p>

                        </div>
                        <div class="person-text rel">
                            <img class="profile" :src="pageTwoUrls[i]" alt="" />
                            <h5>{{review.name}}</h5>
                            <i>{{review.origin}}<br>{{review.date}}</i>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="item">
                    <div v-for="(review,i) in pageThree" :key="i" class="col-md-4 col-sm-6 view-testi">
                        <div class="block-text rel zmin">
                            <h6>{{review.title}}</h6>
                            <div class="mark">My rating:
                                <span class="rating-input">
                                    <span v-for="(x, i) in review.stars" :key="i" class="fa fa-star"></span>
                                </span>
                            </div>
                            <p>{{review.text}}</p>

                        </div>
                        <div class="person-text rel">
                            <img class="profile" :src="pageThreeUrls[i]" alt="" />
                            <h5>{{review.name}}</h5>
                            <i>{{review.origin}}<br>{{review.date}}</i>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            <a class="left carousel-control" href="#carousel-reviews" role="button" data-slide="prev">
                <span class="fa fa-angle-left"></span>
            </a>
            <a class="right carousel-control" href="#carousel-reviews" role="button" data-slide="next">
                <span class="fa fa-angle-right"></span>
            </a>
        </div>
    </div>
</template>

<style>
    .profile {
        height: 60px;
        border-radius: 50px;
    }
</style>


<script>
import CarouselView from './CarouselView.vue'

export default {
    components: {
        CarouselViewComponent: CarouselView,
    },
    computed: {
        pageTwoUrls(){
            var array = []
            this.pageTwo.forEach(review => {
                // var path = '../../images/' + review.imageUrl
                var required = require(`../../images/${review.imageUrl}`)
                array.push(required)
            })
            return array
        },
        pageThreeUrls(){
            var array = []
            this.pageThree.forEach(review => {
                // var path = '../../images/' + review.imageUrl
                var required = require(`../../images/${review.imageUrl}`)
                array.push(required)
            })
            return array
        }
    },
    data(){
        return {
            pageOne: [
                {
                    name: "James J.",
                    origin: "Portland, OR",
                    title: "Be sure to ask for the super margarita!",
                    text: "This is a pretty great restaurant. They take great care of you, they don't mind if you come in within the last hour that they're open, and they're very very nice. The food is delicious and you can find a very wide assortment of different Mexican dishes here. Our favorite dish is the DOS amigos which consists of bacon wrapped shrimp and Carne Asada and one huge plate which is shareable by two people. Be sure to ask for the super margarita you won't be disappointed. You won't find a bad waiter - instead you'll find nothing but great service and great food!",
                    stars: 5,
                    date: "8/18/2017",
                    imageUrl: "james-portland.jpg"
                },
                {
                    name: "Jan B.",
                    title: "Eight page menu!",
                    origin: "Bellingham, WA",
                    text: "Wow! My new favorite Mexican Restaurant.  An unbelievable eight page menu.  Something to please everyone in the family.  My young grandchildren are very picky eaters and the menu included a special section just for them!  Service was impeccable.  It is a fun friendly place.  The food was exceptional.  I just can't say enough good things about this amazing restaurant. I will be a regular from now on!",
                    stars: 5,
                    date: "1/4/2018",
                    imageUrl: "jan-bellingham.jpg"
                },
                {
                    name: "Rex B.",
                    title: "The manager was my server.",
                    origin: "Bellingham, WA",
                    text: "I was very pleased with the server/service that I was given from the moment I came in. The server was also the manager and he seated me, had the Pico de Gallo, salsa and chips within moments of being seated. Grabbed a lunch special and in less than 5 minutes, it was hot and fresh sitting in front of me. Every few minutes they came by to check if I needed anything while enjoying the very flavorful dish. Finished up and had to leave back to work, in under 30 minutes. The food was that flavor that we grew up with in Mexican restaurants that we loved and still love today. The prices it really good. I will be returning to this warm and comfortable place again.",
                    stars: 4,
                    date: "12/20/2018",
                    imageUrl: "rex-bellingham.jpg"

                },

            ],
            pageTwo: [
                {
                    name: "Dylan O.",
                    title: "They Treat you like a real amigo.",
                    origin: "Spokane, WA",
                    text: "Two thumbs way up for El Agave. They are extremely friendly and cool in this place. They opened 15 minutes early so I could get my paws on a 32 oz Margo and seafood enchilada, which was terrific by the way. They treat you like a real amigo. My El Agave experience was awesome even though I like going to Jalepenos, I would make the claim that El Agave is the top spot for Mexican in Bellingham.",
                    stars: 5,
                    date: "11/28/2017",
                    imageUrl: "dylan-spokane.jpg"
                },
                {
                    name: "Catherine O.",
                    title: "I had a tough day. The host patted me on the back.",
                    origin: "Spokane, WA",
                    text: "Two thumbs way up for El Agave. They are extremely friendly and cool in this place. They opened 15 minutes early so I could get my paws on a 32 oz Margo and seafood enchilada, which was terrific by the way. They treat you like a real amigo. My El Agave experience was awesome even though I like going to Jalepenos, I would make the claim that El Agave is the top spot for Mexican in Bellingham.",
                    stars: 5,
                    date: "11/28/2017",
                    imageUrl: "catherine-spokane.jpg"
                },
                {
                    name: "Tasia B.",
                    title: "Opened 15 minutes early for me.",
                    origin: "Redmond, WA",
                    text: "Two thumbs way up for El Agave. They are extremely friendly and cool in this place. They opened 15 minutes early so I could get my paws on a 32 oz Margo and seafood enchilada, which was terrific by the way. They treat you like a real amigo. My El Agave experience was awesome even though I like going to Jalepenos, I would make the claim that El Agave is the top spot for Mexican in Bellingham.",
                    stars: 5,
                    date: "9/29/2017",
                    imageUrl: "tasia-redmond.jpg"
                },

            ],
            pageThree: [
                {
                    name: "Red B.",
                    title: "Happy Hour margaritas are the bomb.",
                    origin: "Seattle, WA",
                    stars: 5,
                    text: "Came here with the girlfriend for happy hour and got a couple margaritas. They're happy hour lime margaritas on the rocks are bomb and won't break the bank even if you each get 2 or 3...or 4. I ordered the Pollo Asado (my go to) and it was pretty amazing. Nice and filling.",
                    date: "10/04/2016",
                    imageUrl: "red-seattle.jpg"
                },
                {
                    name: "Kyle K.",
                    title: "I've been coming here for years.",
                    origin: "Bellingham, WA",
                    stars: 5,
                    text: "I've been coming here for a few years now and quality and sizes have been very consistent. Service is excellent and personal- you will never feel unwelcome here. Reason why I'm writing a review only now is because me and a relatively large party came into the restuarant just a bit after closing times. They stayed open just for us! Overall, this is a great place to go to. I never leave without a box!",
                    date: "8/10/2016",
                    imageUrl: "kyle-bellingham.jpg"
                },
                {
                    name: "Wade R.",
                    title: "One of the coolest owners in town.",
                    origin: "Everson, WA",
                    stars: 5,
                    text: "Bellingham has a good quantity of quality Mexican restaurants. This is by far the best. Deluxe burrito is well deluxe. Never ordered a bad meal. One of the coolest owners in town. Every time I go he comes around to say hi to every table. Price is maybe a bit more but the quality is worth it, let alone they have big plates... And fill them up! They pour a stiff margarita as well.",
                    date: "8/2/2016",
                    imageUrl: "wade-everson.jpg"
                },

            ]
        }
    }
}
</script>

