import { Dispatch, SetStateAction } from 'react';

export interface IActiveFighterCell {
	row: number;
	col: number;
}

export interface IFighter {
	id: string;
	name: string;
	avatar?: string;
}

export interface ISelectedFighters {
	first?: string;
	second?: string;
}

export interface IFightersTableProps {
	selectedFighters: ISelectedFighters;
	activeFighterCell: IActiveFighterCell;
}

export interface IAppContext {
	isSelectedFighters: boolean;
	selectedFighters: ISelectedFighters;
	activeFighterAbilities: FighterAbilityType[];
	setSelectedFighters: Dispatch<SetStateAction<ISelectedFighters>>;
	setActiveFighterAbilities: (ability: FighterAbilityType) => void;
}

export type AppContextDataType = IAppContext | null;

export enum FighterAbilities {
	FireballAttack = 'Fireball Attack',
	Teleportation = 'Teleportation',
	FreezeBreath = 'Freeze Breath',
	EnhancedStrength = 'Enhanced Strength',
	ShadowKick = 'Shadow Kick',
	XRayAttack = 'X-Ray Attack',
}

export type FighterAbilityType = keyof typeof FighterAbilities;

export interface IFighterAbility {
	type: FighterAbilityType;
	button: 'q' | 'w' | 'e' | 'r' | 't' | 'y';
	description?: string;
}

