<template>
	<div>
		<button class="btn plus" @click.prevent="isVisible = !isVisible">
			<i class="icon-plus"></i>
		</button>
		<nav v-if="isVisible" class="card navigation">
			<nuxt-link to="/dashboard/me" class="nagivation-item" @click="isVisible = !isVisible">Mon profil</nuxt-link>
			<nuxt-link to="/dashboard/services" class="nagivation-item" @click="isVisible = !isVisible">Mes services</nuxt-link>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'DashboardActionButton',
	data() {
		return {
			isVisible: false,
		}
	},
}
</script>

<style lang="scss" scoped>
.btn.plus {
	background: rgb(0, 123, 255);
	border-radius: 50%;
	position: fixed;
	bottom: 12vh;
	right: 2vh;
	width: 40px;
	height: 40px;
	i {
		color: white;
		font-size: 24px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
}
.navigation {
	position: absolute;
	bottom: calc(12vh + 40px + 10px);
	right: 2vh;
	background: white;
	.nagivation-item {
		padding: 10px 20px;
	}
}
</style>
