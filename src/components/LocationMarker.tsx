import * as L from 'leaflet'
import {
	Bath,
	Dumbbell,
	Flower2,
	Library,
	type LucideIcon,
	MapPin
} from 'lucide-react'
import { renderToString } from 'react-dom/server'
import { Marker } from 'react-leaflet'
import type { LocationCategory, MapLocation } from '@/types/location'

const iconMap: Record<LocationCategory, LucideIcon> = {
	restroom: Bath,
	reference: MapPin,
	library: Library,
	sports: Dumbbell,
	flower: Flower2
}

const getIcon = (type: LocationCategory) => {
	const IconComponent = iconMap[type]
	const html = renderToString(
		<div className="bg-emerald-600 text-white p-2 rounded-full shadow-lg border-2 border-gray-800 flex items-center justify-center hover:bg-emerald-500 transition-colors">
			<IconComponent size={20} />
		</div>
	)

	return L.divIcon({
		html,
		className: 'bg-transparent border-none',
		iconSize: [40, 40],
		iconAnchor: [20, 20]
	})
}

type LocationMarkerProps = MapLocation & {
	onClick: () => void
}

export function LocationMarker({
	position,
	type,
	onClick
}: LocationMarkerProps) {
	return (
		<Marker
			position={position}
			icon={getIcon(type)}
			eventHandlers={{ click: onClick }}
		/>
	)
}
