import type { LocationCategory } from '@/types/location'

type CategoryFilter = {
	id: LocationCategory
	label: string
}

const CATEGORIES: CategoryFilter[] = [
	{ id: 'library', label: 'Biblioteca' },
	{ id: 'restroom', label: 'Banheiros' },
	{ id: 'sports', label: 'Esportes' },
	{ id: 'flower', label: 'Natureza' },
	{ id: 'reference', label: 'Referências' }
]

export function CategoryFilters() {
	return (
		<div className="flex flex-col gap-3">
			<h2
				id="category-heading"
				className="text-[13px] font-bold text-gray-500 uppercase tracking-wider pl-1"
			>
				Categorias
			</h2>
			<nav
				className="flex flex-wrap gap-2.5"
				aria-labelledby="category-heading"
			>
				{CATEGORIES.map((category) => (
					<button
						type="button"
						key={category.id}
						className="px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-xl text-[14px] font-medium hover:border-emerald-500 hover:text-emerald-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all cursor-pointer shadow-sm"
					>
						{category.label}
					</button>
				))}
			</nav>
		</div>
	)
}
