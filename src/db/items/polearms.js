import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: WeaponClassType.Polearm,
  size: [4, 2],
  type: ItemType.Polearm,
})([
  {
    id: ids.Bardiche,
    name: 'Bardiche',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 1, y: 27},
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.RequiredStrength]: 40,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 3,
      },
    },
  },
  {
    id: ids.Voulge,
    name: 'Voulge',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 6, y: 21},
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.RequiredStrength]: 50,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 4,
        [BasePropertyType.MeleeRange]: 3,
      },
    },
  },
  {
    id: ids.Scythe,
    name: 'Scythe',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 8, y: 20},
        [BasePropertyType.Durability]: 65,
        [BasePropertyType.RequiredDexterity]: 41,
        [BasePropertyType.RequiredStrength]: 41,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.Poleaxe,
    name: 'Poleaxe',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 18, y: 39},
        [BasePropertyType.Durability]: 65,
        [BasePropertyType.RequiredStrength]: 62,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.MeleeRange]: 4,
      },
    },
  },
  {
    id: ids.Halberd,
    name: 'Halberd',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 12, y: 45},
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.RequiredDexterity]: 47,
        [BasePropertyType.RequiredStrength]: 75,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 5,
      },
    },
  },
  {
    id: ids.WarScythe,
    name: 'War Scythe',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 15, y: 36},
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.RequiredDexterity]: 80,
        [BasePropertyType.RequiredStrength]: 80,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 5,
      },
    },
  },
  {
    id: ids.LochaberAxe,
    name: 'Lochaber Axe',
    tier: ItemTierType.Exceptional,
    baseId: ids.Bardiche,
    imageId: ids.Bardiche,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 6, y: 58},
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.RequiredStrength]: 80,
        [BasePropertyType.RequiredLevel]: 21,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 3,
      },
    },
  },
  {
    id: ids.Bill,
    name: 'Bill',
    tier: ItemTierType.Exceptional,
    baseId: ids.Voulge,
    imageId: ids.Voulge,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 14, y: 53},
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.RequiredStrength]: 95,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 4,
        [BasePropertyType.MeleeRange]: 3,
      },
    },
  },
  {
    id: ids.BattleScythe,
    name: 'Battle Scythe',
    tier: ItemTierType.Exceptional,
    baseId: ids.Scythe,
    imageId: ids.Scythe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 18, y: 45},
        [BasePropertyType.Durability]: 65,
        [BasePropertyType.RequiredDexterity]: 82,
        [BasePropertyType.RequiredStrength]: 82,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.Partizan,
    name: 'Partizan',
    tier: ItemTierType.Exceptional,
    baseId: ids.Poleaxe,
    imageId: ids.Poleaxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 34, y: 75},
        [BasePropertyType.Durability]: 65,
        [BasePropertyType.RequiredDexterity]: 67,
        [BasePropertyType.RequiredStrength]: 113,
        [BasePropertyType.RequiredLevel]: 23,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.MeleeRange]: 4,
      },
    },
  },
  {
    id: ids.BecDeCorbin,
    name: 'Be-De-Corbin',
    tier: ItemTierType.Exceptional,
    baseId: ids.Halberd,
    imageId: ids.Halberd,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 13, y: 85},
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.RequiredDexterity]: 91,
        [BasePropertyType.RequiredStrength]: 133,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 5,
      },
    },
  },
  {
    id: ids.GrimScythe,
    name: 'Grim Scythe',
    tier: ItemTierType.Exceptional,
    baseId: ids.WarScythe,
    imageId: ids.WarScythe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 30, y: 70},
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.RequiredDexterity]: 140,
        [BasePropertyType.RequiredStrength]: 140,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 5,
      },
    },
  },
  {
    id: ids.OgreAxe,
    name: 'Ogre Axe',
    tier: ItemTierType.Elite,
    baseId: ids.Bardiche,
    imageId: ids.Bardiche,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 28, y: 145},
        [BasePropertyType.Durability]: 50,
        [BasePropertyType.RequiredDexterity]: 75,
        [BasePropertyType.RequiredStrength]: 195,
        [BasePropertyType.RequiredLevel]: 45,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 3,
        [BasePropertyType.MeleeRange]: 3,
      },
    },
  },
  {
    id: ids.ColossusVoulge,
    name: 'Colossus Voulge',
    tier: ItemTierType.Elite,
    baseId: ids.Voulge,
    imageId: ids.Voulge,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 17, y: 165},
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.RequiredStrength]: 210,
        [BasePropertyType.RequiredLevel]: 48,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 4,
        [BasePropertyType.MeleeRange]: 3,
      },
    },
  },
  {
    id: ids.Thresher,
    name: 'Thresher',
    tier: ItemTierType.Elite,
    baseId: ids.Scythe,
    imageId: ids.Scythe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 12, y: 141},
        [BasePropertyType.Durability]: 65,
        [BasePropertyType.RequiredDexterity]: 118,
        [BasePropertyType.RequiredStrength]: 152,
        [BasePropertyType.RequiredLevel]: 53,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.MeleeRange]: 2,
      },
    },
  },
  {
    id: ids.CrypticAxe,
    name: 'Cryptic Axe',
    tier: ItemTierType.Elite,
    baseId: ids.Poleaxe,
    imageId: ids.Poleaxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 33, y: 150},
        [BasePropertyType.Durability]: 65,
        [BasePropertyType.RequiredDexterity]: 103,
        [BasePropertyType.RequiredStrength]: 165,
        [BasePropertyType.RequiredLevel]: 59,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 5,
        [BasePropertyType.MeleeRange]: 4,
      },
    },
  },
  {
    id: ids.GreatPoleaxe,
    name: 'Great Poleaxe',
    tier: ItemTierType.Elite,
    baseId: ids.Halberd,
    imageId: ids.Halberd,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 46, y: 127},
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.RequiredDexterity]: 99,
        [BasePropertyType.RequiredStrength]: 179,
        [BasePropertyType.RequiredLevel]: 63,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 5,
      },
    },
  },
  {
    id: ids.GiantThresher,
    name: 'Grim Thresher',
    tier: ItemTierType.Elite,
    baseId: ids.WarScythe,
    imageId: ids.WarScythe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 40, y: 114},
        [BasePropertyType.Durability]: 55,
        [BasePropertyType.RequiredDexterity]: 140,
        [BasePropertyType.RequiredStrength]: 188,
        [BasePropertyType.RequiredLevel]: 66,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 6,
        [BasePropertyType.MeleeRange]: 5,
      },
    },
  },
]);
