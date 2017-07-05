<template>
    <nav class="top-menu">
        <v-li v-for="route in routesElems"
            :href='route.path' 
            :name='route.name' 
            :key='route.path'
        >
        </v-li> 
        <li class="menu__lines"></li>
    </nav>
</template>

<script>
import VLi from './VLi.vue'
export default {
    name: 'navigationMenu',
    components: {
      VLi
    },
    created() {
        this.$router.options.routes.forEach(route => {
            if (route.showOnMenu) {
                this.routesElems.push({
                    name: route.name, 
                    path: route.path
                }) 
            }
        })
    }
    , data() {
        return {
            routesElems: []
        }
    }
}
</script>
