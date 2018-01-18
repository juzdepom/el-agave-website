<template>
    <div class="container-fluid">
        <div style="display: flex; flex-direction: row;  justify-content: center; overflow: scroll; direction: rtl; white-space: nowrap;">
                <a><img class="shadow-down" v-for="(url,i) in paths" :key="i" :src="url" style="margin: 20px; max-height: 175px; border-radius: 10px; "/></a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['imagePaths'],
    computed: {
        paths(){
            var array = []
            this.imagePaths.forEach(line => {
                var fullPath = '../images/' + line;
                var required = require(`../images/${line}`)
                array.push(required)
            })
            return array
        }
    }
}
</script>

