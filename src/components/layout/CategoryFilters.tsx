import type { LocationCategory } from '@/types/location'
import {
	Bath,
	Dumbbell,
	Flower2,
	Library,
	type LucideIcon,
	MapPin
} from 'lucide-react'

type CategoryFilter = {
	id: LocationCategory
	label: string
	icon: LucideIcon
	state: string
}



const CATEGORIES: CategoryFilter[] = [
	{ id: 'library', label: 'Biblioteca', icon: Library, state: 'aberto' },
	{ id: 'restroom', label: 'Banheiros', icon: Bath, state: 'aberto' },
	{ id: 'sports', label: 'Esportes', icon: Dumbbell, state: 'aberto' },
	{ id: 'flower', label: 'Natureza', icon: Flower2, state: 'aberto' },
	{ id: 'reference', label: 'Referências', icon: MapPin, state: 'aberto' }
]

export function CategoryFilters() {
	return (
		<div className="flex flex-col gap-3">
			<h2
				id="category-heading"
				className="text-[13px] font-bold text-gray-500 uppercase tracking-wider pl-1"
			>
				Locais
			</h2>
			<nav
				className="flex flex-col gap-2"
				aria-labelledby="category-heading"
			>
				{CATEGORIES.map((category) => {
					const Icon = category.icon

					return (


						<button
							type="button"
							key={category.id}
							className="px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-xl text-[14px] font-medium hover:border-emerald-500 hover:text-emerald-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all cursor-pointer shadow-sm flex items-center gap-2"
						>
							<div className="bg-emerald-600 text-white p-2 rounded-full shadow-lg border-2 border-gray-800 flex items-center justify-center hover:bg-emerald-500 transition-colors">
								<Icon size={20} />
							</div>
							<div className="flex flex-col text-left ">
								{category.label}
								<div className="text-[10px]">
									<p>Status:  {category.state} </p>
								</div>
								
							</div>
							
						</button>

					)
				})}
			</nav>
		</div>
	)
}
