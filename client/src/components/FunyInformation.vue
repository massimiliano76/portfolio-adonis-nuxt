<template>
	<div class="funy-information">
		<funy-item v-for="(item, key) in funyInformations" :key="key" :icon="'icon-' + item.icon">
			<div class="counter">{{ item.count }}</div>
			{{ $t(item.translation.translation_code) }}
		</funy-item>
	</div>
</template>

<script>
import FunyInformationItemVue from './FunyInformationItem.vue'

export default {
	name: 'FunyInformation',
	async mounted() {
		const { data } = await this.$axios.get('/funy-informations')
		this.funyInformations = data.funyInformations
	},
	data() {
		return {
			funyInformations: [],
		}
	},
	components: {
		'funy-item': FunyInformationItemVue,
	},
}
</script>

<style lang="scss" scoped>
.funy-information {
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	.values {
		align-items: stretch;
		width: 50%;
		margin: 0px;
	}
}
</style>