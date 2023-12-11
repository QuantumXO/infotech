import { FC, memo, ReactElement, useCallback, useEffect, useState } from 'react';
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

	const handleEnterKey = useCallback((): void => {
		if (!isSelectedFighters) {
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
	}, [isSelectedFighters, activeFighterCell, setSelectedFighters]);

	const handleArrowKey = useCallback((arrowKey: 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight'): void => {
		setActiveFighterCell((prevState: IActiveFighterCell): IActiveFighterCell => {
			let newRow: number | undefined;
			let newCol: number | undefined;
			switch (arrowKey) {
				case 'ArrowUp': {
					newRow = (prevState.row - 1 + FIGHTERS_ROWS_NUMBER) % FIGHTERS_ROWS_NUMBER;
					newCol = prevState.col;
					break;
				}
				case 'ArrowDown': {
					newRow = (prevState.row + 1) % FIGHTERS_ROWS_NUMBER;
					newCol = prevState.col;
					break;
				}
				case 'ArrowLeft': {
					newRow = prevState.row;
					newCol = (prevState.col - 1 + FIGHTERS_COLUMNS_NUMBER) % FIGHTERS_COLUMNS_NUMBER;
					break;
				}
				case 'ArrowRight': {
					newRow = prevState.row;
					newCol = (prevState.col + 1) % FIGHTERS_COLUMNS_NUMBER;
					break;
				}
			}
			if (typeof newRow === 'number' && typeof newCol === 'number') {
				return {
					row: newRow,
					col: newCol,
				}
			} else {
				throw new Error('Arrow button error');
			}
		})
	}, []);

	const handleKeyPress = (e: KeyboardEvent): void => {
		const { key } = e;
		switch (key) {
			case 'ArrowUp':
			case 'ArrowDown':
			case 'ArrowLeft':
			case 'ArrowRight': {
				handleArrowKey(key);
				break;
			}
			case 'Enter': {
				handleEnterKey();
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
			<FightersTable selectedFighters={selectedFighters} activeFighterCell={activeFighterCell}/>
			<div className="zone--label">kombat zone: soul chamber</div>
		</div>
	);
}

export default memo(FighterSelection);