import { Marker, Popup } from 'react-leaflet'
import banheiroPng from './banheiro.png'
import * as L from 'leaflet'

const iconeBanheiro = L.icon({
  iconUrl: banheiroPng,
  iconSize: [25, 25],
})

type MarkerBanheiroProps = {
  position: [number, number]
}

export function MarkerBanheiro({ position }: MarkerBanheiroProps) {
  return (
    <Marker position={position} icon={iconeBanheiro}>
      <Popup>Banheiro</Popup>
    </Marker>
  )
}
