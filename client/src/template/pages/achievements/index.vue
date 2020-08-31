<template>
	<div>
		<div class="container">
			<h1 class="py-4">Mes réalisations</h1>
		</div>
		<div class="achievement-container">
			<achievement-item v-for="(item, key) in 10" :key="key" width="20%" />
		</div>
	</div>
</template>

<script>
import AchievementsItemVue from '../../../components/AchievementsItem.vue'
export default {
	layout: 'master',
	components: {
		'achievement-item': AchievementsItemVue,
	},
}
</script>

<style lang="scss" scoped>
.achievement-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
</style>