<template>
	<div class="funy-information">
		<funy-item icon="icon-coffee">
			<div class="counter">50</div>
			{{ $t('tassesTeaLabel') }}
		</funy-item>
		<funy-item icon="icon-code">
			<div class="counter">50</div>
			{{ $t('codeLineLabel')}}
		</funy-item>
		<funy-item icon="icon-folder">
			<div class="counter">50</div>
			{{ $t('projetsEndedLabel') }}
		</funy-item>
		<funy-item icon="icon-cog">
			<div class="counter">50</div>
			{{ $t('technologiesMainerLabel') }}
		</funy-item>
	</div>
</template>

<script>
import FunyInformationItemVue from './FunyInformationItem.vue'

export default {
	name: 'FunyInformation',
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