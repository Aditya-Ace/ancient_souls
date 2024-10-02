import { JSX } from 'preact';
import { IS_BROWSER } from '$fresh/runtime.ts';

export function Nav() {
	return (
		<header class='bg-white shadow'>
			<nav class='container mx-auto px-6 py-3'>
				<div class='flex items-center justify-between'>
					<div class='w-48 flex-shrink-0'>
						<div class='text-xl font-bold text-gray-800'>Ancient Souls</div>
					</div>
					<div class='hidden md:flex space-x-4 flex-grow justify-center'>
						<NavLink href='/'>Home</NavLink>
						<NavLink href='/recommendations'>Recommendations</NavLink>
						<NavLink href='/my-games'>My Games</NavLink>
						<NavLink href='/about'>About</NavLink>
						<NavLink href='/contact'>Contact</NavLink>
					</div>
					<div class='w-48 flex-shrink-0 flex justify-end'>
						<button
							class='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out'
							onClick={() => alert('Join functionality to be implemented')}
						>
							Join Now
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
}

function NavLink(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
	const { href, class: className, ...rest } = props;
	const isActive = IS_BROWSER && window.location.pathname === href;

	return (
		<a
			href={href}
			class={`${
				isActive ? 'text-blue-600' : 'text-gray-800'
			} hover:text-gray-600 transition duration-300 ease-in-out ${
				className ?? ''
			}`}
			{...rest}
		/>
	);
}
