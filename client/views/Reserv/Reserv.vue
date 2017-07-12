<template>
  <div class="na-cepi__reserv">
    <div class="na-cepi__reserv-top">
      <h1 class="na-cepi__reserv-top-label">Хоррор-квест "Вуду. История Киры"</h1>
      <div class="na-cepi__reserv-top-container">
        <img src="/RJuN9U3yoaI.jpg" alt="">
        <div class="na-cepi__reserv-top-container__limitation"> 16+ </div>
        <div class="na-cepi__reserv-top-container-bottom">
          <div class="na-cepi__reserv-top-container__time"> 60 минут </div>
          <div class="na-cepi__reserv-top-container__team-count"> 2-5 человек </div>
        </div>
      </div>
    </div>
    <div class="na-cepi__reserv-about">
      <div class="na-cepi__reserv-about-container">
        <p>Атмосферный хоррор-квест. Маленькая девочка Кира не заставит вас скучать на протяжении всего времени вашего прибывания в жутком подвале ее милой матери. </p>

        <p>Количество участников от 2 до 5 человек</p>

        <p>Стоимость для команды до 11 вечера 2000 руб.после 2300 руб.</p>

        <p>В будни с пн. по пт. предусмотрены скидки.</p>

        <p>Студентам и школьникам скидка 20% ежедневно.</p>

        <p>Пенсионерам скидка 70%, если придут конечно.</p>

        <p>В день рождения действует скидка в 30%, а так же всю неделю до дня рождения и после.</p>

        <p>В ночное время с 23:00 и до 7:00 скидки не действительны.</p>
      </div>
    </div>
    <img src="/6co-eHWzq7k.jpg" class="na-cepi__reserv-background">
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