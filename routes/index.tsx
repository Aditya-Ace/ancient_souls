import { JSX } from 'preact/jsx-runtime';
import { Head } from '$fresh/runtime.ts';
import HomeIsland from '../islands/HomeIsland.tsx';

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
			<div class='text-white bg-gradient-to-b from-gray-900 to-black min-h-screen'>
				<section class='relative h-screen overflow-hidden'>
					<div class='absolute inset-0 bg-black opacity-70 z-10'></div>
					<div
						class='absolute inset-0 bg-cover bg-center z-0 transform scale-105 animate-slow-zoom'
						style="background-image: url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80');"
					></div>
					<div class='absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-gray-900 z-20'></div>
					<div class='container mx-auto px-6 h-full flex items-center relative z-30'>
						<div class='max-w-3xl mx-auto text-center'>
							<h1 class='text-5xl md:text-7xl font-bold mb-6 animate-fade-in-down'>
								Discover Your Next
								<span class='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'>
									Favorite Game
								</span>
							</h1>
							<p class='text-xl md:text-2xl mb-10 animate-fade-in-up'>
								Join Ancient Souls and share your game recommendations with a
								community of passionate gamers.
							</p>
							<div class='animate-fade-in'>
								<HomeIsland />
							</div>
						</div>
					</div>
					<div class='absolute bottom-0 left-0 right-0 z-30'>
						<svg
							class='w-full h-24 fill-current text-gray-900'
							viewBox='0 0 100 100'
							preserveAspectRatio='none'
						>
							<path d='M0 100 C 20 0 50 0 100 100 Z'></path>
						</svg>
					</div>
				</section>

				<section class='py-20 bg-gray-900'>
					<div class='container mx-auto px-6'>
						<h2 class='text-4xl font-bold text-center text-white mb-16 animate-fade-in-up'>
							Platforms We Cover
						</h2>
						<div class='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 justify-items-center'>
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

				<section class='py-20 bg-gray-800'>
					<div class='container mx-auto px-6'>
						<h2 class='text-4xl font-bold text-center text-white mb-16 animate-fade-in-up'>
							How It Works
						</h2>
						<div class='grid md:grid-cols-3 gap-12'>
							<FeatureCard
								title='Share Recommendations'
								description='Recommend your favorite games and tell others why you love them.'
								icon={<ShareIcon />}
							/>
							<FeatureCard
								title='Discover New Games'
								description='Explore recommendations from other gamers and find your next adventure.'
								icon={<DiscoverIcon />}
							/>
							<FeatureCard
								title='Rate and Comment'
								description='Share your thoughts on recommended games and help others decide what to play next.'
								icon={<RateIcon />}
							/>
						</div>
					</div>
				</section>

				<section class='py-20 bg-gray-900'>
					<div class='container mx-auto px-6'>
						<div class='flex flex-col lg:flex-row items-center justify-between gap-16'>
							<div class='lg:w-1/2'>
								<h2 class='text-4xl font-bold text-white mb-8 animate-fade-in-up'>
									Experience Next-Gen Gaming
								</h2>
								<p class='text-xl text-gray-300 mb-10'>
									Immerse yourself in the world of cutting-edge gaming
									technology. From high-performance PCs to the latest consoles,
									Ancient Souls covers it all. Stay updated with the newest
									releases and experience games like never before.
								</p>
								<ul class='list-disc list-inside text-gray-300 space-y-4 mb-10'>
									<li class='flex items-center'>
										<span class='text-blue-400 mr-2'>&#9733;</span>
										4K Ultra HD graphics
									</li>
									<li class='flex items-center'>
										<span class='text-blue-400 mr-2'>&#9733;</span>
										Ray tracing technology
									</li>
									<li class='flex items-center'>
										<span class='text-blue-400 mr-2'>&#9733;</span>
										High refresh rate displays
									</li>
									<li class='flex items-center'>
										<span class='text-blue-400 mr-2'>&#9733;</span>
										Advanced haptic feedback
									</li>
								</ul>
								<button class='bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
									Explore Latest Tech
								</button>
							</div>
							<div class='lg:w-1/2'>
								<div class='relative'>
									<img
										src='https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										alt='Gaming Setup with Controllers'
										class='w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300'
									/>
									<div class='absolute inset-0 bg-gradient-to-tr from-blue-600/50 to-purple-600/50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg'></div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class='py-20 bg-gray-800 relative overflow-hidden'>
					<div class='container mx-auto px-6 relative z-10'>
						<h2 class='text-4xl font-bold text-center text-white mb-16 animate-fade-in-up'>
							Join Our Community
						</h2>
						<div class='grid md:grid-cols-2 gap-16 items-center'>
							<div class='space-y-8'>
								<p class='text-xl text-gray-300'>
									Connect with fellow gamers, share your experiences, and
									discover new worlds together. Ancient Souls is more than just
									a platform - it's a thriving community of passionate gamers.
								</p>
								<ul class='space-y-6'>
									{[
										'Create your gaming profile',
										'Build and share your game library',
										'Participate in discussions and forums',
										'Earn badges and level up your profile'
									].map((item, index) => (
										<li key={index} class='flex items-center space-x-4'>
											<svg
												class='flex-shrink-0 w-6 h-6 text-green-500'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													stroke-linecap='round'
													stroke-linejoin='round'
													stroke-width='2'
													d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
												></path>
											</svg>
											<span class='text-gray-300 text-lg'>{item}</span>
										</li>
									))}
								</ul>
								<button class='mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
									Join the Community
								</button>
							</div>
							<div class='relative'>
								<img
									src='https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									alt='Gaming Community'
									class='w-full h-auto rounded-lg shadow-2xl'
								/>
								<div class='absolute inset-0 bg-gradient-to-tr from-green-600/50 to-blue-600/50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg'></div>
							</div>
						</div>
					</div>
					<div class='absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50'></div>
				</section>
			</div>
		</>
	);
}

function PlatformCard({ icon, name }: { icon: JSX.Element; name: string }) {
	return (
		<div class='flex flex-col items-center group'>
			<div class='bg-gray-800 rounded-full p-8 mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:shadow-lg'>
				{icon}
			</div>
			<span class='text-lg font-medium group-hover:text-blue-400 transition-colors duration-300'>
				{name}
			</span>
		</div>
	);
}

function FeatureCard({
	title,
	description,
	icon
}: {
	title: string;
	description: string;
	icon: JSX.Element;
}) {
	return (
		<div class='bg-gray-700 rounded-lg shadow-md p-8 transform transition-all duration-300 hover:scale-105 hover:bg-gray-600 hover:shadow-xl'>
			<div class='text-blue-400 mb-6'>{icon}</div>
			<h3 class='text-2xl font-bold text-white mb-4'>{title}</h3>
			<p class='text-gray-300 text-lg'>{description}</p>
		</div>
	);
}

function ShareIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			class='w-12 h-12'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
		>
			<path
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='2'
				d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
			/>
		</svg>
	);
}

function DiscoverIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			class='w-12 h-12'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
		>
			<path
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='2'
				d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
			/>
		</svg>
	);
}

function RateIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			class='w-12 h-12'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
		>
			<path
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='2'
				d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
			/>
		</svg>
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
