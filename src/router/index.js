/** @format */

import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main'
import Additional from '@/views/Additional'

const routes = [
	{
		path: '/',
		name: 'Main',
		component: Main,
	},
	{
		path: '/additional',
		name: 'Additional',
		component: Additional,
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
