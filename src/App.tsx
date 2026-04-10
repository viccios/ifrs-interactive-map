import { MapContainer, TileLayer } from 'react-leaflet'
import { MarkerLocal } from './components/MarkerLocal'
import { locais } from '../assets/locaisDados'

function App() {
  return (
    <>
      <header
        style={{
          background: 'green',
          fontFamily: 'Arial',
          height: '10vh',
        }}
      >
        <h1 style={{ color: 'white', display: 'grid', placeItems: 'center' }}>
          Mapa interativo - IFRS Campus Restinga
        </h1>
      </header>
      <MapContainer
        center={[-30.1408963, -51.1326784]}
        zoom={17}
        style={{ width: '100%', height: '90vh' }}
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

export default App
