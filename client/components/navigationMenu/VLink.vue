<template>
  <router-link class="menu__link " :to="href">
    <slot></slot>
  </router-link>
</template>

<script>

  export default {
    props: {
      href: {
        type:String,
        required: true 
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .active {
    color: cornflowerblue;
  }
</style>