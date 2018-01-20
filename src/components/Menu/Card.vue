<template>
    <div style="display: flex; justify-content: center">
        <div class="open-hours shadow-down">
            <slot>
            </slot>
        </div>
    </div>

</template>

<style>
    .open-hours {
        background: url(../../images/parchment.jpg);
        width: 70%;
        border-radius: 10px;
        margin: 15px 0 10px 0;
        padding: 10px;
        padding-bottom: 40px;
    }
</style>



