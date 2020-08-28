<template>
	<div class="index">
		<div class="banner text-center">
			<img src="~public/images/background.jpg" class="banner-image" alt="banner-image" />
			<div class="text-header">
				<h1>Baptiste Parmantier</h1>
				<p>Développeur web freelance</p>
			</div>
			<div class="icons show-only-sm">
				<icon icon="icon-shield-check" color="#007bff" backgroundColor="white" :shadows="true"></icon>
				<icon icon="icon-sliders-h" color="#007bff" backgroundColor="white" :shadows="true"></icon>
				<icon icon="icon-code" color="#007bff" backgroundColor="white" :shadows="true"></icon>
			</div>
		</div>
		<section class="attach-section pt-4">
			<div class="container py-5 text-center">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dignissimos. Molestiae, nisi voluptas pariatur distinctio autem dolor porro aperiam, nobis, nemo deleniti maxime rem dolores excepturi iste odio eaque alias.</p>
				<div class="btn btn-primary btn-lg">{{ $t('devisAction') }}</div>
			</div>
		</section>
		<section class="values-section pt-4">
			<values icon="icon-shield-check" :text="values.first" />
			<values icon="icon-sliders-h" :text="values.second" />
			<values icon="icon-code" :text="values.third" />
		</section>
		<section class="show-section pt-4">
			<div class="container">
				<h2>Lorem ipsum dolor sit amet.</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quae aut error fugit natus esse excepturi, officia vero facilis quasi quisquam animi dicta eaque voluptas, illum nesciunt pariatur veniam neque.</p>
			</div>
		</section>
		<section class="pt-4">
			<offers />
		</section>
		<section class="pt-4">
			<funny-information></funny-information>
		</section>
	</div>
</template>

<script>
import iconRoundedVue from '../../components/icon-rounded.vue'
import ValuesSectionVue from '../../components/ValuesSection.vue'
import OffersVue from '../../components/Offers.vue'
import FunyInformationVue from '../../components/FunyInformation.vue'

export default {
	layout: 'master',
	components: {
		icon: iconRoundedVue,
		values: ValuesSectionVue,
		offers: OffersVue,
		'funny-information': FunyInformationVue,
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
.index {
	min-height: 100vh;
	margin-bottom: 81.19px;
	@media screen and (min-width: 576px) {
		margin: 0;
	}
	.banner {
		position: relative;
		width: 100%;
		.banner-image {
			width: 100%;
			filter: brightness(70%);
			border-bottom-left-radius: 50px;
			border-bottom-right-radius: 50px;
			@media screen and (min-width: 576px) {
				height: calc(75vh - 70px);
				border-bottom-left-radius: 150px;
				border-bottom-right-radius: 150px;
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
	.attach-section {
		@media screen and (min-width: 576px) {
			padding: 5rem 0;
		}
		p {
			@media screen and (min-width: 576px) {
				font-size: 20px;
			}
		}
	}
	.values-section {
		@media screen and (min-width: 576px) {
			display: inline-flex;
			justify-content: center;
			padding: 8rem 0;
		}
		.values {
			@media screen and (min-width: 576px) {
				width: 20%;
			}
		}
	}
	.show-section {
		@media screen and (min-width: 576px) {
			padding: 5rem 0;
			h2 {
				font-size: 3rem;
			}
			p {
				font-size: 1.5rem;
			}
		}
	}
}
</style>