import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home'
import Stock from '../views/Stock/Stock'
import Questions from '../views/Questions/Questions'
import Reserv from '../views/Reserv/Reserv'
import Review from '../views/Review/Review'
import Gallery from '../views/Gallery/Gallery'
import About from '../views/About/About'
import Contacts from '../views/Contacts/Contacts'

Vue.use(Router)

const routes = [
	{ path: '/', name: 'Главная', component: Home, showOnMenu: true },
	{ path: '/stock', name: 'Акции', component: Stock, showOnMenu: true  },
	{ path: '/questions', name: 'Квесты', component: Questions, showOnMenu: false  },
	{ path: '/reserv', name: 'Бронирование', component: Reserv, showOnMenu: true  },
	{ path: '/review', name: 'Отзывы', component: Review, showOnMenu: false  },
	{ path: '/gallery', name: 'Галерея', component: Gallery, showOnMenu: false  },
	{ path: '/about', name: 'О нас', component: About, showOnMenu: false  },
	{ path: '/contacts', name: 'Контакты', component: Contacts, showOnMenu: true  }
]
const router = new Router({
	mode: 'history',
  	routes: routes
})

export default router

