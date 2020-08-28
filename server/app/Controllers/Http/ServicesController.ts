// import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Service from 'App/Models/Service'
import StoreValidator from 'App/Validators/services/StoreValidator'
import UpdateValidator from 'App/Validators/services/UpdateValidator'

export default class ServicesController {
	public async index() {
		const services = await Service.query().preload('label').preload('detail')
		return { services }
	}

	public async show({ params }: HttpContextContract) {
		const service = await Service.findOrFail(params.id)
		return { service }
	}

	public async store({ request }: HttpContextContract) {
		const data = await request.validate(StoreValidator)
		const service = await Service.create(data)

		return { service }
	}

	public async update({ request, params }: HttpContextContract) {
		const data = await request.validate(UpdateValidator)
		await Service.query().where('id', params.id).update(data)

		return { message: 'La ressource a été mis à jour' }
	}

	public async destroy({ params }: HttpContextContract) {
		const service = await Service.findOrFail(params.id)

		await service.delete()
		return { message: 'La ressource a bien été supprimé' }
	}
}
