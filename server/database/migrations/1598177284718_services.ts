import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Services extends BaseSchema {
	protected tableName = 'services'

	public async up() {
		this.schema.table(this.tableName, (table) => {
			table.integer('frequency_id').unsigned().references('id').inTable('frequencies')
		})
	}

	public async down() {
		this.schema.table(this.tableName, (table) => {
			table.dropColumn('frequency_id')
		})
	}
}
