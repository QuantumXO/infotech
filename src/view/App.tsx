import React, { lazy, ReactElement, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../assets/styles/styles.scss';
import { VERSUS_URL } from '../contants';
import { AppProvider } from '../context';

const LazyFighterSelection = lazy(() => import('./FighterSelection'));
const LazyAbilitiesSelection = lazy(() => import('./Abilities'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <LazyFighterSelection/>,
	},
	{
		path: VERSUS_URL,
		element: <LazyAbilitiesSelection/>,
	},
	{
		path: '*',
		element: <LazyFighterSelection/>,
	},
]);

function App(): ReactElement {
	return (
		<div className="App">
			<AppProvider>
				<Suspense fallback={<>loading</>}>
					<RouterProvider router={router}/>
				</Suspense>
			</AppProvider>
		</div>
	);
}

export default App;
