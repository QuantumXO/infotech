import {
	ReactElement,
	createContext,
	useContext,
	useMemo,
	FC,
	useState,
	Context,
} from 'react';
import { AppContextDataType, FighterAbilityType, IAppContext, ISelectedFighters } from '../interfaces';

const AppContext: Context<AppContextDataType> = createContext<AppContextDataType>(null);

export const useAppContext = (): IAppContext => {
	const appContext: AppContextDataType = useContext(AppContext);
	if (!appContext) {
		throw new Error('AppContext() can only be used inside of <AppContext /> please declare it at a higher level.');
	}
	return useMemo(() => appContext as IAppContext, [appContext]);
};

export const AppProvider: FC<{ children: ReactElement }> = ({ children }) => {
	const [selectedFighters, setSelectedFighters] = useState<ISelectedFighters>({});
	const [activeFighterAbilities, setActiveFighterAbilities] = useState<FighterAbilityType[]>([]);

	const { first: firstSelectedFighter, second: secondSelectedFighter } = selectedFighters;
	const isSelectedFighters: boolean = !!firstSelectedFighter && !!secondSelectedFighter;

	const onSetActiveFighterAbilities = (ability: FighterAbilityType): void => setActiveFighterAbilities((prevState: FighterAbilityType[]) => {
		const isActive: boolean = prevState.includes(ability);
		return isActive ? prevState : [...prevState, ability];
	});

	const context: IAppContext = useMemo((): IAppContext => {
		return {
			selectedFighters,
			isSelectedFighters,
			activeFighterAbilities,
			setSelectedFighters,
			setActiveFighterAbilities: onSetActiveFighterAbilities,
		}
	}, [selectedFighters, isSelectedFighters, activeFighterAbilities]);
	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};