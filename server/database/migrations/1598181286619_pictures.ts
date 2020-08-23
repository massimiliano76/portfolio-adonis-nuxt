import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pictures extends BaseSchema {
	protected tableName = 'pictures'

	public async up() {
		this.schema.table(this.tableName, (table) => {
			table.integer('service_id').unsigned().references('id').inTable('services')
		})
	}

	public async down() {
		this.schema.table(this.tableName, (table) => {
			table.dropColumn('service_id')
		})
	}
}
