import React, { lazy, ReactElement, Suspense, NamedExoticComponent, LazyExoticComponent } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../assets/styles/styles.scss';
import { FIGHT_URL, VERSUS_URL } from '../contants';
import { AppProvider } from '../context';

const LazyFighterSelection: LazyExoticComponent<NamedExoticComponent> = lazy(() => import('./FighterSelection'));
const LazyAbilitiesSelection: LazyExoticComponent<NamedExoticComponent> = lazy(() => import('./Abilities'));
const LazyFightPage: LazyExoticComponent<NamedExoticComponent> = lazy(() => import('./Fight'));

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
		path: FIGHT_URL,
		element: <LazyFightPage/>,
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
