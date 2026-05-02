import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'

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
			document.body.style.overflow = 'hidden'
		} else {
			dialog?.close()
			document.body.style.overflow = 'unset'
		}

		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
		if (e.target === dialogRef.current) {
			onClose()
		}
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
		if (e.key === 'Enter' || e.key === ' ') {
			if (e.target === dialogRef.current) {
				onClose()
			}
		}
	}

	return (
		<dialog
			ref={dialogRef}
			onCancel={onClose}
			onClick={handleBackdropClick}
			onKeyDown={handleKeyDown}
			aria-labelledby="modal-title"
			className="m-auto w-[90vw] max-w-125 max-h-[85vh] rounded-2xl bg-gray-800 text-gray-100 p-0 shadow-2xl backdrop:bg-gray-900/80 backdrop:backdrop-blur-sm border border-gray-700 overflow-hidden"
		>
			<div className="flex flex-col h-full max-h-[85vh]">
				<div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800/95 backdrop-blur-md sticky top-0 z-10">
					<h3
						id="modal-title"
						className="text-[17px] font-semibold text-gray-100 ml-2"
					>
						Detalhes do Local
					</h3>
					<button
						type="button"
						onClick={onClose}
						className="p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded-full transition-colors cursor-pointer outline-none focus:ring-2 focus:ring-emerald-500"
						aria-label="Fechar modal"
					>
						<X size={20} />
					</button>
				</div>
				<div className="overflow-y-auto p-6 flex flex-col gap-6">
					{children}
				</div>
			</div>
		</dialog>
	)
}
