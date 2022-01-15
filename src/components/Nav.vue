<!-- @format -->

<template>
	<div class="nav">
		<div class="nav__item" v-for="item in items" :key="item.id">
			<div class="nav__item--logo">
				<img :src=item.url alt="">
			</div>
			{{ item.title }}
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					id: 1,
					url: require('../assets/image/nav/html.svg'),
					title: 'HTML'
				},
				{
					id: 2,
					url: require('../assets/image/nav/css.svg'),
					title: 'CSS'
				},
				{
					id: 3,
					url: require('../assets/image/nav/js.svg'),
					title: 'JavaScript'
				},
				{
					id: 4,
					url: require('../assets/image/nav/fonts.svg'),
					title: 'Fonts'
				},
				{
					id: 5,
					url: require('../assets/image/nav/uikit.svg'),
					title: 'UI/UX'
				},
				{
					id: 6,
					url: require('../assets/image/nav/ui.svg'),
					title: 'Sandbox'
				},
				{
					id: 7,
					url: require('../assets/image/nav/webpack.svg'),
					title: 'Webpack'
				}
			]
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
        font-weight: 400;
        font-size: 16px;
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
