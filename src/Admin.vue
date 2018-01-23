<template>
    <div class="container-fluid admin-margins" id="admin">
        <!-- back button -->
        <a
            href="#app"
            class="btn btn-warning back"
            @click="backToMain()">
            <span class="fa fa-chevron-left"></span>
            &nbsp;&nbsp;Back to Main Menu
        </a>
        <!-- back button -->
        <div class="container-fluid text-center admin-margins">
            <h4>This is the admin site</h4>
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
    .admin-margins {
        margin: 20px 0 0 10px;
    }
</style>



