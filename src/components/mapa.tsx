import { MapContainer, TileLayer } from 'react-leaflet'
import { MarkerLocal } from './MarkerLocal' 
import { locais } from '../../assets/locaisDados' 

export function Mapa() {
  return (
    <>
      <MapContainer
        center={[-30.1408963, -51.1326784]}
        zoom={18}
        style={{ width: '100%', height: '100%', borderRadius: '5%'  }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locais.map((local) => (
          <MarkerLocal
            position={local.position}
            key={local.id}
            type={local.type}
            description={local.description}
            imageUrl={local.imageUrl}
          />
        ))}
      </MapContainer>
    </>
  )
}

