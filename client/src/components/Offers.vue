<template>
	<div>
		<offer-item title="Lorem ipsum" picture="https://via.placeholder.com/1920x1080">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. A labore officiis explicabo sint modi aut tempora recusandae iure ipsa maiores?
			<ul class="mt-2">
				<li>Element</li>
				<li>Element</li>
				<li>Element</li>
				<li>Element</li>
			</ul>
		</offer-item>
		<offer-item title="Lorem ipsum" picture="https://via.placeholder.com/1920x1080">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. A labore officiis explicabo sint modi aut tempora recusandae iure ipsa maiores?
			<ul class="mt-2">
				<li>Element</li>
				<li>Element</li>
				<li>Element</li>
				<li>Element</li>
			</ul>
		</offer-item>
		<offer-item title="Lorem ipsum" picture="https://via.placeholder.com/1920x1080">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. A labore officiis explicabo sint modi aut tempora recusandae iure ipsa maiores?
			<ul class="mt-2">
				<li>Element</li>
				<li>Element</li>
				<li>Element</li>
				<li>Element</li>
			</ul>
		</offer-item>
	</div>
</template>

<script>
import OffersItemVue from './OffersItem.vue'
export default {
	name: 'Offers',
	components: {
		'offer-item': OffersItemVue,
	},
}
</script>

<style lang="scss" scoped>
</style>