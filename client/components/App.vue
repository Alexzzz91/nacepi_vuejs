<template>
  <div id="app">
    <header class="na-cepi-up">
      <router-link class="na-cepi__logo" to="/">
        <svgicon icon="logo" width="130" height="100" color="#fff"></svgicon>
      </router-link>
      <navigationMenu></navigationMenu>
    </header>
    <div class="na-cepi__body">
      <transition name="body">
        <router-view></router-view>
      </transition>
    </div>
    <footer class="na-cepi__footer">
      <div class="na-cepi__footer-container">
        <p class="na-cepi__footer__text"> Следите за нами </p>
        <socialIcons></socialIcons>
        <mirQuestov />
      </div>
    </footer>
  </div>
</template>


<script>
import '../compiled-icons/logo'
import navigationMenu from 'components/navigationMenu/navigationMenu'
import socialIcons from 'components/socialIcons/socialIcons'
import mirQuestov from 'components/mirQuestov/mirQuestov'
export default {
  name: 'app',
  components: {
    navigationMenu,
    socialIcons,
    mirQuestov
  }
}

</script>
