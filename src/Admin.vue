<template>
    <div class="container-fluid admin-margins " id="admin">
        <!-- back button -->
        <a
            href="#app"
            class="btn btn-warning back"
            @click="backToMain()">
            <span class="fa fa-chevron-left"></span>
            &nbsp;&nbsp;Back to Main Menu (don't save)
        </a>
        <!-- back button -->
        <div class="container-fluid text-center admin-margins card-style">
            <a
                href="#app"
                class="btn btn-success pull-right"
                >
                Save Changes
            </a><br><br>
            <h1>Welcome to the El Agave Admin!</h1>
            <h2>Open Hours</h2>
            <h2>Menu</h2>
            <h2>About Us</h2>
            <h2>Locations</h2>
            <h2>We Support Our Students</h2>
            <h2>Yelp Reviews</h2>
            <h2>Deals</h2>

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
    .card-style {
        border: 1px solid #ccc;
        box-shadow: 0px 3px 6px #ccc;
        padding: 20px;
    }
    .admin-margins {
        margin: 20px 0 0 10px;
    }
</style>



