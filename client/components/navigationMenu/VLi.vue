<template>
    <li 
        class="menu__item" v-bind:class="{ current: isActive }">
        <v-link v-bind:href='href'>
            {{name}}
        </v-link>
    </li> 
</template>

<script>
	import VLink from './VLink.vue'
	export default {
	    components: {
	      VLink
	    },
	    props: {
			href: {
				type:String,
				required: true 
			},	
			name: {
				type:String,
				required: true 
			}
		},
		computed: {
			isActive () {
				return this.href === this.$route.fullPath
			}
		}
	}
</script>

<style scoped>
  .active {
    color: cornflowerblue;
  }
</style>