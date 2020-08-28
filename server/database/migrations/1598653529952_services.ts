import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Services extends BaseSchema {
	protected tableName = 'services'

	public async up() {
		this.schema.table(this.tableName, (table) => {
			table.integer('translation_id').unsigned().references('id').inTable('translations')
		})
	}

	public async down() {
		this.schema.table(this.tableName, (table) => {
			table.dropColumn('translation_id')
		})
	}
}
