export type LocationCategory =
	| 'restroom'
	| 'reference'
	| 'library'
	| 'sports'
	| 'flower'

export type MapLocation = {
	id?: string
	type: LocationCategory
	description: string
	imageUrl: string[]
	position: [number, number]
}
