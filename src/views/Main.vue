<!-- @format -->

<template>
	<div class="main">
		<Nav></Nav>
		<MySpinner :state="isLoading" v-if="!isLoading"></MySpinner>
		<div class="main__content">
			
			<div class="main__content__header">
				{{ topicsNested.title }}
			</div>
			<MainModule ></MainModule>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Nav from '@/components/Nav.vue'
import MainModule from '@/components/MainModule.vue'
import MySpinner from '@/components/MySpinner.vue'
export default {
	components: { Nav, MainModule, MySpinner },
	data() {
		return {
			isLoading: false
		}
	},
	computed: {
		...mapState(['topicsNested'])
	},
	created() {
		this.isLoading = true;
		this.$store.dispatch('GET_TOPICS');
		this.$store.dispatch('GET_TOPICS_NESTED', '6204c08af49be9bdc9ce63f4')
			.finally(() => {
				this.isLoading = false;
			});
	}
}
</script>

<style lang="scss" scoped>
.main {
	position: relative;
	display: grid;
	grid-template-columns: 120px 1fr;
	height: 100%;
	gap: 0px 0px;
	grid-template-areas: 'nav content';
	height: calc(100vh - 80px);
	
	&__content {
		position: relative;
		grid-area: content;
		color: red;
		background: #283046;
		padding: 40px;
		
		@media (max-width: 800px) {
			padding-top: 10px;
		}

		@media (max-width: 450px) {
			padding: 10px;
		}

		&__header {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			font-size: 130px;
			color: rgba(35, 43, 63, 1);
			font-weight: 700;
			line-height: 140px;
			cursor: default;

			@media (max-width: 1000px) {
				font-size: 100px;
				line-height: 120px;
			}

			@media (max-width: 800px) {
				font-size: 80px;
				line-height: 100px;
				margin-bottom: 20px;
			}

			@media (max-width: 600px) {
				font-size: 50px;
				line-height: 70px;
			}

			@media (max-width: 550px) {
				margin-bottom: 10px;
			}
		}
	}
	
	.content-caption {
		color: #000000;
	}

	@media (max-width: 550px) {
		grid-template-columns: 1fr;
	}
}
</style>
