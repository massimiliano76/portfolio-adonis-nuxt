<template>
	<div class="login-page">
		<div class="banner pt-3 text-center">
			<div class="text-header">
				<h1>Connexion</h1>
				<p>Développeur web freelance</p>
			</div>
		</div>
		<div class="container">
			<div class="form-group">
				<label for>Email</label>
				<input type="text" class="form-control" v-model="form.email" />
			</div>
			<div class="form-group">
				<label for>Password</label>
				<input type="text" class="form-control" v-model="form.password" />
			</div>
			<button class="btn btn-primary" @click.prevent="handleSubmit">Connexion</button>
		</div>
	</div>
</template>

<script>
export default {
	layout: 'master',
	methods: {
		async handleSubmit() {
			try {
				await this.$auth.loginWith('local', {
					data: this.form,
				})
			} catch (error) {
				console.log(error)
			}
		},
	},
	data() {
		return {
			form: {
				email: '',
				password: '',
				remember_me: false,
			},
		}
	},
}
</script>

<style lang="scss" scoped>
.login-page {
	min-height: 100vh;
	margin-bottom: 100px;
}
</style>