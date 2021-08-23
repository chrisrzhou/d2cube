import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  SocketCategoryType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: WeaponClassType.Bow,
  socketCategory: SocketCategoryType.Weapon,
  type: ItemType.Bow,
})([
  {
    id: ids.ShortBow,
    name: 'Short Bow',
    tier: ItemTierType.Normal,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 1, y: 4},
        [BasePropertyType.RequiredDexterity]: 15,
        [BasePropertyType.AttackSpeed]: 5,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.HuntersBow,
    name: "Hunter's Bow",
    tier: ItemTierType.Normal,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 2, y: 6},
        [BasePropertyType.RequiredDexterity]: 28,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.LongBow,
    name: 'Long Bow',
    tier: ItemTierType.Normal,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 3, y: 10},
        [BasePropertyType.RequiredDexterity]: 19,
        [BasePropertyType.RequiredStrength]: 22,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.CompositeBow,
    name: 'Composite Bow',
    tier: ItemTierType.Normal,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 4, y: 8},
        [BasePropertyType.RequiredDexterity]: 35,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.ShortBattleBow,
    name: 'Short Battle Bow',
    tier: ItemTierType.Normal,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 5, y: 11},
        [BasePropertyType.RequiredDexterity]: 40,
        [BasePropertyType.RequiredStrength]: 30,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.LongBattleBow,
    name: 'Long Battle Bow',
    tier: ItemTierType.Normal,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 3, y: 18},
        [BasePropertyType.RequiredDexterity]: 50,
        [BasePropertyType.RequiredStrength]: 40,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 6,
      },
    },
  },
  {
    id: ids.ShortWarBow,
    name: 'Short War Bow',
    tier: ItemTierType.Normal,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 6, y: 14},
        [BasePropertyType.RequiredDexterity]: 55,
        [BasePropertyType.RequiredStrength]: 35,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.LongWarBow,
    name: 'Long War Bow',
    tier: ItemTierType.Normal,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 3, y: 23},
        [BasePropertyType.RequiredDexterity]: 65,
        [BasePropertyType.RequiredStrength]: 50,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 6,
      },
    },
  },
  {
    id: ids.EdgeBow,
    name: 'Edge Bow',
    tier: ItemTierType.Exceptional,
    size: [3, 2],
    baseId: ids.ShortBow,
    imageId: ids.ShortBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 6, y: 19},
        [BasePropertyType.RequiredDexterity]: 43,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 18,
        [BasePropertyType.AttackSpeed]: 5,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.RazorBow,
    name: 'Razor Bow',
    tier: ItemTierType.Exceptional,
    size: [3, 2],
    baseId: ids.HuntersBow,
    imageId: ids.HuntersBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 8, y: 22},
        [BasePropertyType.RequiredDexterity]: 62,
        [BasePropertyType.RequiredStrength]: 25,
        [BasePropertyType.RequiredLevel]: 21,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.CedarBow,
    name: 'Cedar Bow',
    tier: ItemTierType.Exceptional,
    size: [4, 2],
    baseId: ids.LongBow,
    imageId: ids.LongBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 10, y: 29},
        [BasePropertyType.RequiredDexterity]: 49,
        [BasePropertyType.RequiredStrength]: 53,
        [BasePropertyType.RequiredLevel]: 23,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.DoubleBow,
    name: 'Double Bow',
    tier: ItemTierType.Exceptional,
    size: [3, 2],
    baseId: ids.CompositeBow,
    imageId: ids.CompositeBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 11, y: 26},
        [BasePropertyType.RequiredDexterity]: 73,
        [BasePropertyType.RequiredStrength]: 58,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.ShortSiegeBow,
    name: 'Short Siege Bow',
    tier: ItemTierType.Exceptional,
    size: [3, 2],
    baseId: ids.ShortBattleBow,
    imageId: ids.ShortBattleBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 13, y: 30},
        [BasePropertyType.RequiredDexterity]: 80,
        [BasePropertyType.RequiredStrength]: 65,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.LargeSiegeBow,
    name: 'Large Siege Bow',
    tier: ItemTierType.Exceptional,
    size: [4, 2],
    baseId: ids.LongBattleBow,
    imageId: ids.LongBattleBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 10, y: 42},
        [BasePropertyType.RequiredDexterity]: 95,
        [BasePropertyType.RequiredStrength]: 80,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 6,
      },
    },
  },
  {
    id: ids.RuneBow,
    name: 'Rune Bow',
    tier: ItemTierType.Exceptional,
    size: [3, 2],
    baseId: ids.ShortWarBow,
    imageId: ids.ShortWarBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 14, y: 35},
        [BasePropertyType.RequiredDexterity]: 103,
        [BasePropertyType.RequiredStrength]: 73,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.GothicBow,
    name: 'Gothic Bow',
    tier: ItemTierType.Exceptional,
    size: [4, 2],
    baseId: ids.LongWarBow,
    imageId: ids.LongWarBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 10, y: 50},
        [BasePropertyType.RequiredDexterity]: 118,
        [BasePropertyType.RequiredStrength]: 95,
        [BasePropertyType.RequiredLevel]: 25,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 6,
      },
    },
  },
  {
    id: ids.SpiderBow,
    name: 'Spider Bow',
    tier: ItemTierType.Elite,
    size: [3, 2],
    baseId: ids.ShortBow,
    imageId: ids.ShortBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 23, y: 50},
        [BasePropertyType.RequiredDexterity]: 143,
        [BasePropertyType.RequiredStrength]: 64,
        [BasePropertyType.RequiredLevel]: 41,
        [BasePropertyType.AttackSpeed]: 5,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.BladeBow,
    name: 'Blade Bow',
    tier: ItemTierType.Elite,
    size: [3, 2],
    baseId: ids.HuntersBow,
    imageId: ids.HuntersBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 21, y: 41},
        [BasePropertyType.RequiredDexterity]: 119,
        [BasePropertyType.RequiredStrength]: 76,
        [BasePropertyType.RequiredLevel]: 45,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.ShadowBow,
    name: 'Shadow Bow',
    tier: ItemTierType.Elite,
    size: [4, 2],
    baseId: ids.LongBow,
    imageId: ids.LongBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 15, y: 59},
        [BasePropertyType.RequiredDexterity]: 188,
        [BasePropertyType.RequiredStrength]: 52,
        [BasePropertyType.RequiredLevel]: 47,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.GreatBow,
    name: 'Great Bow',
    tier: ItemTierType.Elite,
    size: [3, 2],
    baseId: ids.CompositeBow,
    imageId: ids.CompositeBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 12, y: 52},
        [BasePropertyType.RequiredDexterity]: 107,
        [BasePropertyType.RequiredStrength]: 121,
        [BasePropertyType.RequiredLevel]: 51,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.MaxSockets]: 4,
      },
    },
  },
  {
    id: ids.DiamondBow,
    name: 'Diamond Bow',
    tier: ItemTierType.Elite,
    size: [3, 2],
    baseId: ids.ShortBattleBow,
    imageId: ids.ShortBattleBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 33, y: 40},
        [BasePropertyType.RequiredDexterity]: 132,
        [BasePropertyType.RequiredStrength]: 89,
        [BasePropertyType.RequiredLevel]: 54,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.CrusaderBow,
    name: 'Crusader Bow',
    tier: ItemTierType.Elite,
    size: [4, 2],
    baseId: ids.LongBattleBow,
    imageId: ids.LongBattleBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 15, y: 63},
        [BasePropertyType.RequiredDexterity]: 121,
        [BasePropertyType.RequiredStrength]: 97,
        [BasePropertyType.RequiredLevel]: 57,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 6,
      },
    },
  },
  {
    id: ids.WardBow,
    name: 'Ward Bow',
    tier: ItemTierType.Elite,
    size: [3, 2],
    baseId: ids.ShortWarBow,
    imageId: ids.ShortWarBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 20, y: 53},
        [BasePropertyType.RequiredDexterity]: 146,
        [BasePropertyType.RequiredStrength]: 72,
        [BasePropertyType.RequiredLevel]: 60,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.MaxSockets]: 5,
      },
    },
  },
  {
    id: ids.HydraBow,
    name: 'Hydra Bow',
    tier: ItemTierType.Elite,
    size: [4, 2],
    baseId: ids.LongWarBow,
    imageId: ids.LongWarBow,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: {x: 10, y: 68},
        [BasePropertyType.RequiredDexterity]: 167,
        [BasePropertyType.RequiredStrength]: 134,
        [BasePropertyType.RequiredLevel]: 63,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.MaxSockets]: 6,
      },
    },
  },
]);
