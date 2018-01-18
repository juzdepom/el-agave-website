<template>
    <div class="map">
        <iframe :src="url" style="border:0" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
    props: ['location'],
    computed: {
        url(){
            var url = `https://www.google.com/maps?q=`
            url += `El Agave ${this.location.address}, ${this.location.city}, ${this.location.state} ${this.location.zip} &output=embed`
            return url
        }
    }
}

// "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1510226274125"
</script>



