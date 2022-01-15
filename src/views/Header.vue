<!-- @format -->

<template>
	<div class="header">
		<div class="header__logo">
			<img src="@/assets/image/header-logo.svg" alt="Web-notes" />
			<h1>WEB-NOTES</h1>
		</div>
		<div class="header__links">
			<router-link to="/">Основное</router-link>
			<router-link to="/additional">Дополнительное</router-link>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	align-items: center;
	background: url('../assets/image/header-bg.png') no-repeat;
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
	&__links a {
        padding: 0 20px; 
		font-family: 'Nunito', sans-serif;
		font-weight: normal;
		font-style: normal;
        text-decoration: none;
        font-size: 15px;
        font-weight: 600;
        transition: all 0.3s;
        &:hover {
            color: rgba(198, 211, 231, 1);
        }
	}
}
</style>
