import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import StoreValidator from 'App/Validators/funy/StoreValidator'
import UpdateValidator from 'App/Validators/funy/UpdateValidator'
import FunyInformation from 'App/Models/FunyInformation'

export default class FunyInformationsController {
	public async index() {
		const funyInformations = await FunyInformation.query().preload('translation')
		return { funyInformations }
	}

	public async show({ params }: HttpContextContract) {
		const funyInformation = await FunyInformation.findOrFail(params.id)
		return { funyInformation }
	}

	public async store({ request }: HttpContextContract) {
		const data = await request.validate(StoreValidator)
		const funyInformation = await FunyInformation.create(data)

		return { funyInformation }
	}

	public async update({ request, params }: HttpContextContract) {
		const data = await request.validate(UpdateValidator)
		await FunyInformation.query().where('id', params.id).update(data)

		return { message: 'La ressource a été mis à jour' }
	}

	public async destroy({ params }: HttpContextContract) {
		const funyInformation = await FunyInformation.findOrFail(params.id)

		await funyInformation.delete()
		return { message: 'La ressource a bien été supprimé' }
	}
}
