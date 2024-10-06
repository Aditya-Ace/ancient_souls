import { JSX } from 'preact';
import { IS_BROWSER } from '$fresh/runtime.ts';

export function LinkButton(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
	return (
		<a
			{...props}
			class={`px-4 py-2 rounded font-bold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
				props.class ?? ''
			}`}
			disabled={!IS_BROWSER || props.disabled}
			href={props.href}
			target={props.target}
		>
			{props.children}
		</a>
	);
}
