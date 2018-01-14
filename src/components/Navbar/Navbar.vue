<template>
    <nav class="navbar navbar-default">
        <div class="navbar-header">
            <nav-collapse-button-component></nav-collapse-button-component>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="index.html"
                        style="padding-top:5px">
                        <img 
                            src="../../images/el-agave-logo.png" 
                            height="30px">
                    </a>
                </li>
                <nav-item-component v-for="(item, index) in navItems" :key="index" :link="item.link" :title="item.title"></nav-item-component>
            </ul>
            <!-- <ul class="list-right">
                <li>
                    <span class="fa fa-envelope-o list-icon" aria-hidden="true"></span>
                    <a href="mailto:info@example.com">info@example.com</a>
                </li>
                <li>
                    <span class="fa fa-phone list-icon" aria-hidden="true"></span>
                    <p> 1234 423 23 </p>
                </li>
            </ul> -->
        </div>
        <div class="clearfix"> </div>
    </nav>
</template>

<script>
import NavItem from './NavItem.vue'
import NavCollapseButton from './NavCollapseBtn.vue'

export default {
    components: {
        NavItemComponent: NavItem,
        NavCollapseButtonComponent: NavCollapseButton,
    },
    props: ['navItems']
}


</script>



