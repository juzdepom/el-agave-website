<template>
    <div id="topOfPage" class="header-main shadow-down">
        <div class="container">
            <nav class="navbar navbar-default navbar-expand-sm">
                <div class="navbar-header">
                    <nav-collapse-button-component></nav-collapse-button-component>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href='#'
                                class="scroll "
                                style="padding-top:5px; padding-bottom: 15px">
                                <img
                                    src="../../images/el-agave-logo.png"
                                    height="30px">
                            </a>
                        </li>
                        <nav-item-component v-for="(item, index) in navItems" :key="index" :link="item.link" :title="item.title"></nav-item-component>
                    </ul>
                </div>
                <div class="clearfix"> </div>
            </nav>
        </div>
    </div>
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



