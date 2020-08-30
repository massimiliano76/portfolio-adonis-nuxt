<template>
	<div class="about-me">
		<div class="header">
			<div class="banner">
				<img src="https://via.placeholder.com/1000x1000" class="img-fluid" alt="avatar" />
			</div>
			<div class="me">
				<div class="container">
					<h1>Baptiste Parmantier</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus recusandae incidunt quo beatae iste saepe doloremque tempora deleniti nesciunt sunt fugit, illum accusantium consectetur quis? Suscipit quas neque reprehenderit eligendi.</p>
					<div class="social-container">
						<social-item
							icon="linkedin"
							color="#0073B2"
							target="https://www.linkedin.com/in/baptiste-parmantier/"
						/>
						<social-item
							icon="facebook-square"
							color="#004AAF"
							target="https://www.facebook.com/parmantier.baptiste/"
						/>
						<social-item icon="twitter" color="#1DA1F2" target="https://twitter.com/LeadcodeDev" />
						<social-item icon="github" color="#24292E" target="https://github.com/LeadcodeDev" />
						<social-item icon="discord" color="#7B8DCF" />
					</div>
				</div>
			</div>
		</div>
		<div class="cards-container">
			<div v-for="(n, key) in 6" class="card" :key="key">
				<img src="https://via.placeholder.com/1920x1080" class="img-fluid" alt="avatar" />
				<div class="card-body">
					<h4>Technologie</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi similique ex error, eligendi quos officiis doloremque nam sint nesciunt?</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SocialItemVue from '../../components/SocialItem.vue'
export default {
	layout: 'master',
	components: {
		'social-item': SocialItemVue,
	},
}
</script>

<style lang="scss" scoped>
$avatarWidth: 200px;
.about-me {
	min-height: 100vh;
	margin-bottom: calc(81.19px + 1rem);
	@media screen and (min-width: 576px) {
		margin: 0;
	}
	.header {
		display: flex;
		flex-wrap: wrap;
		width: 100vw;
		margin: auto;
		@media screen and (min-width: 576px) {
			flex-wrap: nowrap;
			justify-content: center;
			padding: 3rem 0;
		}
		.banner {
			background: #1e202a;
			position: relative;
			min-height: 20vh;
			width: 100%;
			@media screen and (min-width: 576px) {
				display: flex;
				background: initial;
				width: fit-content;
			}

			img {
				border-radius: 50%;
				width: $avatarWidth;
				position: absolute;
				bottom: -$avatarWidth;
				left: 50%;
				transform: translate(-50%, -50%);
				@media screen and (min-width: 576px) {
					width: 250px;
					height: 250px;
					position: initial;
					left: 0;
					transform: translate(0);
					align-self: center;
					margin-right: 2rem;
				}
			}
		}
		.me {
			padding-top: $avatarWidth / 1.8;
			text-align: justify;
			@media screen and (min-width: 576px) {
				align-self: center;
				width: 30%;
			}
			h1 {
				margin-bottom: 1.5rem;
				@media screen and (min-width: 576px) {
					margin-bottom: 3rem;
				}
			}
			.social-container {
				display: inline-flex;
				justify-content: center;
				width: 100%;
				@media screen and (min-width: 576px) {
					justify-content: left;
				}
				.social-item {
					margin: 5px;
					&:first-child {
						margin-left: 0;
					}
				}
			}
		}
	}
	.cards-container {
		margin-top: 4rem;
		@media screen and (min-width: 576px) {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
		.card {
			margin: 1rem;
			text-align: justify;
			@media screen and (min-width: 576px) {
				width: 25%;
			}
		}
	}
}
</style>