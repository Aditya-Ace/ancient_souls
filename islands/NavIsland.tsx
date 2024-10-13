import { JSX } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { IS_BROWSER } from '$fresh/runtime.ts';
import { Button } from '../components/ui/Button.tsx';
import { LinkButton } from '../components/ui/LinkButton.tsx';

export function NavIsland() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		if (IS_BROWSER) {
			const handleScroll = () => {
				setIsScrolled(globalThis.scrollY > 10);
			};
			globalThis.addEventListener('scroll', handleScroll);
			return () => globalThis.removeEventListener('scroll', handleScroll);
		}
	}, []);

	return (
		<header
			class={`fixed w-full z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-gray-900/90 shadow-lg backdrop-filter backdrop-blur-lg'
					: 'bg-transparent'
			}`}
		>
			<nav
				class={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
					isScrolled ? 'py-2' : 'py-4'
				}`}
			>
				<div class='flex items-center justify-between'>
					<div class='flex items-center'>
						<a
							href='/'
							class='text-2xl font-bold transition-all duration-300 hover:scale-105 text-white'
						>
							<span class='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'>
								Ancient Souls
							</span>
						</a>
					</div>
					<div class='hidden md:flex items-center space-x-6'>
						<NavLink href='/'>Home</NavLink>
						<NavLink href='/recommendations'>Recommendations</NavLink>
						<NavLink href='/my-games'>My Games</NavLink>
						<NavLink href='/about'>About</NavLink>
						<NavLink href='/contact'>Contact</NavLink>
						<LinkButton
							href='/join'
							class='ml-4 transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
						>
							Join Now
						</LinkButton>
					</div>
					<div class='md:hidden'>
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							class='text-3xl focus:outline-none transition-colors duration-300 hover:scale-110 text-white'
							aria-label='Toggle mobile menu'
						>
							{isMobileMenuOpen ? '×' : '☰'}
						</button>
					</div>
				</div>
			</nav>
			{/* Mobile menu */}
			<div
				class={`md:hidden bg-gray-900 overflow-hidden transition-all duration-300 ease-in-out ${
					isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
				}`}
			>
				<div class='px-4 py-2 space-y-2'>
					<NavLink href='/' isMobile>
						Home
					</NavLink>
					<NavLink href='/recommendations' isMobile>
						Recommendations
					</NavLink>
					<NavLink href='/my-games' isMobile>
						My Games
					</NavLink>
					<NavLink href='/about' isMobile>
						About
					</NavLink>
					<NavLink href='/contact' isMobile>
						Contact
					</NavLink>
					<LinkButton
						href='/join'
						class='w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105'
					>
						Join Now
					</LinkButton>
				</div>
			</div>
		</header>
	);
}

function NavLink(
	props: JSX.HTMLAttributes<HTMLAnchorElement> & {
		isMobile?: boolean;
	}
) {
	const { href, class: className, isMobile, ...rest } = props;
	const isActive = IS_BROWSER && globalThis.location.pathname === href;

	return (
		<a
			href={href}
			class={`
        ${isActive ? 'font-bold' : 'font-medium'}
        ${isMobile ? 'block py-2' : 'inline-block'}
        transition-all duration-300 ease-in-out hover:scale-105
        text-gray-300 hover:text-white
        ${isMobile ? 'text-lg' : ''}
        ${isActive ? 'border-b-2 border-blue-500' : ''}
        ${className ?? ''}
      `}
			{...rest}
		/>
	);
}
