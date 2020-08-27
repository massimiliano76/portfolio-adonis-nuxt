<template>
	<div class="offers-item pt-3">
		<img :src="picture" class="img-fluid" :alt="title" />
		<div class="container">
			<h3 class="pt-2">{{ title }}</h3>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'OffersItem',
	props: ['picture', 'title', 'description'],
}
</script>

<style lang="scss" scoped>
</style>