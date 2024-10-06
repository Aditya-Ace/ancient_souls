import { JSX } from 'preact';

interface SelectProps extends JSX.HTMLAttributes<HTMLSelectElement> {
	label: string;
	options: string[];
}

export function Select({ label, id, options, ...props }: SelectProps) {
	return (
		<div>
			<label htmlFor={id} class='block text-sm font-medium text-gray-700 mb-1'>
				{label}
			</label>
			<select
				id={id}
				{...props}
				class={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
					props.class ?? ''
				}`}
			>
				<option value=''>Select an option</option>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
}
