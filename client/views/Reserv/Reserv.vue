<template>
  <div class="na-cepi__reserv">
    <img src="/RJuN9U3yoaI.jpg" class="na-cepi__reserv-background">
    <div class="na-cepi__reserv-container">
      <reserv-component/>
    </div>
  </div>
</template>

<script>
import ReservComponent from 'components/Reserve/Reserve'
export default {
  name: 'Reserv',
  components:{
    ReservComponent
  }
}
</script>