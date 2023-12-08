import { FC, memo, ReactElement, useEffect, useState } from 'react';
import { FIGHTERS, FIGHTERS_COLUMNS_NUMBER, FIGHTERS_ROWS_NUMBER, VERSUS_URL } from '../../contants';
import { IActiveFighterCell, ISelectedFighters } from '../../interfaces';
import { useNavigate } from 'react-router-dom';
import { NavigateFunction } from 'react-router/dist/lib/hooks';
import FightersTable from './components/Table';
import { useAppContext } from '../../context';

const renderFightLabel = (): ReactElement => <div className="fight--start"><span>Prepare!</span></div>;

const FighterSelection: FC = (): ReactElement => {
	const navigate: NavigateFunction = useNavigate();
	const { selectedFighters, setSelectedFighters, isSelectedFighters } = useAppContext();
	const [activeFighterCell, setActiveFighterCell] = useState<IActiveFighterCell>({ row: 0, col: 0 });

	useEffect(() => {
		if (isSelectedFighters) {
			const redirectTimeout: NodeJS.Timeout = setTimeout((): void => {
				navigate(VERSUS_URL);
			}, 2000);
			return (): void => clearTimeout(redirectTimeout);
		}
	}, [isSelectedFighters, navigate]);

	const handleKeyPress = async (e: KeyboardEvent): Promise<void> => {
		switch (e.key) {
			case 'ArrowUp': {
				setActiveFighterCell((prevValue: IActiveFighterCell): IActiveFighterCell => ({
					row: (prevValue.row - 1 + FIGHTERS_ROWS_NUMBER) % FIGHTERS_ROWS_NUMBER,
					col: prevValue.col,
				}));
				break;
			}
			case 'ArrowDown': {
				setActiveFighterCell((prevValue: IActiveFighterCell): IActiveFighterCell => ({
					row: (prevValue.row + 1) % FIGHTERS_ROWS_NUMBER,
					col: prevValue.col,
				}));
				break;
			}
			case 'ArrowLeft': {
				setActiveFighterCell((prevValue: IActiveFighterCell): IActiveFighterCell => ({
					row: prevValue.row,
					col: (prevValue.col - 1 + FIGHTERS_COLUMNS_NUMBER) % FIGHTERS_COLUMNS_NUMBER,
				}));
				break;
			}
			case 'ArrowRight': {
				setActiveFighterCell((prevValue: IActiveFighterCell): IActiveFighterCell => ({
					row: prevValue.row,
					col: (prevValue.col + 1) % FIGHTERS_COLUMNS_NUMBER,
				}));
				break;
			}
			case 'Enter': {
				if (!isSelectedFighters) {
					await new Promise(resolve => setTimeout(resolve, 0));
					const fighterIndex: number = activeFighterCell.row * FIGHTERS_COLUMNS_NUMBER + activeFighterCell.col;
					const fighterId: string = FIGHTERS[fighterIndex].id;
					setSelectedFighters((prevState: ISelectedFighters): ISelectedFighters => {
						const { first, second } = prevState;
						const isCurrentFighterFirst: boolean = !first;
						const isAlreadySelected: boolean = first === fighterId || second === fighterId;

						return isAlreadySelected ? prevState : {
							first: isCurrentFighterFirst ? fighterId : first,
							second: isCurrentFighterFirst ? second : fighterId,
						};
					});
				}
				break;
			}
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);
		return (): void => {
			window.removeEventListener('keydown', handleKeyPress);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeFighterCell]);

	return (
		<div className="fighter--selection">
			{isSelectedFighters && renderFightLabel()}
			<h1 className="title">select your fighter</h1>
			<FightersTable selectedFighters={selectedFighters} activeFighterCell={activeFighterCell} />
			<div className="zone--label">kombat zone: soul chamber</div>
		</div>
	);
}

export default memo(FighterSelection);