<template>
	<div class="values">
		<div class="card">
			<i :class="icon"></i>
			<div class="card-body">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
import iconRoundedVue from './icon-rounded.vue'
export default {
	name: 'ValuesSection',
	props: ['icon'],
	components: {
		icon: iconRoundedVue,
	},
}
</script>

<style lang="scss" scoped>
.values {
	margin: 10px;
	.card {
		display: flex;
		padding: 20px 10px;
		text-align: center;
		@media screen and (min-width: 576px) {
			padding: 40px 10px;
		}
		i {
			align-self: center;
			font-size: 50px;
			color: #007bff;
			@media screen and (min-width: 576px) {
				font-size: 50px;
			}
		}
		.card-body {
			padding-top: 0;
			@media screen and (min-width: 576px) {
				font-size: 24px;
			}
			.counter {
				font-weight: 700;
				font-size: 40px;
				color: #1e202a;
				@media screen and (min-width: 576px) {
					font-size: 45px;
				}
			}
		}
	}
}
</style>