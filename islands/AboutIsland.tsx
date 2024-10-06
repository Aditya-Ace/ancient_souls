import { useState } from 'preact/hooks';
import { Button } from '../components/ui/Button.tsx';
import { Card } from '../components/ui/Card.tsx';
import { Modal } from '../components/ui/Modal.tsx';
import JoinForm from './JoinForm.tsx';

export default function AboutIsland() {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleJoinClick = () => {
		setIsDialogOpen(true);
	};

	return (
		<Card class='mt-7'>
			<p class='text-gray-600 mb-6 text-lg'>
				Ancient Souls is a passionate community of gamers dedicated to sharing
				and discovering the best gaming experiences across all platforms.
			</p>
			<h2 class='text-2xl font-semibold text-gray-800 mb-4'>Our Mission</h2>
			<p class='text-gray-600 mb-6 text-lg'>
				Our mission is to create a vibrant ecosystem where gamers can connect,
				share their favorite games, and discover new adventures. We believe that
				every game has a story to tell, and every gamer has a unique perspective
				to share.
			</p>
			<h2 class='text-2xl font-semibold text-gray-800 mb-4'>What We Offer</h2>
			<ul class='list-disc list-inside text-gray-600 mb-6 text-lg'>
				<li>A platform to share and discover game recommendations</li>
				<li>Community-driven reviews and ratings</li>
				<li>Curated lists of top games across various genres and platforms</li>
				<li>A space for gamers to connect and discuss their favorite titles</li>
			</ul>
			<h2 class='text-2xl font-semibold text-gray-800 mb-4'>Our Team</h2>
			<p class='text-gray-600 mb-6 text-lg'>
				Ancient Souls was founded by a group of lifelong gamers who wanted to
				create the ultimate platform for game discovery. Our team is composed of
				passionate individuals from diverse backgrounds, all united by our love
				for gaming.
			</p>
			<h2 class='text-2xl font-semibold text-gray-800 mb-4'>
				Join Our Community
			</h2>
			<p class='text-gray-600 mb-6 text-lg'>
				Whether you're a casual gamer or a hardcore enthusiast, there's a place
				for you at Ancient Souls. Join our community today and start sharing
				your gaming journey with fellow souls!
			</p>
			<Button
				onClick={handleJoinClick}
				class='bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out'
			>
				Join Ancient Souls
			</Button>
			<Modal isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
				<JoinForm />
			</Modal>
		</Card>
	);
}
