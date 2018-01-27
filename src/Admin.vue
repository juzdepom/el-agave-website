<template>
    <div class="container-fluid admin-margins" id="admin">
        <div class="header-main"
            style="background-color: white; border-bottom: 1px solid lightgray; height: 55px" >
            <div class="container">
                <nav class="navbar navbar-default navbar-expand-sm">
                    <div class="navbar-header">
                        <!-- <nav-collapse-button-component></nav-collapse-button-component> -->
                    </div>
                        <a
                            href="#app"
                            class="btn btn-danger back pull-left"
                            @click="backToMain()">
                            <span class="fa fa-chevron-left"></span>
                            &nbsp;&nbsp;Back to Main Menu (don't save)
                        </a>
                        <a
                            href="#app"
                            class="btn btn-success pull-right"
                            >
                            Save Changes
                        </a>
                </nav>
            </div>
        </div>
        <div class="container-fluid text-center admin-margins form-group">
            <br><br>
            <h1>&#9881; Welcome to the El Agave Admin! &#9881;</h1>

            <h2>Open Hours</h2>
            <i>Mini coding tutorial: Including <span class="red">&lt;br&gt;</span> will create a new line.</i>
            <br>
            <textarea class="form-control" v-model="openHours" ></textarea>

            <h2>About Us</h2>
            <textarea class="form-control" v-model="aboutUs" style="height: 150px"></textarea>

            <h2>Locations</h2>
            <div class="container">
                <i>Samish Phone Number</i>
                <br>
                <input id="samishphone" class="form-control" v-model="numbers.samish"/>
                <br>
                <i>Clubhouse Phone Number</i>
                <br>
                <input id="clubhousephone" class="form-control" v-model="numbers.clubhouse"/>
                <br>
                <i>Harris Phone Number</i>
                <br>
                <input id="harrisphone" class="form-control" v-model="numbers.harris"/>
                <br>
            </div>

            <h2>We Support Our Students</h2>
            <textarea class="form-control" v-model="supportStudents"></textarea>

            <h2>Yelp Reviews</h2>
            <div style="width: 50%; margin-left: 25%" >
                <i class="" style="width: 50%; ">For alterations please email <span style="color: blue">julia.gao.miller@gmail.com:</span> title, description, submission date, author, author image. </i>
            </div>

            <h2>Deals</h2>
            <textarea class="form-control" v-model="deals"></textarea>

            <h2>Menu</h2>
            <i>Mini coding tutorial: the menu below is written in JSON, a popular method of storing data.<br>
            To add a new menu item, write <span style="color: red">{ title: "Nachos", redText: "Description of Nachos", price: 9.95 },</span>
            <br>
            Important: Don't forget to include the "<span class="red" > , </span>" after the "<span class="red"> } </span>" otherwise the menu won't show up correctly.
            <br>
            Be very careful when editting the menu because a syntax mistake might break the code.
            <br>
            If you're uncertain about any of this, please email (julia.gao.miller@gmail.com) or text (626-709-7537) Julia ;-)
            </i>
            <br>
            <textarea class="form-control" style="height: 500px" v-model="menu"></textarea>
        </div>

    </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('getData')
    },
    props: {
        backToMain: {
            type: Function,
        }
    },
    computed: {
        openHours(){
            return this.$store.getters.openHours
        },
        menu(){
            let menu = this.$store.getters.menu
            let json = JSON.stringify(menu, null, 2)
            return json
        },
        aboutUs(){
            return this.$store.getters.aboutUs
        },
        numbers(){
            return this.$store.getters.numbers
        },
        supportStudents(){
            return this.$store.getters.supportStudents
        },
        deals(){
            return this.$store.getters.deals
        }
    }
}
</script>

<style>
    .admin-margins .red {
        color: red;
    }
    .admin-margins label {
        margin-left: 10px;
    }

    .admin-margins a {
        margin-top: 10px;
    }

    .admin-margins h2 {
        margin-top: 20px;
    }
    textarea {
        width: 90%;
        margin-top: 10px;
        /* margin-bottom: 20px; */
    }
    .margin-ten {
        margin-top: 30px;
    }
    .card-style {
        border: 1px solid #ccc;
        box-shadow: 0px 3px 6px #ccc;
        padding: 20px;
    }
    .admin-margins {
        margin: 20px 0 0 10px;
        padding-bottom: 10px;
    }
</style>



