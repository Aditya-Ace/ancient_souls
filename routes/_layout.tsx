import { PageProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import { Nav } from '../components/Nav.tsx';
import { Footer } from '../components/Footer.tsx';

export default function Layout({ Component }: PageProps) {
	return (
		<>
			<Head>
				<title>Ancient Souls - Game Recommendations</title>
				<meta
					name='description'
					content='Share and discover game recommendations for PC, PlayStation, Xbox, Nintendo Switch, Android, iOS, and Mac'
				/>
			</Head>
			<div class='flex flex-col min-h-screen bg-gray-100'>
				<Nav />
				<main class='flex-grow'>
					<Component />
				</main>
				<Footer />
			</div>
		</>
	);
}
