import { useState } from 'preact/hooks';
import { Button } from '../components/ui/Button.tsx';

export function HomeIsland() {
	const [showMore, setShowMore] = useState(false);

	return (
		<div class='text-center mt-11'>
			<Button
				onClick={() => setShowMore(!showMore)}
				class='bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out'
			>
				{showMore ? 'Show Less' : 'Learn More'}
			</Button>
			{showMore && (
				<div class='mt-4 text-white text-lg p-4 bg-gray-800 rounded-lg animate-fade-in'>
					<p>
						Ancient Souls is more than just a game recommendation platform. It's
						a community of passionate gamers who share their experiences,
						insights, and discoveries. Join us to connect with like-minded
						individuals and embark on new gaming adventures!
					</p>
				</div>
			)}
		</div>
	);
}
