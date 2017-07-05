<template>
  <div class="na-cepi__quests">
  	<div class="na-cepi__quests__row">
		<template v-for="quest in questElems">
			<Quest 
				:active="quest.active"
				:name="quest.name"
				:img="quest.img"
				:limitation="quest.limitation"
				:teamCount="quest.teamCount"
				:time="quest.time"
			/> 
		</template>
  	</div>
    <div class="na-cepi__quests__row">
	    <Quest /> 
		<Quest /> 
    </div>
  </div>
</template>


<script>
import Quest from './Quest.vue'
import quests from './quests.js'
export default {
	name: 'questsSmall',
	components: {
	  Quest
	},
	created() {
        quests.forEach(quest => {
            this.questElems.push(quest)
        })
    }
    , data() {
        return {
            questElems: []
        }
    }
}
</script>
