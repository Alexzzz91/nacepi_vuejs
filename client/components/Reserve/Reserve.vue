<template>
	<div class="na-cepi__reserv">
		<div class="loading" v-if="loading">
	      Loading...
	    </div>

	    <div v-if="error" class="error">
	      {{ error }}
	    </div>

	    <div v-if="reservs.length > 0" class="content">
	    	<template v-for="reserv in reservs">
				<h2>{{ reserv.name }}</h2>
				<p>{{ reserv.date }}</p>
	    	</template>
	    </div>
	</div>
</template>


<script>
import axios from 'axios';
export default {
	name: 'ReservComponent',
	data () {
		return {
			loading: false,
			reservs: [],
			error: null
		}
	},
	created () {
		// fetch the data when the view is created and the data is
		// already being observed
		this.fetchData()
	},
	watch: {
		// call again the method if the route changes
		'$route': 'fetchData'
	},
	methods: {
		fetchData () {
			this.error = null
			this.loading = true
			axios.get(`http://localhost:9001/na_cepi/reserv`)
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
