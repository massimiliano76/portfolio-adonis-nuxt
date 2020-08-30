<template>
	<div class="about-me">
		<div class="header">
			<img src="https://via.placeholder.com/1000x1000" class="img-fluid" alt="avatar" />
			<div class="me">
				<h1>Baptiste Parmantier</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus recusandae incidunt quo beatae iste saepe doloremque tempora deleniti nesciunt sunt fugit, illum accusantium consectetur quis? Suscipit quas neque reprehenderit eligendi.</p>
			</div>
		</div>
		<div class="container">
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
export default {
	layout: 'master',
}
</script>

<style lang="scss" scoped>
.about-me {
	min-height: 100vh;
	margin-bottom: calc(81.19px + 1rem);
	@media screen and (min-width: 576px) {
		margin: 0;
	}
	.header {
		display: flex;
		flex-wrap: wrap;
		width: 90vw;
		margin: auto;
		img {
			padding: 2rem;
			border-radius: 50%;
		}
		.me {
		}
	}
	.container {
		.card {
			margin: 1rem;
		}
	}
}
</style>