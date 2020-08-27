<template>
	<div
		class="icon"
		:style="'background-color:' + backgroundColor + '; color:' + color"
		:class="{'shadows': shadows}"
	>
		<i :class="icon"></i>
	</div>
</template>

<script>
export default {
	name: 'NavbarBottomItem',
	props: ['icon', 'color', 'backgroundColor', 'shadows'],
}
</script>

<style lang="scss" scoped>
.icon {
	position: relative;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	i {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 30px;
	}
	&.shadows {
		-webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
		box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
	}
}
</style>
