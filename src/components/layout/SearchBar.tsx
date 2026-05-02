import { Search } from 'lucide-react'

export function SearchBar() {
	return (
		<div className="relative flex items-center group">
			<div className="absolute left-3.5 text-gray-500 group-focus-within:text-emerald-500 transition-colors">
				<Search size={18} />
			</div>
			<input
				type="text"
				placeholder="Buscar local..."
				aria-label="Buscar local"
				className="w-full pl-11 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl outline-none focus:bg-gray-800 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-[15px] text-gray-200 placeholder:text-gray-500 shadow-sm"
			/>
		</div>
	)
}
