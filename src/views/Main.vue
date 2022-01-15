<!-- @format -->

<template>
	<div class="main">
		<Nav></Nav>
		<div class="main__content">
			<div class="main__content-caption" v-for="topic in topics" :key="topic.id">
				{{topic.caption}}
			</div>
			<div class="main__content-module" v-for="topicNested in topicNesteds" :key="topicNested.id">
				<div class="main__content-module--title">
					{{ topicNested.topicTitle }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
	components: { Nav },
	data() {
		return {
			topics: [
				{
					id: 1,
					caption: 'HTML',
				},
				{
					id: 2,
					caption: 'CSS',
				},
				{
					id: 3,
					caption: 'JavaScript',
				},

			],
			topicNesteds: [
				{
					id: 1,
					topicTitle: 'Инструменты',
					topicItems: [
						{
							id: 1,
							title: 'W3Schools',
							description: 'Бесплатный образовательный сайт для обучения программированию в Интернете'
						},
						{
							id: 2,
							title: 'HTMLBook',
							description: 'Информация об HTML, CSS, веб-дизайну, графике и созданию сайтов'
						},
						{
							id: 3,
							title: 'iHateRegex',
							description: 'Шпаргалка по regex, которая также объясняет часто используемые выражения так, чтобы вы их...'
						}
					]
				},
				{
					id: 2,
					topicTitle: 'Основное',
					topicItems: [
						{
							id: 1,
							title: 'W3Schools',
							description: 'Бесплатный образовательный сайт для обучения программированию в Интернете'
						},
						{
							id: 2,
							title: 'HTMLBook',
							description: 'Информация об HTML, CSS, веб-дизайну, графике и созданию сайтов'
						},
						{
							id: 3,
							title: 'iHateRegex',
							description: 'Шпаргалка по regex, которая также объясняет часто используемые выражения так, чтобы вы их...'
						}
					]
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.main {
	display: grid;
	grid-template-columns: 120px 1fr;
	height: 100%;
	gap: 0px 0px;
	grid-template-areas: 'nav content';
	height: calc(100vh - 70px);
	
	&__content {
		grid-area: content;
	}
	
	&__content-caption {
		color: #000000;
	}
	
	&__content-module {
		
		&--title {
			color: red;
		}
	}
}
</style>
