import { memo, ReactElement } from 'react';
import { IFighter, IFightersTableProps } from '../../../../interfaces';
import { FIGHTERS, FIGHTERS_COLUMNS_NUMBER, FIGHTERS_ROWS_NUMBER } from '../../../../contants';
import cx from 'classnames';

const FightersTable = ({ selectedFighters, activeFighterCell }: IFightersTableProps): ReactElement => {
	return (
		<table className="fighters__table">
			<tbody>
			{Array.from({ length: FIGHTERS_ROWS_NUMBER }).map((_, rowIndex: number): ReactElement => (
				<tr key={rowIndex}>
					{Array.from({ length: FIGHTERS_COLUMNS_NUMBER }).map((_, colIndex: number): ReactElement => {
						const index: number = rowIndex * FIGHTERS_COLUMNS_NUMBER + colIndex;
						const { name, id: fighterId, avatar }: IFighter = FIGHTERS[index];
						const currentFighterSelectionIndex: number = Object.values(selectedFighters).indexOf(fighterId);
						const isSelected: boolean = currentFighterSelectionIndex !== -1;
						return (
							<td
								id={fighterId}
								key={fighterId}
								className={cx(
									'fighters__table__cell',
									{
										active: activeFighterCell.row === rowIndex && activeFighterCell.col === colIndex,
										selected: isSelected,
										'first--selected': currentFighterSelectionIndex === 0,
										'second--selected': currentFighterSelectionIndex === 1,
									},
								)}
							>
								<img src={avatar} alt={name} className="avatar"/>
							</td>
						);
					})}
				</tr>
			))}
			</tbody>
		</table>
	);
}

export default memo(FightersTable);