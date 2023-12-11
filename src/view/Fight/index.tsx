import { FC, memo, ReactElement, useEffect } from 'react';
import { NavigateFunction } from 'react-router/dist/lib/hooks';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context';

const Fight: FC = (): ReactElement => {
	const navigate: NavigateFunction = useNavigate();
	const { isSelectedFighters } = useAppContext();

	useEffect((): void => {
		!isSelectedFighters && navigate('/');
	}, [navigate, isSelectedFighters]);

	return (
		<div className="fight">
			<h1 className="title">Fight!</h1>
		</div>
	)
};

export default memo(Fight);