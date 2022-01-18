<!-- @format -->

<template>
	<div class="header">
		<div class="header__logo">
			<img src="../assets/img/header-logo.svg" alt="Web-notes" />
			<h1>WEB-NOTES</h1>
		</div>
		<div class="header__links">
			<router-link to="/">Основное</router-link>
			<router-link to="/additional">Дополнительное</router-link>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {}
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	align-items: center;
	background: url('../assets/img/header-bg.png') no-repeat;
	background-size: cover;
	padding: 0 30px;
	&__logo {
		display: flex;
		align-items: center;
		width: auto;
		height: 100%;
		margin-right: 50px;
		img {
			margin-right: 18px;
		}
		h1 {
			font-weight: 700;
			font-size: 32px;
			white-space: nowrap;
			color: rgba(198, 211, 231, 1);
		}
	}
	&__links {
		display: flex;

		a {
			display: block;
			padding: 10px 10px 5px 10px; 
			font-family: 'Nunito-Bold';
			text-decoration: none;
			font-size: 16px;
			text-transform: uppercase;
			position:relative;
			z-index: 1;
			transition: all .3s;
			margin: 0 15px;
			color: #C6D3E7;
			

			&:hover {
				color: #FFFFFF;
			}

			&::after {
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				margin: auto;
				width: 0%;
				content: '.';
				color: transparent;
				background: #aaa;
				height: 2px;
				transition: all .3s;
			}

			&:hover::after {
				width: 100%;
			}
		}
	}
}
</style>
