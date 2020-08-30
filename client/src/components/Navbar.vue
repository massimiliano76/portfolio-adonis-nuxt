<template>
	<b-navbar toggleable="lg" type="light" sticky>
		<b-navbar-brand href="#">
			<img src="~public/images/logo.svg" style="height: 50px" alt="Logo Leadcode" />
		</b-navbar-brand>

		<b-collapse id="nav-collapse" is-nav>
			<b-navbar-nav>
				<b-nav-item>
					<nuxt-link to="/">{{ $t('homeLabel') }}</nuxt-link>
				</b-nav-item>
				<b-nav-item>
					<nuxt-link to="/about-me">{{ $t('meLabel') }}</nuxt-link>
				</b-nav-item>
				<b-nav-item>
					<nuxt-link to="/achievements">{{ $t('achievementLabel') }}</nuxt-link>
				</b-nav-item>
				<b-nav-item>
					<nuxt-link to="/">{{ $t('contactLabel') }}</nuxt-link>
				</b-nav-item>
			</b-navbar-nav>

			<b-navbar-nav class="ml-auto">
				<b-nav-item-dropdown v-if="this.$auth.loggedIn" right>
					<template v-slot:button-content>
						<b-avatar></b-avatar>
						{{ identity }}
					</template>
					<b-dropdown-item href="#">Mon profil</b-dropdown-item>
					<b-dropdown-item @click="handleLogout">Se déconnecter</b-dropdown-item>
				</b-nav-item-dropdown>
				<nuxt-link v-else to="/authentication/login" right>Connexion</nuxt-link>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
export default {
	name: 'Navbar',
	methods: {
		toggleModal: function () {
			this.$refs['login-modal'].show()
		},
		handleLogout: async function () {
			await this.$auth.logout()
			await this.$router.push('/')
		},
	},
	computed: {
		identity() {
			return this.$auth.user.firstname + ' ' + this.$auth.user.lastname
		},
	},
}
</script>

<style lang="scss" scoped>
.custom-input-group {
	margin-bottom: 10px !important;
}
.b-avatar {
	margin-right: 10px;
}
.navbar {
	height: 70px;
	background-color: white;
	.navbar-collapse {
		margin-left: 50px;
		a {
			font-weight: 500;
		}
	}
	@media screen and (min-width: 576px) {
		padding: 0 10%;
	}
}
</style>
