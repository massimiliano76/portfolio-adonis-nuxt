<template>
	<div>
		<client-only>
			<Navbar />
			<LangSwitcher />
		</client-only>
		<Nuxt />
		<NavbarBottom />
	</div>
</template>

<script>
import Navbar from '~/components/Navbar'
import NavbarBottom from '~/components/NavbarBottom'
import LangSwitcher from '~/components/LangSwitcher'

export default {
	name: 'master',
	components: { Navbar, LangSwitcher, NavbarBottom },
}
</script>

<style lang="scss" scoped>
</style>
