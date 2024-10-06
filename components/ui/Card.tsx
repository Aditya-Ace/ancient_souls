import { JSX } from 'preact';

interface CardProps {
	children: JSX.Element | JSX.Element[];
	class?: string;
}

export function Card({ children, class: className }: CardProps) {
	return (
		<div class={`bg-white rounded-lg shadow-md p-6 ${className ?? ''}`}>
			{children}
		</div>
	);
}
