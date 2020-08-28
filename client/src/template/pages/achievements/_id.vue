<template>
	<div class="about-me">
		<div class="container-info">
			<h1>Project name</h1>
			<div class="badges">
				<div class="badge" style="background-color: #5a45ff">Adonis</div>
				<div class="badge" style="background-color: #4fc08d">Vue.js</div>
				<div class="badge" style="background-color: #7952b3">Bootstrap</div>
				<div class="badge secondary" style="background-color: #cccccc">Application web</div>
			</div>
		</div>
		<div class="banner">
			<img src="~public/images/showcase.png" class="img-fluid" alt />
			<div class="container-describes">
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus quam odit corrupti distinctio illum deleniti, voluptate minima maiores rem reiciendis.</p>
				<div class="client">
					<p>For JUST DO WEB</p>
				</div>
				<button class="btn btn-primary">Visiter le site web</button>
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
	.container-info {
		padding-top: 2rem;
		padding-bottom: 15vh;
		width: 90%;
		margin: auto;
	}
	.banner {
		position: relative;
		background-color: #1e202a;
		border-top-left-radius: 50px;
		border-top-right-radius: 50px;
		min-height: calc(65vh);
		img {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		.container-describes {
			width: 90%;
			margin: auto;
			padding-top: 6rem;
			p {
				color: white;
				line-height: 1.8rem;
				font-size: 16px;
			}
		}
	}
}
.badges {
	display: flex;
	flex-wrap: wrap;
	.badge {
		color: white;
		padding: 5px;
		margin: 4px;
		font-size: 14px;
		width: fit-content;
	}
}
</style>