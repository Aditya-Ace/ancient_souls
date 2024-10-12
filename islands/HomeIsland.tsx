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
		<div className='text-center relative z-10'>
			<div className='transform transition-all duration-300 ease-in-out hover:scale-105'>
				<Button
					onClick={handleTransition}
					className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 ease-in-out hover:shadow-lg'
				>
					{showMore ? 'Show Less' : 'Learn More'}
				</Button>
			</div>

			<div
				className={`mt-6 overflow-hidden transition-all duration-300 ease-in-out ${
					showMore ? 'max-h-96' : 'max-h-0'
				}`}
			>
				<div className='bg-gray-800 p-6 rounded-lg shadow-lg text-left max-w-xl mx-auto border border-purple-500'>
					<p className='text-lg text-gray-300 font-medium mb-4'>
						Ancient Souls is more than just a game recommendation platform. It's
						a community of passionate gamers who share their experiences,
						insights, and discoveries. Join us to connect with like-minded
						individuals and embark on new gaming adventures!
					</p>
					<div className='flex flex-wrap justify-center gap-4 mt-6'>
						<FeatureTag icon='🎮' text='Game Reviews' />
						<FeatureTag icon='🏆' text='Leaderboards' />
						<FeatureTag icon='💬' text='Community Forums' />
						<FeatureTag icon='🎁' text='Exclusive Rewards' />
					</div>
				</div>
			</div>

			{showArrow && (
				<div className='absolute left-1/2 transform -translate-x-1/2 mt-8 w-8 h-8'>
					<svg
						className='w-full h-full text-purple-500 animate-bounce'
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
	);
}

function FeatureTag({ icon, text }: { icon: string; text: string }) {
	return (
		<div className='bg-gray-700 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1 transition-all duration-300 hover:bg-purple-600'>
			<span>{icon}</span>
			<span>{text}</span>
		</div>
	);
}
