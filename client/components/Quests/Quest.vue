<template>
	<div class="na-cepi__quests--item">
		<div class="na-cepi__quests--item__container">
			<img v-if="!!img" :src='img' class="na-cepi__quests--item__img" :alt='name'>
			<img v-else src='/tjomnyj_koidor.jpg' class="na-cepi__quests--item__noimg" alt='Квест в разработке' >
			<div class="na-cepi__quests--item__top">
				<div v-if="!!name" class="na-cepi__quests--item__name" > {{name}} </div>
				<div v-if="!!limitation" class="na-cepi__quests--item__limitation" > {{limitation}} </div>
			</div>
			<div v-if="!active" class="na-cepi__quests--item__noimg__label" > Квест в разработке</div>
			<div class="na-cepi__quests--item__footer">
				<div class="na-cepi__quests--item__footer_left-list">
					<div v-if="!!time" class="na-cepi__quests--item__time" > {{time}} </div>
					<div v-if="!!teamCount" class="na-cepi__quests--item__team-count" > {{teamCount}} </div>
				</div>
				<button v-if="active"  class="na-cepi__quests--item__reserve" > Выбрать время </button>
			</div>
		</div>
		<div class="na-cepi__quests--item--overlay"></div>
	</div>
</template>


<script>
export default {
	name: 'quest',
	props: {
		active: {
			type:Boolean
		},	
		name: {
			type:String
		},	
		img: {
			type:String
		},
		limitation: {
			type:String
		},
		teamCount: {
			type:String
		},
		time: {
			type:String
		}
	},
}
</script>
