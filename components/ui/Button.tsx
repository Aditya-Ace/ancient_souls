import { JSX } from 'preact';
import { IS_BROWSER } from '$fresh/runtime.ts';

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			{...props}
			disabled={!IS_BROWSER || props.disabled}
			class={`px-4 py-2 rounded font-bold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
				props.class ?? ''
			}`}
		/>
	);
}
