<!-- @format -->

<template>
	<div class="layout">
        <Header></Header>
        <router-view></router-view>
	</div>
</template>

<script>
import Header from './views/Header.vue'
export default {
	components: { Header }
}
</script>

<style lang="scss" scoped>
.layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}
</style>
