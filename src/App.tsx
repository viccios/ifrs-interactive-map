import { InteractiveMap } from '@/components/InteractiveMap'
import { Sidebar } from '@/components/layout/Sidebar'

function App() {
	return (
		<main className="w-full h-screen flex bg-gray-900 overflow-hidden font-sans text-gray-100">
			<div className="w-[320px] lg:w-100 h-full shrink-0">
				<Sidebar />
			</div>
			<div className="flex-1 h-full py-2 pr-2 pl-0 z-10">
				<section className="relative w-full h-full bg-gray-800 rounded-[30px] shadow-2xl overflow-hidden border border-gray-700">
					<InteractiveMap />
				</section>
			</div>
		</main>
	)
}

export default App
