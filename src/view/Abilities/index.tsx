import { FC, memo, ReactElement, useCallback, useEffect } from 'react';
import { useAppContext } from '../../context';
import { NavigateFunction } from 'react-router/dist/lib/hooks';
import { useNavigate } from 'react-router-dom';
import { FIGHT_URL, FIGHTER_ABILITIES, FIGHTERS } from '../../contants';
import { IFighter, IFighterAbility } from '../../interfaces';
import cx from 'classnames';

const Abilities: FC = (): ReactElement => {
	const navigate: NavigateFunction = useNavigate();
	const { isSelectedFighters, selectedFighters, activeFighterAbilities, setActiveFighterAbilities } = useAppContext();

	const { first: firstFighterId, second: secondFighterId } = selectedFighters;
	const firstFighter: IFighter | undefined = FIGHTERS.find(({ id }: IFighter) => id === firstFighterId);
	const secondFighter: IFighter | undefined = FIGHTERS.find(({ id }: IFighter) => id === secondFighterId);

	useEffect(() => {
		const redirectTimeout: NodeJS.Timeout = setTimeout((): void => {
			navigate(FIGHT_URL);
		}, 4000);
		return (): void => clearTimeout(redirectTimeout);
	}, [navigate]);

	useEffect((): void => {
		!isSelectedFighters && navigate('/');
	}, [isSelectedFighters, navigate]);

	useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);
		return (): void => {
			window.removeEventListener('keydown', handleKeyPress);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleKeyPress = useCallback((e: KeyboardEvent): void => {
		const { key } = e;
		const keyInLowerCase: string = key.toLowerCase();
		switch (keyInLowerCase) {
			case 'q':
			case 'w':
			case 'e':
			case 'r':
			case 't':
			case 'y': {
				const ability: IFighterAbility | undefined = FIGHTER_ABILITIES.find(({ button }: IFighterAbility) => button === keyInLowerCase);
				if (ability) {
					setActiveFighterAbilities(ability.type);
				} else {
					throw new Error('Ability selection error');
				}
			}
		}
	}, [setActiveFighterAbilities]);

	const renderFighterAbilities = (): ReactElement => {
		return (
			<div className="fighter--abilities">
				{FIGHTER_ABILITIES.map(({ type, button }: IFighterAbility): ReactElement => {
					const isActive: boolean = activeFighterAbilities.includes(type);
					return (
						<div key={type} className={cx('fighter--abilities__item', { active: isActive })}>{button}</div>
					);
				})}
			</div>
		);
	}

	return (
		<div className="versus">
			<h1 className="title">Battle 1</h1>
			<div className="versus--fighters">
				<span className="fighter">{firstFighter?.name}</span>
				<span className="vs">vs</span>
				<span className="fighter">{secondFighter?.name}</span>
			</div>
			{renderFighterAbilities()}
		</div>
	);
}

export default memo(Abilities);