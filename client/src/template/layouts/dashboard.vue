<template>
	<div>
		<client-only>
			<Navbar />
			<LangSwitcher />
		</client-only>
		<Nuxt />
		<DashboardActionButton />
		<NavbarBottom />
	</div>
</template>

<script>
import Navbar from '~/components/Navbar'
import NavbarBottom from '~/components/NavbarBottom'
import LangSwitcher from '~/components/LangSwitcher'
import DashboardActionButton from '~/components/DashboardActionButton'

export default {
	name: 'dashboard',
	components: { Navbar, LangSwitcher, NavbarBottom, DashboardActionButton },
}
</script>

<style lang="scss" scoped>
</style>
