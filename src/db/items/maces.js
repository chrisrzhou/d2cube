import {
  BasePropertyType,
  ItemQualityType,
  ItemTierType,
  ItemType,
  SocketCategoryType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: WeaponClassType.Mace,
  quality: ItemQualityType.Normal,
  socketCategory: SocketCategoryType.Weapon,
  type: ItemType.Mace,
})([
  {
    id: ids.Mace,
    name: 'Mace',
    tier: ItemTierType.Normal,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 3, y: 10},
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.RequiredStrength]: 27,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.MorningStar,
    name: 'Morning Star',
    tier: ItemTierType.Normal,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 7, y: 16},
        [BasePropertyType.Durability]: 72,
        [BasePropertyType.RequiredStrength]: 36,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.Flail,
    name: 'Flail',
    tier: ItemTierType.Normal,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 1, y: 24},
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.RequiredDexterity]: 35,
        [BasePropertyType.RequiredStrength]: 41,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.MeleeRange]: 3,
      },
    },
  },
  {
    id: ids.FlangedMace,
    name: 'Flanged Mace',
    tier: ItemTierType.Exceptional,
    size: [3, 1],
    baseId: ids.Mace,
    imageId: ids.Mace,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 15, y: 23},
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.RequiredStrength]: 61,
        [BasePropertyType.RequiredLevel]: 23,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.JaggedStar,
    name: 'Jagged Star',
    tier: ItemTierType.Exceptional,
    size: [3, 1],
    baseId: ids.MorningStar,
    imageId: ids.MorningStar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 20, y: 31},
        [BasePropertyType.Durability]: 72,
        [BasePropertyType.RequiredStrength]: 74,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.Knout,
    name: 'Knout',
    tier: ItemTierType.Exceptional,
    size: [3, 2],
    baseId: ids.Flail,
    imageId: ids.Flail,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 13, y: 35},
        [BasePropertyType.Durability]: 30,
        [BasePropertyType.RequiredDexterity]: 73,
        [BasePropertyType.RequiredStrength]: 82,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.MeleeRange]: 3,
      },
    },
  },
  {
    id: ids.ReinforcedMace,
    name: 'Reinforced Mace',
    tier: ItemTierType.Elite,
    size: [3, 1],
    baseId: ids.Mace,
    imageId: ids.Mace,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 41, y: 49},
        [BasePropertyType.Durability]: 60,
        [BasePropertyType.RequiredDexterity]: 46,
        [BasePropertyType.RequiredStrength]: 145,
        [BasePropertyType.RequiredLevel]: 47,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 2,
        [BasePropertyType.MeleeRange]: 1,
      },
    },
  },
  {
    id: ids.DevilStar,
    name: 'Devil Star',
    tier: ItemTierType.Elite,
    size: [3, 1],
    baseId: ids.MorningStar,
    imageId: ids.MorningStar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 43, y: 53},
        [BasePropertyType.Durability]: 72,
        [BasePropertyType.RequiredDexterity]: 44,
        [BasePropertyType.RequiredStrength]: 153,
        [BasePropertyType.RequiredLevel]: 52,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.Scourge,
    name: 'Scourge',
    tier: ItemTierType.Elite,
    size: [3, 2],
    baseId: ids.Flail,
    imageId: ids.Flail,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {x: 3, y: 80},
        [BasePropertyType.Durability]: 65,
        [BasePropertyType.RequiredDexterity]: 77,
        [BasePropertyType.RequiredStrength]: 125,
        [BasePropertyType.RequiredLevel]: 57,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.MeleeRange]: 3,
      },
    },
  },
]);
