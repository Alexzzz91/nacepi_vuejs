<template>
  <div class="na-cepi__contacts" >
  	<h2>
  		Телефон для бронирования 8-999-457-54-94
	</h2>
	<h3>
		Расположение вашего ужаса по адресу: 
		<p>
			Иртышская набережная 41, остановка Площадь Серова.
		</p>
	</h3>
  	<nacepiMap/>
  </div>
</template>

<script>
import nacepiMap from 'components/Contacts/nacepiMap'
export default {
  name: 'Contacts',
  components: {
    nacepiMap
  }
}
</script>