import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Translation from 'App/Models/Translation'
import FunyInformation from 'App/Models/FunyInformation'

export default class TranslationSeeder extends BaseSeeder {
	public async run() {
		await Translation.createMany([
			{
				translationCode: 'headerLangs',
				fr: 'Choisissez votre langue',
				en: 'Choose your language.'
			},
			{
				translationCode: 'devisAction',
				fr: 'Obtenez un devis',
				en: 'Get a quote'
			},
			{
				translationCode: 'technologiesMainerLabel',
				fr: 'Technologies',
				en: 'Mastered technologies'
			},
			{
				translationCode: 'tassesTeaLabel',
				fr: 'Tasses de thé',
				en: 'Cup of tea'
			},
			{
				translationCode: 'projetsEndedLabel',
				fr: 'Projets terminés',
				en: 'Completed projects'
			},
			{
				translationCode: 'codeLineLabel',
				fr: 'Lignes de code',
				en: 'Lines of code '
			},
			{
				translationCode: 'homeLabel',
				fr: 'Accueil',
				en: 'Home'
			},
			{
				translationCode: 'meLabel',
				fr: 'Portrait',
				en: 'Portrait'
			},
			{
				translationCode: 'achievementLabel',
				fr: 'Réalisations',
				en: 'Achievements'
			},
			{
				translationCode: 'contactLabel',
				fr: 'Contact',
				en: 'Contact'
			},
			{
				translationCode: 'configLabel',
				fr: 'Config',
				en: 'Config'
			}
		])

		await FunyInformation.createMany([
			{
				translationId: 4,
				count: 50,
				icon: 'coffee'
			},
			{
				translationId: 5,
				count: 50,
				icon: 'folder'
			},
			{
				translationId: 6,
				count: 50,
				icon: 'code'
			},
			{
				translationId: 3,
				count: 50,
				icon: 'cog'
			}
		])
	}
}
