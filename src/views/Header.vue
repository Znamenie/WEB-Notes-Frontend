<!-- @format -->

<template>
	<div>
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
		</div>
		<div class="mobile-header">
			<input id="toggle" type="checkbox">
			<label class="toggle-container" for="toggle">
				<span class="button button-toggle"></span>
			</label>
			<nav class="nav">
				<router-link @click="changeState" class="nav-item" to="/">Основные</router-link>
				<router-link @click="changeState" class="nav-item" to="/helpful">Дополнительные</router-link>
			</nav>
		</div>
	</div>
	
</template>

<script>
export default {
	methods: {
		changeState() {
			const toggle = document.getElementById('toggle');
			if (toggle.checked) {
				toggle.checked = false;
			}
		}
	}
}
</script>

<style lang="scss" scoped>

$items: 4;
$transition-duration: 0.5s;
$transition-delay: 0.05s;

.mobile-header {
	position: relative;
	background: url('../assets/img/header-bg.png') no-repeat;
	background-size: cover;
	overflow: hidden;
	display: none;

	@media (max-width: 550px) {
		display: block;
	}
}


#toggle {
	display: none;
}

#toggle:checked {
  & ~ .toggle-container .button-toggle {
	box-shadow: 0 0 0 550px rgba( 0, 0, 0, 0.1), inset 0 0 0 20px rgba( 0, 0, 0, 0.1);

	&:before {
		transform: translateY(-50%) rotate(45deg) scale(1);
	}

	&:after {
		transform: translateY(-50%) rotate(-45deg) scale(1);
	}
  }

  & ~ .nav {
	margin-bottom: 100px;
	pointer-events: auto;
	transform: translate(50px, 50px);

	.nav-item {
		color: #C6D3E7;
		letter-spacing: 0;
		height: 40px;
		line-height: 40px;
		margin-top: 0;
		opacity: 1;
		transform: scaleY(1);
		transition: $transition-duration, opacity 0.1s;

		@for $i from 1 through $items {
			&:nth-child(#{$i}) {
					$delay: ($items - $i) * $transition-delay;
					transition-delay: $delay;
				&:before {
					transition-delay: $delay;
				}
			}
		}

		&:before {
			opacity: 0;
		}
	}
  }

  & ~ .dummy-content {
	padding-top: 30px;

	&:before {
		background-color: rgba(0, 0, 0, 0.3);
	}
  }
}

.button-toggle {
	position: absolute;
	display: inline-block;
	width: 20px;
	height: 20px;
	margin: 25px;
	background-color: transparent;
	border: none;
	cursor: pointer;
	border-radius: 100%;
	transition: $transition-duration + 0.1;

	&:hover {
		box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.1), inset 0 0 0 20px rgba(0, 0, 0, 0.1);
	}

	&:before, &:after {
		position: absolute;
		content: '';
		top: 50%;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: #C6D3E7;
		border-radius: 5px;
		transition: $transition-duration;
	}

	&:before {
		transform: translateY(-50%) rotate(45deg) scale(0);
	}

	&:after {
		transform: translateY(50%) rotate(-45deg) scale(0);
	}
}

.nav {
	display: inline-block;
	margin: 25px 25px 20px;
	pointer-events: none;
	transition: $transition-duration;
}

.nav-item {
	position: relative;
	display: inline-block;
	float: left;
	clear: both;
	color: transparent;
	font-size: 14px;
	letter-spacing: -6.2px;
	height: 7px;
	line-height: 7px;
	text-transform: uppercase;
	white-space: nowrap;
	transform: scaleY(0.2);
	transition: $transition-duration, opacity 1s;

	@for $i from 1 through $items {
		&:nth-child(#{$i}) {
				$delay: ($i - 1) * $transition-delay;
				transition-delay: $delay;
			&:before {
				transition-delay: $delay;
			}
		}
	}

	&:nth-child(1) {
		letter-spacing: -8px;
	}

	&:nth-child(2) {
		letter-spacing: -7px;
	}

	&:nth-child(n + 4) {
		letter-spacing: -8px;
		margin-top: -7px;
		opacity: 0;
	}

	&:before {
		position: absolute;
		content: '';
		top: 50%;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: #C6D3E7;
		transform: translateY(-50%) scaleY(5);
		transition: $transition-duration;
	}
}

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

	@media (max-width: 550px) {
		display: none;
	}
}
</style>
