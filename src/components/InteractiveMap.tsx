import { ImageOff } from 'lucide-react'
import { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { LocationMarker } from '@/components/LocationMarker'
import { Modal } from '@/components/Modal'
import { locations } from '@/data/locations'
import type { MapLocation } from '@/types/location'

export function InteractiveMap() {
	const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(
		null
	)

	return (
		<>
			<MapContainer
				center={[-30.1408963, -51.1326784]}
				zoom={18}
				className="w-full h-full z-0"
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				{locations.map((location) => (
					<LocationMarker
						position={location.position}
						key={location.id}
						type={location.type}
						description={location.description}
						imageUrl={location.imageUrl}
						onClick={() => setSelectedLocation(location)}
					/>
				))}
			</MapContainer>

			<Modal
				isOpen={Boolean(selectedLocation)}
				onClose={() => setSelectedLocation(null)}
			>
				{selectedLocation && (
					<div className="flex flex-col gap-4">
						<p className="text-gray-300 text-lg leading-relaxed font-medium">
							{selectedLocation.description}
						</p>

						{selectedLocation.imageUrl &&
						selectedLocation.imageUrl.length > 0 ? (
							<div className="grid grid-cols-1 gap-4 mt-2">
								{selectedLocation.imageUrl.map((url) => {
									const cleanUrl = `${import.meta.env.BASE_URL}/${url}`.replace(
										/([^:]\/)\/+/g,
										'$1'
									)
									return (
										<img
											src={cleanUrl}
											alt={selectedLocation.description}
											key={url}
											className="w-full h-auto max-h-87.5 object-cover rounded-2xl shadow-sm border border-gray-700 bg-gray-900"
											loading="lazy"
										/>
									)
								})}
							</div>
						) : (
							<div className="flex flex-col items-center justify-center p-8 mt-2 bg-gray-800/50 border border-dashed border-gray-700 rounded-2xl">
								<ImageOff size={40} className="text-gray-600 mb-3" />
								<p className="text-gray-500 font-medium text-sm">
									Nenhuma imagem disponível
								</p>
							</div>
						)}
					</div>
				)}
			</Modal>
		</>
	)
}
