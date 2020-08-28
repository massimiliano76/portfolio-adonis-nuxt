import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class FunyInformations extends BaseSchema {
	protected tableName = 'funy_informations'

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id')
			table.integer('translation_id').unsigned().references('id').inTable('translations')
			table.integer('count').defaultTo(0)
			table.string('icon').notNullable()
			table.timestamps(true, true)
		})
	}

	public async down() {
		this.schema.dropTable(this.tableName)
	}
}
