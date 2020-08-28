import axios from 'axios'

export default async function () {
	let informations = {}
	const { data } = await axios.get('http://localhost:3333/api/translations')
	data.translations.map((item: any) => {
		const { translation_code, en } = item
		informations = { ...informations, [translation_code]: en }
	})
	return informations
}
