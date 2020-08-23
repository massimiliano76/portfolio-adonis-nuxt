import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
	public async run() {
		await User.create({
			firstname: 'Baptiste',
			lastname: 'Parmantier',
			email: 'baptiste.parmantier.pro@gmail.com',
			password: '486279315Aa?'
		})
	}
}
