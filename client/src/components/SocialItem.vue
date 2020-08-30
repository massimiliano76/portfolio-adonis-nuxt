<template>
	<div class="social-item">
		<div class="icon">
			<a :href="target" rel="nofollow noopener noreferrer" target="_blank">
				<i :class="'icon-' + icon" :style="'color:' + color"></i>
			</a>
		</div>
		<p v-if="label" class="label">{{ label }}</p>
	</div>
</template>

<script>
export default {
	name: 'SocialItem',
	props: ['icon', 'color', 'label', 'target'],
}
</script>

<style lang="scss" scoped>
.social-item {
	.icon {
		width: 50px;
		height: 50px;
		position: relative;
		i {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			font-size: 40px;
		}
	}
}
</style>