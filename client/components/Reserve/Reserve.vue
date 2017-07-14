<template>
	<div class="na-cepi__reserv">
	    <div class="loading" v-if="loading">
	      Loading...
	    </div>
	    <div v-if="error" class="error">
	      {{ error }}
	    </div>
	    <div class="week">
	      <template v-for="day in days">
	        <div class="row">
	          <div class="day">
	          <p class="day-name">{{ day.day }}</p>
	          <p class="day-number">{{ day.number }}</p>
	          <p class="day-mounth">{{ day.mounth }}</p>
	          </div>
	        <div class="reserve-time">
	          <div v-for="timeRow in timeRows" class="reserve-time-item" @click="showModal = true; selectedTime = timeRow.time; selectedPrice = timeRow.price; selectedDate = day">
	            <div class="time">
	              {{timeRow.time}}
	            </div>
	            <div class="price">
	              {{timeRow.price}}
	            </div>
	          </div>
	        </div>
	        </div>
	      </template>
	    </div>
	    <div v-if="reservs.length > 0" >
	      <template v-for="reserv in reservs">
	      <h2>{{ reserv.name }}</h2>
	      <p>{{ reserv.date }}</p>
	      </template>
	    </div>
	    <ReserveModal v-if="showModal" @close="showModal = false">
	    	<div slot="header">
	    		<h4 class="na-cepi__reserv-top-label" >{{ name }}</h4>
	    		<h5 class="time" > Выбранное время :  {{selectedTime}} </h5>
	    		<p class="price" > Предварительная стоимость :  {{selectedPrice}} </p>
	    	</div>
	    	<div slot="body">
	    		<form id="reserv">
	    			<input type="text" placeholder="Имя команды">
	    		</form>
	    	</div>
	    	<img slot="background" src="/RJuN9U3yoaI.jpg" class="modal-background">
	    </ReserveModal>
	</div>
</template>

<script>
import axios from 'axios';
import * as moment from 'moment';
import ReserveModal from './ReserveModal.vue';
moment.locale('ru');
export default {
	name: 'ReservComponent',
	components: {
		ReserveModal
	},
	props: {	
		name: {
			type:String
		},	
		image: {
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
	data () {
		return {
			loading: false,
			reservs: [],
			error: null,
			days : [],
			selectedDate: null,
			selectedTime: null,
			selectedPrice: null,
			timeRows: [
				{time: '12:00', price: '2000р.'},
				{time: '13:30', price: '2000р.'},
				{time: '15:00', price: '2000р.'},
				{time: '16:30', price: '2000р.'},
				{time: '18:00', price: '2000р.'},
				{time: '19:30', price: '2000р.'},
				{time: '21:00', price: '2000р.'},
				{time: '23:00', price: '2300р.'},
				{time: 'после 24:00', price: '2300р.'},
			],
			showModal: false
		}
	},
	created () {
		// fetch the data when the view is created and the data is
		// already being observed
		this.fetchData();
		const today ={
			'day':moment().format('dddd'),
			'number': moment().format('D'),
			'mounth' : moment().format('MMMM')
		};
		this.days.push(today);
		for (let i = 1; i <= 7; i++) {
			let day = {
				'day':moment().add(i, 'days').format('dddd'),
				'number': moment().add(i, 'days').format('D'),
				'mounth' : moment().add(i, 'days').format('MMMM')
			};
			this.days.push(day);
		}
	},
	watch: {
		// call again the method if the route changes
		'$route': 'fetchData'
	},
	methods: {
		fetchData () {
			this.error = null;
			this.loading = true;
			axios.get(`http://109.234.37.128:9001/na_cepi/reserv`)
			.then(({data}) => {
				this.loading = false;
				// JSON responses are automatically parsed.
				this.reservs= data;
			})
			.catch(e => {
				this.error = e.toString()
			})
		}
	}
}
</script>
