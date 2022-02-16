<!-- @format -->

<template>
	<div class="header">
		<div class="header__logo">
			<a href="/">
				<svg width="50" height="50" viewBox="0 0 70 70" fill="none">
				<path d="M41.1133 8.97156L45.8792 15.6566L70 8.97156H41.1133ZM16.0504 61.0282L29.0996 48.2707L21.2479 39.8416L16.0504 61.0282ZM39.1358 8.97156L32.1621 15.2541L43.8929 15.6916L39.1358 8.97156ZM12.0283 8.97447L14.5279 14.1078L28.3354 14.9653L12.0283 8.97447ZM19.4163 35.592L29.6158 16.5695L0 14.9624L19.4163 35.592ZM20.6033 36.7936L30.2371 47.142L40.8625 36.7295L44.1583 17.3278L31.2113 16.6628L20.6033 36.7936Z" fill="#C6D3E7"/>
				</svg>
				<h1>WEB-NOTES</h1>
			</a>
		</div>
		<div class="header__links">
			<router-link to="/">Основные</router-link>
			<router-link to="/helpful">Дополнительные</router-link>
		</div>

		<div class="mobile-header">
			<!-- Logo -->
			<a href="#" class="mobile-header__logo">LR</a>

			<!-- Hamburger icon -->
			<input class="mobile-header__side-menu" type="checkbox" id="side-menu"/>
			<label class="mobile-header__hamb" for="side-menu"><span class="mobile-header__hamb-line"></span></label>

			<!-- Menu -->
			<nav class="mobile-header__nav">
				<ul class="mobile-header__menu">
					<li><a href="#">Gallery</a></li>
					<li><a href="#">Blog</a> </li>
					<li><a href="#">About</a></li>
				</ul>
			</nav>
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
	height: 80px;

	&__logo {
		display: flex;
		align-items: center;
		width: auto;
		height: 100%;
		margin-right: 50px;

		a {
			display: flex;
			align-items: center;
			text-decoration: none;
		}

		h1 {
			font-size: 28px;
			white-space: nowrap;
			color: rgba(198, 211, 231, 1);
			margin-left: 12px;

			@media (max-width: 800px) {
				display: none;
			}
		}

		@media (max-width: 800px) {
			margin-right: 20px;
		}

		@media (max-width: 550px) {
			display: none;
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

		@media (max-width: 550px) {
			display: none;
		}
	}
}

.mobile-header {
	position: sticky;
    top: 0;
    width: 100%;

	@media (min-width: 550px) {
		display: none;
	}

	&__logo {
		display: inline-block;
		color: #FFFFFF;
		font-size: 60px;
		margin-left: 10px;
	}

	&__nav {
		width: 100%;
		height: 100%;
		position: fixed;
		background-color: #000000;
		overflow: hidden;
		max-height: 0;
    	transition: max-height .5s ease-out;
	}

	&__menu {
		
		a {
			display: block;
			padding: 30px;
			color: #FFFFFF;
		}
	}

	&__hamb {
		cursor: pointer;
		float: right;
		padding: 40px 20px;
	}

	&__hamb-line {
		background: var(--white);
		display: block;
		height: 2px;
		position: relative;
		width: 24px;

		&::before, &::after {
			content: '';
			display: block;
			height: 100%;
			position: absolute;
			transition: all .2s ease-out;
			width: 100%;
		}

		&::before {
			top: 5px;
		}

		&::after {
			top: -5px;
		}
	}

	&__side-menu {
		display: none;

		&:checked ~ nav {
			max-height: 100%;
		}

		~ .mobile-header__hamb .mobile-header__hamb-line {
			background: red;
		}

		&:checked ~ .mobile-header__hamb .mobile-header__hamb-line::before {
			transform: rotate(-45deg);
			top:0;

		}

		&:checked ~ .mobile-header__hamb .mobile-header__hamb-line::after {
			transform: rotate(45deg);
			top:0;
		}
	}
}
</style>
