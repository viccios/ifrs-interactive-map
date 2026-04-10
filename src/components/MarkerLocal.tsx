import * as L from 'leaflet'
import { useState } from 'react'
import { Marker } from 'react-leaflet'
import banheiroPng from './banheiro.png'
import { Modal } from './Model'
import type { Local } from '../../assets/locaisDados'

const icones:Record<string,L.Icon> = {
  banheiro: L.icon({
    iconUrl: banheiroPng,
    iconSize: [25, 25],
  }),
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
