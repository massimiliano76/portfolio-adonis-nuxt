<template>
	<div>
		<div class="banner">
			<img src="~public/images/background.jpg" class="banner-image" alt="banner-image" />
			<h1>{{ $t('welcome') }}</h1>
		</div>
	</div>
</template>

<script>
export default {
	layout: 'master',
}
</script>

<style lang="scss">
.banner {
	position: relative;
	.banner-image {
		width: 100vw;
		height: calc(75vh - 70px);
		filter: brightness(70%);
	}
	h1 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
	}
}
</style>
