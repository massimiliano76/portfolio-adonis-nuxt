<template>
	<div class="values">
		<div class="card">
			<i :class="icon"></i>
			<div class="card-body">
				<p>{{ text }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import iconRoundedVue from './icon-rounded.vue'
export default {
	name: 'ValuesSection',
	props: ['icon', 'text'],
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
			padding: 40px 30px;
			font-size: 1.2rem;
		}
		i {
			align-self: center;
			font-size: 50px;
			color: #007bff;
		}
	}
}
</style>