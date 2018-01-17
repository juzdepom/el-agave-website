<template>
    <li>
        <a
            class="scroll hvr-underline-from-center"
            style="padding-bottom: 10px"
            :href="link">{{title}}</a>
    </li>
</template>

<script>
export default {
  props: ['link', 'title'],
}
</script>
