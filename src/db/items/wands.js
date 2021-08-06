import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: WeaponClassType.Staff,
  size: [2, 1],
  type: ItemType.Wand,
})([
  {
    id: ids.Wand,
    name: 'Wand',
    tier: ItemTierType.Normal,
    qlvl: 2,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [2, 4],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [0],
        [BasePropertyType.Durability]: [15],
        [BasePropertyType.MaxSockets]: [1],
      },
    },
  },
  {
    id: ids.YewWand,
    name: 'Yew Wand',
    tier: ItemTierType.Normal,
    qlvl: 12,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [2, 8],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [10],
        [BasePropertyType.Durability]: [15],
        [BasePropertyType.MaxSockets]: [1],
      },
    },
  },
  {
    id: ids.BoneWand,
    name: 'Bone Wand',
    tier: ItemTierType.Normal,
    qlvl: 18,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [3, 7],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [-20],
        [BasePropertyType.Durability]: [15],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.GrimWand,
    name: 'Grim Wand',
    tier: ItemTierType.Normal,
    qlvl: 26,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [5, 11],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [0],
        [BasePropertyType.Durability]: [15],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.BurntWand,
    name: 'Burnt Wand',
    tier: ItemTierType.Exceptional,
    clvl: 19,
    qlvl: 31,
    baseId: ids.Wand,
    imageId: ids.Wand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [8, 18],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [0],
        [BasePropertyType.RequiredStrength]: [25],
        [BasePropertyType.Durability]: [15],
        [BasePropertyType.MaxSockets]: [1],
      },
    },
  },
  {
    id: ids.PetrifiedWand,
    name: 'Petrified Wand',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 38,
    baseId: ids.YewWand,
    imageId: ids.YewWand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [8, 24],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [10],
        [BasePropertyType.RequiredStrength]: [25],
        [BasePropertyType.Durability]: [15],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.TombWand,
    name: 'Tomb Wand',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 43,
    baseId: ids.BoneWand,
    imageId: ids.BoneWand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [10, 22],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [-20],
        [BasePropertyType.RequiredStrength]: [25],
        [BasePropertyType.Durability]: [15],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.GraveWand,
    name: 'Grave Wand',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 49,
    baseId: ids.GrimWand,
    imageId: ids.GrimWand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [13, 29],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [0],
        [BasePropertyType.RequiredStrength]: [25],
        [BasePropertyType.Durability]: [15],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.PolishedWand,
    name: 'Polished Wand',
    tier: ItemTierType.Elite,
    clvl: 41,
    qlvl: 55,
    baseId: ids.Wand,
    imageId: ids.Wand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [18, 33],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [0],
        [BasePropertyType.RequiredStrength]: [25],
        [BasePropertyType.Durability]: [22],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.GhostWand,
    name: 'Ghost Wand',
    tier: ItemTierType.Elite,
    clvl: 48,
    qlvl: 65,
    baseId: ids.YewWand,
    imageId: ids.YewWand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [20, 42],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [10],
        [BasePropertyType.RequiredStrength]: [25],
        [BasePropertyType.Durability]: [14],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.LichWand,
    name: 'Lich Wand',
    tier: ItemTierType.Elite,
    clvl: 56,
    qlvl: 75,
    baseId: ids.BoneWand,
    imageId: ids.BoneWand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [10, 31],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [-20],
        [BasePropertyType.RequiredStrength]: [25],
        [BasePropertyType.Durability]: [17],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.UnearthedWand,
    name: 'Unearthed Wand',
    tier: ItemTierType.Elite,
    clvl: 64,
    qlvl: 86,
    baseId: ids.GrimWand,
    imageId: ids.GrimWand,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [22, 28],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [0],
        [BasePropertyType.RequiredStrength]: [25],
        [BasePropertyType.Durability]: [18],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
]);
