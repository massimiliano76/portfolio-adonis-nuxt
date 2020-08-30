<template>
	<div class="about-me">
		<div class="banner">
			<img src="~public/images/showcase.png" class="img-fluid" alt />
			<div class="container">
				<div class="container-info">
					<h1>Project name</h1>
					<div class="badges">
						<div class="badge" style="background-color: #5a45ff">Adonis</div>
						<div class="badge" style="background-color: #4fc08d">Vue.js</div>
						<div class="badge" style="background-color: #7952b3">Bootstrap</div>
						<div class="badge secondary" style="background-color: #cccccc">Application web</div>
					</div>
				</div>
				<div class="container-describes">
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus quam odit corrupti distinctio illum deleniti, voluptate minima maiores rem reiciendis.</p>
					<p>For JUST DO WEB</p>
					<button class="btn btn-primary">Visiter le site web</button>
				</div>
			</div>
		</div>
		<div class="container-technologies">
			<div v-for="(item, key) in 4" class="card" :key="key">
				<img src="https://via.placeholder.com/1920x1080" class="img-fluid" alt="avatar" />
				<div class="card-body">
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, quos facere ipsa harum voluptas molestias. Eaque similique numquam voluptates dolor?</p>
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
	.banner {
		position: relative;
		display: flex;
		flex-direction: column;
		// background-color: #1e202a;
		border-top-left-radius: 50px;
		border-top-right-radius: 50px;
		min-height: calc(60vh);
		@media screen and (min-width: 576px) {
			background: initial;
			display: inline-flex;
			flex-direction: row;
		}
		img {
			order: 2;
			@media screen and (min-width: 576px) {
				width: 50%;
				order: 1;
			}
		}
		.container {
			order: 1;
			@media screen and (min-width: 576px) {
				order: 2;
				width: 50%;
			}
			.container-info {
				padding-top: 2rem;
				width: 90%;
				margin: auto;
				order: 1;
				@media screen and (min-width: 576px) {
					width: 100%;
					order: 2;
					padding: 3rem 0;
				}
			}
			.container-describes {
				width: 90%;
				margin: auto;
				order: 2;
				@media screen and (min-width: 576px) {
					width: 80%;
					order: 3;
					margin-left: initial;
				}
				p {
					line-height: 1.8rem;
					font-size: 16px;
				}
			}
		}
	}
	.container-technologies {
		display: flex;
		flex-direction: column;
		width: 90%;
		margin: auto;
		@media screen and (min-width: 576px) {
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			width: 80%;
		}
		.card {
			margin: 10px;
			width: 100%;
			@media screen and (min-width: 576px) {
				width: calc(25% - 20px);
			}
		}
	}
}
.badges {
	display: flex;
	flex-wrap: wrap;
	padding: 0rem 0 1rem;
	.badge {
		color: white;
		padding: 5px;
		margin: 4px;
		font-size: 12px;
		width: fit-content;
	}
}
</style>