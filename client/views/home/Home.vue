<template>
  <div class="na-cepi-home">
    <About/>
    <QuestsSmall/>
  	<ReviewsSmall/>
  	<HomeContacts/>
  </div>
</template>

<script>
import About from 'components/About/About'
import QuestsSmall from 'components/Quests/QuestsSmall'
import ReviewsSmall from 'components/Reviews/ReviewsSmall'
import HomeContacts from 'components/Contacts/HomeContacts'

export default {
  components: {
    About,
    QuestsSmall,
    ReviewsSmall,
    HomeContacts
  }
}
</script>
