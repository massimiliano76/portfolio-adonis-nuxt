<template>
	<nuxt-link to="/achievements/1" class="card" :style="'width:' + width">
		<img src="https://via.placeholder.com/1920x1080" class="img-fluid" alt="achievement image" />
		<div class="overlay">
			<nuxt-link to="/achievements/1" class="btn btn-primary btn-lg">
				<i class="icon-search"></i> Aller voir
			</nuxt-link>
		</div>
	</nuxt-link>
</template>

<script>
export default {
	name: 'AchievementsItem',
	props: ['width'],
}
</script>

<style lang="scss" scoped>
.card {
	position: relative;
	margin: 10px;
	@media screen and (max-width: 576px) {
		width: 100% !important;
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: black;
		opacity: 0;
		transition: all 0.3s ease-in-out;
		a {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			i {
				margin-right: 5px;
			}
		}
	}
	&:hover {
		.overlay {
			transition: all 0.3s ease-in-out;
			opacity: 1;
		}
	}
}
</style>