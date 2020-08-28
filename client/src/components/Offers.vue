<template>
	<div class="offers-section">
		<div class="offers-item pt-3">
			<img src="https://via.placeholder.com/1920x1080" class="img-fluid" alt="Lorem ipsum" />
			<div class="container">
				<h3 class="pt-2">Lorem, ipsum dolor.</h3>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A labore officiis explicabo sint modi aut tempora recusandae iure ipsa maiores?</p>
				<ul class="mt-2">
					<li>Element</li>
					<li>Element</li>
					<li>Element</li>
					<li>Element</li>
				</ul>
			</div>
		</div>
		<div class="offers-item pt-3">
			<img src="https://via.placeholder.com/1920x1080" class="img-fluid" alt="Lorem ipsum" />
			<div class="container">
				<h3 class="pt-2">Lorem, ipsum dolor.</h3>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A labore officiis explicabo sint modi aut tempora recusandae iure ipsa maiores?</p>
				<ul class="mt-2">
					<li>Element</li>
					<li>Element</li>
					<li>Element</li>
					<li>Element</li>
				</ul>
			</div>
		</div>
		<div class="offers-item pt-3">
			<img src="https://via.placeholder.com/1920x1080" class="img-fluid" alt="Lorem ipsum" />
			<div class="container">
				<h3 class="pt-2">Lorem, ipsum dolor.</h3>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A labore officiis explicabo sint modi aut tempora recusandae iure ipsa maiores?</p>
				<ul class="mt-2">
					<li>Element</li>
					<li>Element</li>
					<li>Element</li>
					<li>Element</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Offers',
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 576px) {
	.offers-section {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 2rem 0;
		.offers-item {
			display: inline-flex;
			width: 80%;
			justify-content: center;
			padding: 8rem 0;
			img {
				width: 45%;
				border-radius: 24px;
			}
			.container {
				padding: 2rem 0;
				width: 45%;
				h3 {
					font-size: 2.5rem;
					margin: 1rem 0;
				}
				p {
					font-size: 1.2rem;
				}
				ul li {
					font-size: 1.2rem;
				}
			}
		}
		.offers-item:nth-child(odd) {
			img {
				order: 2;
			}
		}
	}
}
</style>