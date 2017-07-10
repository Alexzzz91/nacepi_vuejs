<template>
  <div class="na-cepi__reviews" v-if="reviewElems.length > 0">
    <h3>Отзывы</h3>
  	<div class="na-cepi__reviews__row">
    <carousel
      :autoplay="true"
      :perPage="reviewElems.length < 4 ? reviewElems.length : 3"
    >
      <template v-for="review in reviewElems">
        <slide >
          <Review />
        </slide>
      </template>
    </carousel>
  	</div>
  </div>
</template>


<script>
import Review from './Review.vue'
import reviews from './reviews.js'
import { Carousel, Slide } from 'vue-carousel';
export default {
	name: 'questsSmall',
	components: {
	  Review,
    Carousel,
    Slide
	},
	created() {
        reviews.forEach(review => {
            this.reviewElems.push(review)
        })
    }
    , data() {
        return {
            reviewElems: []
        }
    }
}
</script>
