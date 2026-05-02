import type { MapLocation } from '@/types/location'

export const locations: MapLocation[] = [
	{
		id: 'block_1_restroom',
		type: 'restroom',
		description: 'Banheiro do corredor de ensino',
		imageUrl: ['images/block_1_restroom_left.jpg'],
		position: [-30.14144921356257, -51.130797828931925]
	},
	{
		id: 'block_2_restroom_agender',
		type: 'restroom',
		description: 'Banheiro agênero',
		imageUrl: ['images/block_2_restroom.jpg'],
		position: [-30.141434136530837, -51.130365993267205]
	},
	{
		id: 'library_restroom',
		type: 'restroom',
		description: 'Banheiro perto da biblioteca',
		imageUrl: ['images/block_1_restroom_left.jpg'],
		position: [-30.141707842286756, -51.13044511843559]
	},
	{
		id: 'block_2_restroom_mens',
		type: 'restroom',
		description: 'Banheiro masculino',
		imageUrl: [],
		position: [-30.141685806681963, -51.130140687703005]
	},
	{
		id: 'block_2_restroom_womens',
		type: 'restroom',
		description: 'Banheiro feminino',
		imageUrl: [],
		position: [-30.141550113638743, -51.1300333993391]
	},
	{
		id: 'block_3_restroom',
		type: 'restroom',
		description: 'Banheiro do bloco 3',
		imageUrl: ['images/block_3_restroom.jpg'],
		position: [-30.14126828902699, -51.13023322391849]
	},
	{
		id: 'block_4_restroom',
		type: 'restroom',
		description: 'Banheiro do bloco 4',
		imageUrl: [
			'images/block_4_restroom_1.jpg',
			'images/block_4_restroom_2.jpg'
		],
		position: [-30.141074606620165, -51.13007765580158]
	},
	{
		id: 'block_5_restroom',
		type: 'restroom',
		description: 'Banheiro do bloco 5',
		imageUrl: [
			'images/block_5_restroom_1.jpg',
			'images/block_5_restroom_2.jpg'
		],
		position: [-30.140860047829424, -51.12990733552388]
	},
	{
		id: 'agricology_restroom',
		type: 'restroom',
		description: 'Banheiro da agricologia',
		imageUrl: [
			'images/agricology_restroom_1.jpg',
			'images/agricology_restroom_2.jpg',
			'images/agricology_restroom_3.jpg',
			'images/agricology_restroom_4.jpg'
		],
		position: [-30.140621516266794, -51.1307370362456]
	},
	{
		id: 'library',
		type: 'library',
		description: 'Biblioteca',
		imageUrl: [],
		position: [-30.141820164020242, -51.13031450449085]
	},
	{
		id: 'near_lake',
		type: 'reference',
		description: 'Local perto do lago com as plantações',
		imageUrl: [],
		position: [-30.140973530309022, -51.1319426053998]
	},
	{
		id: 'gymnasium',
		type: 'sports',
		description: 'Ginásio',
		imageUrl: [],
		position: [-30.14089568180945, -51.13167979056607]
	},
	{
		id: 'volleyball_court',
		type: 'sports',
		description: 'Quadra de vôlei de areia',
		imageUrl: [],
		position: [-30.140857512405805, -51.13082029839561]
	},
	{
		id: 'greenhouse',
		type: 'flower',
		description: 'Estufa',
		imageUrl: [],
		position: [-30.140497443543325, -51.13068044958903]
	},
	{
		id: 'bioconstruction',
		type: 'reference',
		description: 'Telhado na frente da churrasqueira',
		imageUrl: [],
		position: [-30.140561026260926, -51.13084901269282]
	}
]
