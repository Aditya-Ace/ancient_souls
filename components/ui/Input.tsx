import { JSX } from 'preact';

interface InputProps extends JSX.HTMLAttributes<HTMLInputElement> {
	label: string;
}

export function Input({ label, id, ...props }: InputProps) {
	return (
		<div>
			<label htmlFor={id} class='block text-sm font-medium text-gray-700 mb-1'>
				{label}
			</label>
			<input
				id={id}
				{...props}
				class={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
					props.class ?? ''
				}`}
			/>
		</div>
	);
}
