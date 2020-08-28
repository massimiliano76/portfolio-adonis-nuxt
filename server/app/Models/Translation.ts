import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Translation extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public translationCode: string

	@column()
	public fr: string

	@column()
	public en: string

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime
}
