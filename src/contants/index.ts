import { IFighter, IFighterAbility } from '../interfaces';
import scorpion from '../assets/images/fighters/scorpion.webp';
import subZero from '../assets/images/fighters/sub-zero.jpeg';
import liuKang from '../assets/images/fighters/Liu-Kang.webp';
import johnnyCage from '../assets/images/fighters/Johnny-Cage.jpeg';
import sonyaBlade from '../assets/images/fighters/Sonya-Blade.jpg';
import raiden from '../assets/images/fighters/Raiden.gif';
import kano from '../assets/images/fighters/Kano.jpeg';
import Jax from '../assets/images/fighters/Jax.jpeg';
import Kitana from '../assets/images/fighters/Kitana.jpeg';
import Mileena from '../assets/images/fighters/Mileena.webp';
import ShangTsung from '../assets/images/fighters/Shang-Tsung.jpeg';
import Reptile from '../assets/images/fighters/Reptile.jpeg';
import Baraka from '../assets/images/fighters/Baraka.webp';
import KungLao from '../assets/images/fighters/Kung-Lao.jpeg';
import QuanChi from '../assets/images/fighters/Quan-Chi.jpeg';
import ShaoKahn from '../assets/images/fighters/Shao-Kahn.jpeg';

export const FIGHTERS: IFighter[] = [
	{ id: '1', name: 'Scorpion', avatar: scorpion },
	{ id: '2', name: 'Sub-Zero', avatar: subZero },
	{ id: '3', name: 'Liu Kang', avatar: liuKang },
	{ id: '4', name: 'Johnny Cage', avatar: johnnyCage },
	{ id: '5', name: 'Sonya Blade', avatar: sonyaBlade },
	{ id: '6', name: 'Raiden', avatar: raiden },
	{ id: '7', name: 'Kano', avatar: kano },
	{ id: '8', name: 'Jax', avatar: Jax },
	{ id: '9', name: 'Kitana', avatar: Kitana },
	{ id: '10', name: 'Mileena', avatar: Mileena },
	{ id: '11', name: 'Shang Tsung', avatar: ShangTsung },
	{ id: '12', name: 'Reptile', avatar: Reptile },
	{ id: '13', name: 'Baraka', avatar: Baraka },
	{ id: '14', name: 'Kung Lao', avatar: KungLao },
	{ id: '15', name: 'Quan Chi', avatar: QuanChi },
	{ id: '16', name: 'Shao Kahn', avatar: ShaoKahn },
];

export const FIGHTERS_ROWS_NUMBER = 3;
export const FIGHTERS_COLUMNS_NUMBER = 5;

export const VERSUS_URL = '/versus';
export const FIGHT_URL = '/fight';

export const FIGHTER_ABILITIES: IFighterAbility[] = [
	{ type: 'FireballAttack', button: 'q' },
	{ type: 'Teleportation', button: 'w' },
	{ type: 'FreezeBreath', button: 'e' },
	{ type: 'EnhancedStrength', button: 'r' },
	{ type: 'ShadowKick', button: 't' },
	{ type: 'XRayAttack', button: 'y' },
];