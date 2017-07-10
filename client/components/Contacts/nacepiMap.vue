<template>
	<yandex-map 
		:coords="[54.94717866882921,73.37706328974882]"
		zoom="16"
		style="width: 100%; height: 450px;">
		<ymap-marker 
			marker-type="placemark"
			:coords="[54.94690444768162,73.37692505026182]"
			hint-content='Хоррор-Квест "На Цепи"'
			:balloon="{header: 'Хоррор-Квест \'На Цепи\'', body: 'Иртышская набережная 41', footer: 'Время работы Круглосуточно, игры по записи'}"
			:icon="{color: 'red', glyph: 'theater'}">
		</ymap-marker>
	</yandex-map>
</template>

<script>
import yandexMap from 'vue-yandex-maps'
export default {
	name: 'NacepiMap',
	components: {
		yandexMap
	}
}
</script>

