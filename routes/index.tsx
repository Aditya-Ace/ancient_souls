import { JSX } from 'preact/jsx-runtime';
import { Head } from '$fresh/runtime.ts';
import { HomeIsland } from '../islands/HomeIsland.tsx';

export default function Home() {
	return (
		<>
			<Head>
				<title>Ancient Souls - Discover Your Next Favorite Game</title>
				<meta
					name='description'
					content='Join Ancient Souls and share your game recommendations with a community of passionate gamers.'
				/>
			</Head>
			<div class='text-white'>
				<section class='relative'>
					<div class='absolute inset-0 bg-black opacity-60 z-10'></div>
					<div class='container mx-auto px-6 py-32 relative z-20'>
						<div class='flex flex-col md:flex-row items-center gap-4'>
							<div class='md:w-1/2 mb-8 md:mb-0'>
								<h1 class='text-4xl md:text-6xl font-bold mb-4'>
									Discover Your Next Favorite Game
								</h1>
								<p class='text-xl mb-8'>
									Join Ancient Souls and share your game recommendations with a
									community of passionate gamers.
								</p>
								<HomeIsland />
							</div>
							<div class='md:w-1/2'>
								<img
									src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
									alt='Gaming Setup'
									class='w-full h-auto rounded-lg shadow-lg'
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
			<section class='bg-white py-16'>
				<div class='container mx-auto px-6'>
					<h2 class='text-3xl font-bold text-center text-gray-800 mb-8'>
						Platforms We Cover
					</h2>
					<div class='flex flex-wrap justify-center gap-8'>
						<PlatformCard icon={<SteamIcon />} name='PC' />
						<PlatformCard icon={<PlayStationIcon />} name='PlayStation' />
						<PlatformCard icon={<XboxIcon />} name='Xbox' />
						<PlatformCard
							icon={<NintendoSwitchIcon />}
							name='Nintendo Switch'
						/>
						<PlatformCard icon={<MobileIcon />} name='Mobile' />
						<PlatformCard icon={<AppleIcon />} name='Mac' />
					</div>
				</div>
			</section>
			<section class='container mx-auto px-6 py-16'>
				<h2 class='text-3xl font-bold text-center text-white mb-8'>
					How It Works
				</h2>
				<div class='grid md:grid-cols-3 gap-8'>
					<FeatureCard
						title='Share Recommendations'
						description='Recommend your favorite games and tell others why you love them.'
					/>
					<FeatureCard
						title='Discover New Games'
						description='Explore recommendations from other gamers and find your next adventure.'
					/>
					<FeatureCard
						title='Rate and Comment'
						description='Share your thoughts on recommended games and help others decide what to play next.'
					/>
				</div>
			</section>
		</>
	);
}

function PlatformCard({ icon, name }: { icon: JSX.Element; name: string }) {
	return (
		<div class='flex flex-col items-center'>
			<div class='bg-gray-100 rounded-full p-4 mb-2'>{icon}</div>
			<span class='text-gray-800 font-medium'>{name}</span>
		</div>
	);
}

function FeatureCard({
	title,
	description
}: {
	title: string;
	description: string;
}) {
	return (
		<div class='bg-white rounded-lg shadow-md p-6'>
			<h3 class='text-xl font-bold text-gray-800 mb-2'>{title}</h3>
			<p class='text-gray-600'>{description}</p>
		</div>
	);
}

function SteamIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			class='w-12 h-12'
			viewBox='0 0 24 24'
			stroke-width='1.5'
			stroke='currentColor'
			fill='none'
			stroke-linecap='round'
			stroke-linejoin='round'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M16.5 5a4.5 4.5 0 1 1 -.653 8.953l-4.347 3.009l0 .038a3 3 0 0 1 -2.824 2.995l-.176 .005a3 3 0 0 1 -2.94 -2.402l-2.56 -1.098v-3.5l3.51 1.755a2.989 2.989 0 0 1 2.834 -.635l2.727 -3.818a4.5 4.5 0 0 1 4.429 -5.302z' />
			<circle cx='16.5' cy='9.5' r='1' fill='currentColor' />
		</svg>
	);
}

function PlayStationIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			class='w-12 h-12'
			viewBox='0 0 24 24'
			stroke-width='1.5'
			stroke='currentColor'
			fill='none'
			stroke-linecap='round'
			stroke-linejoin='round'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z' />
			<path d='M8 8m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z' />
		</svg>
	);
}

function XboxIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			class='w-12 h-12'
			viewBox='0 0 24 24'
			stroke-width='1.5'
			stroke='currentColor'
			fill='none'
			stroke-linecap='round'
			stroke-linejoin='round'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
			<path d='M6.5 5.5l11 13' />
			<path d='M17.5 5.5l-11 13' />
		</svg>
	);
}

function NintendoSwitchIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			class='w-12 h-12'
			viewBox='0 0 24 24'
			stroke-width='1.5'
			stroke='currentColor'
			fill='none'
			stroke-linecap='round'
			stroke-linejoin='round'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M4.5 5.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0' />
			<path d='M4.5 10h3c1.933 0 3.5 1.567 3.5 3.5v6c0 1.933 -1.567 3.5 -3.5 3.5h-3c-1.933 0 -3.5 -1.567 -3.5 -3.5v-6c0 -1.933 1.567 -3.5 3.5 -3.5z' />
			<path d='M19.5 5.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0' />
			<path d='M16.5 10h3c1.933 0 3.5 1.567 3.5 3.5v6c0 1.933 -1.567 3.5 -3.5 3.5h-3c-1.933 0 -3.5 -1.567 -3.5 -3.5v-6c0 -1.933 1.567 -3.5 3.5 -3.5z' />
		</svg>
	);
}

function MobileIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			class='w-12 h-12'
			viewBox='0 0 24 24'
			stroke-width='1.5'
			stroke='currentColor'
			fill='none'
			stroke-linecap='round'
			stroke-linejoin='round'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<rect x='7' y='4' width='10' height='16' rx='1' />
			<line x1='11' y1='5' x2='13' y2='5' />
			<line x1='12' y1='17' x2='12' y2='17.01' />
		</svg>
	);
}

function AppleIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			class='w-12 h-12'
			viewBox='0 0 24 24'
			stroke-width='1.5'
			stroke='currentColor'
			fill='none'
			stroke-linecap='round'
			stroke-linejoin='round'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z' />
			<path d='M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2' />
		</svg>
	);
}
