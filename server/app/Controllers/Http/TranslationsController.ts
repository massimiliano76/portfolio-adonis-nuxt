// import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Translation from 'App/Models/Translation'
import StoreValidator from 'App/Validators/translations/StoreValidator'
import UpdateValidator from 'App/Validators/translations/UpdateValidator'

export default class TranslationsController {
	public async index() {
		const translations = await Translation.all()
		return { translations }
	}

	public async show({ params }: HttpContextContract) {
		const translation = await Translation.findOrFail(params.id)
		return { translation }
	}

	public async store({ request }: HttpContextContract) {
		const data = await request.validate(StoreValidator)
		const translation = await Translation.create(data)

		return { translation }
	}

	public async update({ request, params }: HttpContextContract) {
		const data = await request.validate(UpdateValidator)
		await Translation.query().where('id', params.id).update(data)

		return { message: 'La ressource a été mis à jour' }
	}

	public async destroy({ params }: HttpContextContract) {
		const translation = await Translation.findOrFail(params.id)

		await translation.delete()
		return { message: 'La ressource a bien été supprimé' }
	}
}
