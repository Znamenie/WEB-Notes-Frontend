<!-- @format -->

<template>
	<div class="main">
		<Nav></Nav>
		<div class="main__content">
			<div class="main__content__header">
				{{ topicsNested.name }}
			</div>
			<MainModule ></MainModule>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Nav from '@/components/Nav.vue'
import MainModule from '@/components/MainModule.vue'
export default {
	components: { Nav, MainModule },
	data() {
		return {}
	},
	computed: {
		...mapState(['topicsNested'])
	},
	created() {
		this.$store.dispatch('GET_TOPICS');
		this.$store.dispatch('GET_TOPICS_NESTED', 1);
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
		color: red;
		background: #283046;
		padding: 40px;

		&__header {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			font-size: 160px;
			color: rgba(35, 43, 63, 1);
			font-weight: 700;
		}
	}
	
	.content-caption {
		color: #000000;
	}
	
	.content-module {
		
		&--title {
			color: red;
		}
	}
}
</style>
