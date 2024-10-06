import { JSX } from 'preact';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: JSX.Element | JSX.Element[];
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
	if (!isOpen) return null;

	return (
		<div class='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
			<div class='bg-white rounded-lg p-6 w-full max-w-md relative'>
				<button
					onClick={onClose}
					class='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
					aria-label='Close modal'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				</button>
				{children}
			</div>
		</div>
	);
}
