<template>
	<div class="navbar-bottom">
		<NavbarBottomItem target="/" icon="icon-home-lg-alt" label="homeLabel" />
		<NavbarBottomItem target="/" icon="icon-user" label="meLabel" />
		<NavbarBottomItem target="/" icon="icon-pencil-ruler" label="achievementLabel" />
		<NavbarBottomItem target="/" icon="icon-comment-alt-smile" label="contactLabel" />
		<NavbarBottomItem
			v-if="this.$auth.loggedIn"
			target="/dashboard"
			icon="icon-cog"
			label="configLabel"
		/>
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
	-webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
	-moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
	@media screen and (min-width: 768px) {
		display: none;
	}
}
</style>