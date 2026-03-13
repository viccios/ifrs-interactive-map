import { useEffect, useRef } from 'react'
import styles from './Model.module.css'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current

    if (isOpen) {
      dialog?.showModal()
    } else {
      dialog?.close()
    }
  }, [isOpen])

  return (
    <dialog ref={dialogRef} onCancel={onClose} style={styles}>
      {children}
      <button type="button" onClick={onClose}>
        Fechar
      </button>
    </dialog>
  )
}
