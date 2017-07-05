<template>
  <div id="app">
    <header class="na-cepi-up">
      <router-link class="na-cepi__logo" to="/">
        <svgicon icon="logo" width="200" height="149" color="#fff"></svgicon>
      </router-link>
      <navigationMenu></navigationMenu>
    </header>
    <div class="na-cepi__body">
      <router-view></router-view>
    </div>
    <footer class="na-cepi__footer">
      <p class="na-cepi__footer__text"> Следите за нами </p>
      <socialIcons></socialIcons>
    </footer>
  </div>
</template>


<script>
import '../compiled-icons/logo'
import navigationMenu from 'components/navigationMenu/navigationMenu'
import socialIcons from 'components/socialIcons/socialIcons'
export default {
  name: 'app',
  components: {
    navigationMenu,
    socialIcons
  }
}

</script>
