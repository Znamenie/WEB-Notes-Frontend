/** @format */

import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main'
import Helpful from '@/views/Helpful'

const routes = [
	{
		path: '/',
		name: 'Main',
		component: Main,
	},
	{
		path: '/helpful',
		name: 'Helpful',
		component: Helpful,
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
