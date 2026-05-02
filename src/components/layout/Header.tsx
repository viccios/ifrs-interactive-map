import { PanelLeftClose } from 'lucide-react'
import ifLogo from '@/assets/images/ifrs_logo.png'

export function Header() {
	return (
		<header className="px-6 py-5 flex items-center justify-between border-b border-gray-800 bg-gray-900">
			<div className="flex items-center gap-4">
				<div className="h-12 w-12 bg-gray-800 flex items-center justify-center rounded-xl border border-gray-700 shadow-sm p-2">
					<img
						src={ifLogo}
						alt="IFRS Logo"
						className="h-full w-full object-contain"
						draggable={false}
					/>
				</div>
				<h1 className="text-emerald-500 text-xl font-bold tracking-tight">
					Mapa IFRS
				</h1>
			</div>
			<button
				type="button"
				className="text-gray-500 hover:text-emerald-500 transition-colors cursor-pointer outline-none focus:ring-2 focus:ring-emerald-500/20 rounded-md"
				aria-label="Recolher barra lateral"
			>
				<PanelLeftClose size={24} />
			</button>
		</header>
	)
}
