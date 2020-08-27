<template>
	<div>
		<div class="banner text-center">
			<img src="~public/images/background.jpg" class="banner-image" alt="banner-image" />
			<div class="text-header">
				<h1>Baptiste Parmantier</h1>
				<p>Développeur web freelance</p>
			</div>
			<div class="icons">
				<icon icon="icon-shield-check" color="#007bff" backgroundColor="white" :shadows="true"></icon>
				<icon icon="icon-sliders-h" color="#007bff" backgroundColor="white" :shadows="true"></icon>
				<icon icon="icon-code" color="#007bff" backgroundColor="white" :shadows="true"></icon>
			</div>
		</div>
		<section class="py-5">
			<div class="container pb-4 text-center">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dignissimos. Molestiae, nisi voluptas pariatur distinctio autem dolor porro aperiam, nobis, nemo deleniti maxime rem dolores excepturi iste odio eaque alias.</p>
				<div class="btn btn-primary">Obtenir un devis</div>
			</div>
			<values icon="icon-shield-check" :text="values.first" />
			<values icon="icon-sliders-h" :text="values.second" />
			<values icon="icon-code" :text="values.third" />
		</section>
	</div>
</template>

<script>
import iconRoundedVue from '../../components/icon-rounded.vue'
import ValuesSectionVue from '../../components/ValuesSection.vue'

export default {
	layout: 'master',
	components: {
		icon: iconRoundedVue,
		values: ValuesSectionVue,
	},
	data() {
		return {
			values: {
				first: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi fugit corrupti repellendus fugiat possimus numquam culpa et blanditiis iste ipsa.',
				second: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi fugit corrupti repellendus fugiat possimus numquam culpa et blanditiis iste ipsa.',
				third: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi fugit corrupti repellendus fugiat possimus numquam culpa et blanditiis iste ipsa.',
			},
		}
	},
}
</script>

<style lang="scss">
.banner {
	position: relative;
	.banner-image {
		width: 100vw;
		filter: brightness(70%);
		border-bottom-left-radius: 50px;
		border-bottom-right-radius: 50px;
		@media screen and (min-width: 576px) {
			border-radius: initial;
			height: calc(75vh - 70px);
		}
	}
	.text-header {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
	}
	.icons {
		position: absolute;
		left: 50%;
		bottom: -50px;
		transform: translate(-50%, -50%);
		width: 100%;
		display: inline-flex;
		justify-content: center;
		.icon {
			margin: 0 10px;
		}
	}
}
</style>
