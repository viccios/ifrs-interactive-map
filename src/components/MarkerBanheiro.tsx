import * as L from 'leaflet'
import { useState } from 'react'
import { Marker } from 'react-leaflet'
import banheiroPng from './banheiro.png'
import { Modal } from './Model'
import type { Banheiro } from '../../assets/banheirosDados'

const iconeBanheiro = L.icon({
  iconUrl: banheiroPng,
  iconSize: [25, 25],
})

export function MarkerBanheiro({
  position,
  name,
  description,
  imageUrl,
}: Banheiro) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <Marker
      position={position}
      icon={iconeBanheiro}
      eventHandlers={{ click: () => setModalOpen(true) }}
    >
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h1>{name}</h1>
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
