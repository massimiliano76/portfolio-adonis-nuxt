import Frequency from 'App/Models/Frequency'
import Detail from 'App/Models/Detail'
import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

export default class Service extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public label: string

	@column()
	public description: string

	@column()
	public isVisible: boolean

	@column()
	public price: string

	@column()
	public frequencyId: number

	@hasMany(() => Detail)
	public detail: HasMany<typeof Detail>

	@belongsTo(() => Frequency)
	public frequency: BelongsTo<typeof Frequency>

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime
}
