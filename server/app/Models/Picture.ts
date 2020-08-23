import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Picture extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public filename: string

	@column()
	public label: string

	@column()
	public userId: number

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime
}
