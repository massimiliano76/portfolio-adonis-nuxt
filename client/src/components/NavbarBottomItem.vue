<template>
	<nuxt-link :to="target" class="navbar-bottom-item">
		<div class="item-container">
			<i :class="icon"></i>
			<div class="text">{{ label }}</div>
		</div>
	</nuxt-link>
</template>

<script>
export default {
	name: 'NavbarBottomItem',
	props: ['target', 'icon', 'active', 'label'],
}
</script>

<style lang="scss" scoped>
.navbar-bottom-item {
	position: relative;
	width: 100%;
	height: 100%;
	.item-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		i {
			font-size: 30px;
		}
	}
}
</style>