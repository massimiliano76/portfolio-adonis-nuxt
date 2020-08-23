import Picture from 'App/Models/Picture'
import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
	column,
	beforeSave,
	BaseModel,
	hasOne,
	HasOne
} from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public email: string

	@column()
	public firstname: string

	@column()
	public lastname: string

	@column()
	public password: string

	@hasOne(() => Picture)
	public avatar: HasOne<typeof Picture>

	@column()
	public rememberMeToken?: string

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime

	@beforeSave()
	public static async hashPassword(user: User) {
		if (user.$dirty.password) {
			user.password = await Hash.make(user.password)
		}
	}
}
