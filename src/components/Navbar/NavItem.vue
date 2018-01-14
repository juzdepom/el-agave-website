<template>
    <li>
        <a class="scroll hvr-underline-from-center" :href="link">{{title}}</a>
    </li>
</template>

<script>
export default {
  props: ['link', 'title'],
}
</script>
