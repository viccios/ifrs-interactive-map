import { CategoryFilters } from '@/components/layout/CategoryFilters'
import { Header } from '@/components/layout/Header'
import { SearchBar } from '@/components/layout/SearchBar'

export function Sidebar() {
	return (
		<aside className="bg-gray-900 flex flex-col h-full">
			<Header />
			<div className="p-6 flex flex-col gap-5 flex-1 overflow-y-auto">
				<SearchBar />
				<CategoryFilters />
			</div>
		</aside>
	)
}
