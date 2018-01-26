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
                            class="btn btn-warning back pull-left"
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
            <h1>Welcome to the El Agave Admin!</h1>

            <h2>Open Hours</h2>
            <i>Mini coding tutorial: Including <span style="color: red;">&lt;br&gt;</span> will create a new line.</i>
            <br>
            <textarea class="form-control" ></textarea>

            <h2>Menu</h2>
            <i>Mini coding tutorial: the menu below is written in JSON, a popular way of storing data on servers.<br>
            To add a new menu item, write { title: "Nachos", redText: "Description of Nachos", price: 9.95 },
            </i>
            <br>
            <textarea class="form-control"></textarea>
            <h2>About Us</h2>
            <textarea class="form-control"></textarea>
            <h2>Locations</h2>
            <div class="container">
                <i>Samish Phone Number</i>
                <br>
                <input id="samishphone" class="form-control"/>
                <!-- <label for="samishphone">Samish Phone Number</label> -->
                <br>
                <i>Clubhouse Phone Number</i>
                <br>
                <input id="clubhousephone" class="form-control"/>
                <!-- <label for="clubhousephone">Clubhouse Phone Number</label> -->
                <br>
                <i>Harris Phone Number</i>
                <br>
                <input id="harrisphone" class="form-control"/>
                <!-- <label for="harrisphone">Harris Phone Number</label> -->
                <br>
            </div>

            <h2>We Support Our Students</h2>
            <textarea class="form-control"></textarea>
            <h2>Yelp Reviews</h2>
                <div style="width: 50%; margin-left: 25%" >
                    <i class="" style="width: 50%; ">For alterations please email <span style="color: blue">julia.gao.miller@gmail.com:</span> title, description, submission date, author, author image. </i>
                </div>
            <h2>Deals</h2>
            <textarea class="form-control"></textarea>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        backToMain: {
            type: Function,
        }
    }
}
</script>

<style>
    .admin-margins input {
        /* margin-top: 20px; */
        /* margin-left: 0; */
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



