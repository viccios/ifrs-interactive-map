import * as L from 'leaflet'
import { useState } from 'react'
import { Marker } from 'react-leaflet'
import banheiroSVG from './banheiro.svg'
import referenciaSVG from './referencia.svg'
import esportesSVG from './esportes.svg'
import bibliotecaSVG from './biblioteca.svg'
import florSVG from './flor.svg'
import { Modal } from './Model'
import type { Local } from '../../assets/locaisDados'

const icones:Record<string,L.Icon> = {
  banheiro: L.icon({
    iconUrl: banheiroSVG,
    iconSize: [25, 25],
  }),
  referencia: L.icon({
    iconUrl: referenciaSVG,
    iconSize: [25,25]
  }),
  biblioteca: L.icon({
    iconUrl: bibliotecaSVG,
    iconSize: [25,25]
  }),
  ginasio: L.icon({
    iconUrl: esportesSVG,
    iconSize: [25,25]
  }),
  quadraVolei: L.icon({
    iconUrl: esportesSVG,
    iconSize: [25,25]
  }),
  flor: L.icon({
    iconUrl: florSVG,
    iconSize: [25,25]
  })
}

export function MarkerLocal({ position, type, description, imageUrl }: Local) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <Marker
      position={position}
      icon={icones[type]}
      eventHandlers={{ click: () => setModalOpen(true) }}
    >
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <p>{description}</p>
        {imageUrl.map((url, index) => (
          <img
            src={`${import.meta.env.BASE_URL}/${url}`}
            alt={description}
            key={index}
            width={500}
            height={500}
          />
        ))}
      </Modal>
    </Marker>
  )
}
