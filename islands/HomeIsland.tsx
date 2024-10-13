import { useState } from 'preact/hooks';
import { Button } from '../components/ui/Button.tsx';

export default function HomeIsland() {
	const [showMore, setShowMore] = useState(false);
	const [showArrow, setShowArrow] = useState(true);

	const handleTransition = () => {
		setShowMore(!showMore);
		setShowArrow(!showArrow);
	};

	return (
		<div class='text-center relative z-30 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
			<div class='relative inline-block mb-8'>
				<Button
					onClick={handleTransition}
					class='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 ease-in-out hover:shadow-lg animate-pulse'
				>
					{showMore ? 'Show Less' : 'Learn More'}
				</Button>
				{showArrow && (
					<div class='absolute left-[40%] transform -translate-x-1/2 mt-8 w-8 h-8 transition-all duration-300 ease-in-out animate-bounce'>
						<svg
							class='w-full h-full text-purple-500'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
						</svg>
					</div>
				)}
			</div>
			<div
				class={`overflow-hidden transition-all duration-500 ease-in-out ${
					showMore ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
				}`}
			>
				<div class='bg-gray-800 p-6 sm:p-8 rounded-lg shadow-2xl text-left mx-auto border border-purple-500 transform transition-all duration-500 ease-in-out hover:scale-105'>
					<p class='text-lg sm:text-xl text-gray-300 font-medium mb-6 leading-relaxed'>
						Ancient Souls is more than just a game recommendation platform. It's
						a community of passionate gamers who share their experiences,
						insights, and discoveries. Join us to connect with like-minded
						individuals and embark on new gaming adventures!
					</p>
					<div class='flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8'>
						<FeatureTag icon='🎮' text='Game Reviews' />
						<FeatureTag icon='🏆' text='Leaderboards' />
						<FeatureTag icon='💬' text='Community Forums' />
						<FeatureTag icon='🎁' text='Exclusive Rewards' />
					</div>
				</div>
			</div>
		</div>
	);
}

function FeatureTag({ icon, text }: { icon: string; text: string }) {
	return (
		<div class='bg-gray-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base flex items-center space-x-1 sm:space-x-2 transition-all duration-300 hover:bg-purple-600 hover:scale-105 cursor-pointer'>
			<span class='text-base sm:text-xl'>{icon}</span>
			<span>{text}</span>
		</div>
	);
}
