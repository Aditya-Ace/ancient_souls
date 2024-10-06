import { PageProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import { NavIsland } from '../islands/NavIsland.tsx';
import { FooterIsland } from '../islands/FooterIsland.tsx';

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
			<main class='flex flex-col min-h-screen bg-gray-900'>
				<NavIsland />
				<div class='flex-grow'>
					<Component />
				</div>
				<FooterIsland />
			</main>
		</>
	);
}
