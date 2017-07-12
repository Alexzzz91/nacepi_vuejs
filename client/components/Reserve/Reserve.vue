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
						<div class="reserve-time-item">
							<div class="time">
								12:00
							</div>
							<div class="price">
								2000 р.
							</div>
						</div>
						<div class="reserve-time-item">
							<div class="time">
								13:30
							</div>
							<div class="price">
								2000 р.
							</div>
						</div>
						<div class="reserve-time-item">
							<div class="time">
								15:00
							</div>
							<div class="price">
								2000 р.
							</div>
						</div>
						<div class="reserve-time-item">
							<div class="time">
								16:30
							</div>
							<div class="price">
								2000 р.
							</div>
						</div>
						<div class="reserve-time-item">
							<div class="time">
								18:00
							</div>
							<div class="price">
								2000 р.
							</div>
						</div>
						<div class="reserve-time-item">
							<div class="time">
								19:30
							</div>
							<div class="price">
								2000 р.
							</div>
						</div>
						<div class="reserve-time-item">
							<div class="time">
								21:00
							</div>
							<div class="price">
								2000 р.
							</div>
						</div>
						<div class="reserve-time-item">
							<div class="time">
								23:00
							</div>
							<div class="price">
								2300 р.
							</div>
						</div>
						<div class="reserve-time-item">
							<div class="time">
								после 24:00
							</div>
							<div class="price">
								2300 р.
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
	</div>
</template>

<script>
import axios from 'axios';
import * as moment from 'moment';
moment.locale('ru');
export default {
	name: 'ReservComponent',
	data () {
		return {
			loading: false,
			reservs: [],
			error: null, 
			days : []
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
		}
		this.days.push(today);
		for (var i = 1; i <= 7; i++) {
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
			this.error = null
			this.loading = true
			axios.get(`http://109.234.37.128:9001/na_cepi/reserv`)
			.then(({data}) => {
				this.loading = false
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
