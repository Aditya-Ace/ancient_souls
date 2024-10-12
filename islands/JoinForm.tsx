import { useState } from 'preact/hooks';
import { Button } from '../components/ui/Button.tsx';
import { Input } from '../components/ui/Input.tsx';
import { Select } from '../components/ui/Select.tsx';
import { Card } from '../components/ui/Card.tsx';

const gameGenres = [
	'Action',
	'Adventure',
	'RPG',
	'Strategy',
	'Simulation',
	'Sports',
	'Puzzle',
	'Shooter',
	'Fighting',
	'Horror'
];

interface JoinFormProps {
	additionalClasses?: string;
}

export default function JoinForm(props: JoinFormProps) {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [genre, setGenre] = useState('');

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		console.log('Form submitted:', { email, username, password, genre });
		alert(
			'Thank you for joining Ancient Souls! Check your email for next steps.'
		);
		setEmail('');
		setUsername('');
		setPassword('');
		setGenre('');
	};

	return (
		<Card class={`${props.additionalClasses} mt-14`}>
			<h2 class='text-2xl font-bold mb-6 text-center'>Join Ancient Souls</h2>
			<form onSubmit={handleSubmit} class='space-y-4'>
				<Input
					label='Email'
					id='email'
					type='email'
					value={email}
					onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
					required
				/>
				<Input
					label='Username'
					id='username'
					type='text'
					value={username}
					onChange={(e) => setUsername((e.target as HTMLInputElement).value)}
					required
				/>
				<Input
					label='Password'
					id='password'
					type='password'
					value={password}
					onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
					required
				/>
				<Select
					label='Favorite Game Genre'
					id='genre'
					value={genre}
					onChange={(e) => setGenre((e.target as HTMLSelectElement).value)}
					options={gameGenres}
					required
				/>
				<Button type='submit' class='w-full'>
					Join Now
				</Button>
			</form>
		</Card>
	);
}
