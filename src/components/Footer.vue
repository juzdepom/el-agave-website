<template>
    <div class="footer-container">
        <div class="footer-card">
            <p class="white">
                <slot>
                </slot>
            </p>
        </div>
    </div>
</template>

<script>
export default {


}
</script>

<style>
    .white {
        color: white
    }
    .footer-container {
        height: 120px;
        background-color: rgb(97, 16, 19);
    }
    .footer-card {
        display: flex;
        justify-content: center;
        align-items:center;
        padding-top: 30px;
        text-align: center;
    }
</style>


