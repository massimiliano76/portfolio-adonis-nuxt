<template>
	<div class="navbar-bottom">
		<NavbarBottomItem target="/" icon="icon-home-lg-alt" label="Accueil" />
		<NavbarBottomItem target="/" icon="icon-user" label="Accueil" />
		<NavbarBottomItem target="/" icon="icon-pencil-ruler" label="Réalisations" />
		<NavbarBottomItem target="/" icon="icon-comment-alt-smile" label="Contact" />
	</div>
</template>

<script>
import NavbarBottomItem from '~/components/NavbarBottomItem'
export default {
	name: 'NavbarBottom',
	components: {
		NavbarBottomItem,
	},
}
</script>

<style lang="scss" scoped>
.navbar-bottom {
	position: fixed;
	bottom: 0;
	left: 0;
	height: 10vh;
	width: 100vw;
	background: white;
	display: inline-flex;
	justify-content: space-between;
	@media screen and (min-width: 768px) {
		display: none;
	}
}
</style>