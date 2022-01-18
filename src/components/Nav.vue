<!-- @format -->

<template>
	<div class="nav">
		<div 
			class="nav__item" 
			v-for="topic in topics" 
			:key="topic.id"
			@click="getTopicsNested(topic.id)"
		>
			<div class="nav__item--logo">
				<img :src="getImgUrl(topic.url)">
			</div>
			{{ topic.title }}
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import MySpinner from '@/components/MySpinner.vue'

export default {
	components: { MySpinner },
	data() {
		return {}
	},
	computed: {
		...mapState(['topicsNested', 'topics'])
	},
	methods: {
		getImgUrl(imgUrl) {
			return require(`@/assets/img/nav/${imgUrl}.svg`);
		},
		getTopicsNested(topicId) {
			this.$store.dispatch('TOGGLE_ACTIVE', true)
			this.$store.dispatch('GET_TOPICS_NESTED', topicId)
				.then(() => {
					this.$store.dispatch('TOGGLE_ACTIVE', false)
				})
		}
	}
}
</script>

<style lang="scss" scoped>
.nav {
	grid-area: nav;
	background-color: #0f1724;
	&__item {
        display: flex;
        align-items: center;
        justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 120px;
		background: transparent;
		transition: all 0.3s;
        border-bottom: 1px solid #C6D3E7;
		font-family: 'Nunito-Regular';
        font-size: 16px;
		color: #C6D3E7;
		cursor: pointer;
		&:hover {
			background: #6ce8e4;
			color: #000000;
            border: #6ce8e4;
			.nav__item--logo {
				filter: invert(1110%) sepia(0%) saturate(31%) hue-rotate(0deg) brightness(111%) contrast(100%);
			}
		}
	}
	&__logo {
		background: transparent;
		width: 30px;
		height: 30px;
	}
}
</style>
