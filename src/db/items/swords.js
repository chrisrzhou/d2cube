import {ItemPropertyType, ItemTierType, ItemType} from '../../enums/index.js';
import ids from '../ids/index.js';
import {mapItemName} from '../utils/map-item-name.js';
import {mapItemProperties} from '../utils/map-item-properties.js';
import {mapItems} from '../utils/map-items.js';

const items = {
  [ids.ShortSword]: {
    id: ids.ShortSword,
    name: 'Short Sword',
    tier: ItemTierType.Normal,
    ilvl: 1,
    size: [3, 1],
    properties: {
      [ItemPropertyType.Damage1H]: [2, 7],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: null,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 24,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.Scimitar]: {
    id: ids.Scimitar,
    name: 'Scimitar',
    tier: ItemTierType.Normal,
    ilvl: 5,
    size: [3, 1],
    properties: {
      [ItemPropertyType.Damage1H]: [2, 6],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: -20,
      [ItemPropertyType.MinimumStrength]: null,
      [ItemPropertyType.MinimumDexterity]: 21,
      [ItemPropertyType.Durability]: 22,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.Sabre]: {
    id: ids.Sabre,
    name: 'Sabre',
    tier: ItemTierType.Normal,
    ilvl: 8,
    size: [3, 1],
    properties: {
      [ItemPropertyType.Damage1H]: [3, 8],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: 25,
      [ItemPropertyType.MinimumDexterity]: 25,
      [ItemPropertyType.Durability]: 32,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.Falchion]: {
    id: ids.Falchion,
    name: 'Falchion',
    tier: ItemTierType.Normal,
    ilvl: 11,
    size: [3, 1],
    properties: {
      [ItemPropertyType.Damage1H]: [9, 17],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: 20,
      [ItemPropertyType.MinimumStrength]: 33,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 32,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.CrystalSword]: {
    id: ids.CrystalSword,
    name: 'Crystal Sword',
    tier: ItemTierType.Normal,
    ilvl: 11,
    size: [3, 2],
    properties: {
      [ItemPropertyType.Damage1H]: [5, 15],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 43,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 20,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.BroadSword]: {
    id: ids.BroadSword,
    name: 'Broad Sword',
    tier: ItemTierType.Normal,
    ilvl: 15,
    size: [3, 2],
    properties: {
      [ItemPropertyType.Damage1H]: [7, 14],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 48,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 32,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.LongSword]: {
    id: ids.LongSword,
    name: 'Long Sword',
    tier: ItemTierType.Normal,
    ilvl: 20,
    size: [3, 2],
    properties: {
      [ItemPropertyType.Damage1H]: [3, 19],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: 55,
      [ItemPropertyType.MinimumDexterity]: 39,
      [ItemPropertyType.Durability]: 44,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.WarSword]: {
    id: ids.WarSword,
    name: 'War Sword',
    tier: ItemTierType.Normal,
    ilvl: 27,
    size: [3, 1],
    properties: {
      [ItemPropertyType.Damage1H]: [8, 20],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 71,
      [ItemPropertyType.MinimumDexterity]: 45,
      [ItemPropertyType.Durability]: 44,
      [ItemPropertyType.MaxSockets]: 3,
    },
  },
  [ids.TwoHandedSword]: {
    id: ids.TwoHandedSword,
    name: 'Two-handed Sword',
    tier: ItemTierType.Normal,
    ilvl: 10,
    size: [4, 1],
    properties: {
      [ItemPropertyType.Damage1H]: [2, 9],
      [ItemPropertyType.Damage2H]: [8, 17],
      [ItemPropertyType.MeleeRange]: 3,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 35,
      [ItemPropertyType.MinimumDexterity]: 27,
      [ItemPropertyType.Durability]: 44,
      [ItemPropertyType.MaxSockets]: 3,
    },
  },
  [ids.Claymore]: {
    id: ids.Claymore,
    name: 'Claymore',
    tier: ItemTierType.Normal,
    ilvl: 17,
    size: [4, 1],
    properties: {
      [ItemPropertyType.Damage1H]: [5, 12],
      [ItemPropertyType.Damage2H]: [13, 30],
      [ItemPropertyType.MeleeRange]: 3,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 47,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 50,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.GiantSword]: {
    id: ids.GiantSword,
    name: 'Giant Sword',
    tier: ItemTierType.Normal,
    ilvl: 21,
    size: [4, 1],
    properties: {
      [ItemPropertyType.Damage1H]: [3, 16],
      [ItemPropertyType.Damage2H]: [9, 28],
      [ItemPropertyType.MeleeRange]: 3,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 56,
      [ItemPropertyType.MinimumDexterity]: 34,
      [ItemPropertyType.Durability]: 50,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.BastardSword]: {
    id: ids.BastardSword,
    name: 'Bastard Sword',
    tier: ItemTierType.Normal,
    ilvl: 24,
    size: [4, 1],
    properties: {
      [ItemPropertyType.Damage1H]: [7, 19],
      [ItemPropertyType.Damage2H]: [20, 28],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 62,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 40,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.Flamberge]: {
    id: ids.Flamberge,
    name: 'Flamberge',
    tier: ItemTierType.Normal,
    ilvl: 27,
    size: [4, 2],
    properties: {
      [ItemPropertyType.Damage1H]: [9, 15],
      [ItemPropertyType.Damage2H]: [13, 26],
      [ItemPropertyType.MeleeRange]: 3,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: 70,
      [ItemPropertyType.MinimumDexterity]: 49,
      [ItemPropertyType.Durability]: 50,
      [ItemPropertyType.MaxSockets]: 5,
    },
  },
  [ids.GreatSword]: {
    id: ids.GreatSword,
    name: 'Great Sword',
    tier: ItemTierType.Normal,
    ilvl: 33,
    size: [4, 2],
    properties: {
      [ItemPropertyType.Damage1H]: [12, 20],
      [ItemPropertyType.Damage2H]: [25, 42],
      [ItemPropertyType.MeleeRange]: 3,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 100,
      [ItemPropertyType.MinimumDexterity]: 60,
      [ItemPropertyType.Durability]: 50,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.Gladius]: {
    id: ids.Gladius,
    name: 'Gladius',
    tier: ItemTierType.Exceptional,
    clvl: 18,
    ilvl: 30,
    size: [3, 1],
    baseId: ids.ShortSword,
    imageId: ids.ShortSword,
    properties: {
      [ItemPropertyType.Damage1H]: [8, 22],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 25,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 24,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.Cutlass]: {
    id: ids.Cutlass,
    name: 'Cutlass',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 43,
    size: [3, 1],
    baseId: ids.Scimitar,
    imageId: ids.Scimitar,
    properties: {
      [ItemPropertyType.Damage1H]: [8, 21],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: -30,
      [ItemPropertyType.MinimumStrength]: 25,
      [ItemPropertyType.MinimumDexterity]: 52,
      [ItemPropertyType.Durability]: 22,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.Shamshir]: {
    id: ids.Shamshir,
    name: 'Shamshir',
    tier: ItemTierType.Exceptional,
    clvl: 23,
    ilvl: 35,
    size: [3, 1],
    baseId: ids.Sabre,
    imageId: ids.Sabre,
    properties: {
      [ItemPropertyType.Damage1H]: [10, 24],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: 58,
      [ItemPropertyType.MinimumDexterity]: 58,
      [ItemPropertyType.Durability]: 32,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.Tulwar]: {
    id: ids.Tulwar,
    name: 'Tulwar',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 37,
    size: [3, 1],
    baseId: ids.Falchion,
    imageId: ids.Falchion,
    properties: {
      [ItemPropertyType.Damage1H]: [16, 35],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: 20,
      [ItemPropertyType.MinimumStrength]: 70,
      [ItemPropertyType.MinimumDexterity]: 42,
      [ItemPropertyType.Durability]: 32,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.DimensionalBlade]: {
    id: ids.DimensionalBlade,
    name: 'Dimensional Blade',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 37,
    size: [3, 2],
    baseId: ids.CrystalSword,
    imageId: ids.CrystalSword,
    properties: {
      [ItemPropertyType.Damage1H]: [13, 35],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 85,
      [ItemPropertyType.MinimumDexterity]: 60,
      [ItemPropertyType.Durability]: 20,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.BattleSword]: {
    id: ids.BattleSword,
    name: 'Battle Sword',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 40,
    size: [3, 2],
    baseId: ids.BroadSword,
    imageId: ids.BroadSword,
    properties: {
      [ItemPropertyType.Damage1H]: [16, 34],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 92,
      [ItemPropertyType.MinimumDexterity]: 43,
      [ItemPropertyType.Durability]: 32,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.RuneSword]: {
    id: ids.RuneSword,
    name: 'Rune Sword',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 44,
    size: [3, 2],
    baseId: ids.LongSword,
    imageId: ids.LongSword,
    properties: {
      [ItemPropertyType.Damage1H]: [10, 42],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: 103,
      [ItemPropertyType.MinimumDexterity]: 79,
      [ItemPropertyType.Durability]: 44,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.AncientSword]: {
    id: ids.AncientSword,
    name: 'Ancient Sword',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 49,
    size: [3, 1],
    baseId: ids.WarSword,
    imageId: ids.WarSword,
    properties: {
      [ItemPropertyType.Damage1H]: [18, 43],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 127,
      [ItemPropertyType.MinimumDexterity]: 88,
      [ItemPropertyType.Durability]: 44,
      [ItemPropertyType.MaxSockets]: 3,
    },
  },
  [ids.Espandon]: {
    id: ids.Espandon,
    name: 'Espandon',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 37,
    size: [4, 1],
    baseId: ids.TwoHandedSword,
    imageId: ids.TwoHandedSword,
    properties: {
      [ItemPropertyType.Damage1H]: [8, 26],
      [ItemPropertyType.Damage2H]: [18, 40],
      [ItemPropertyType.MeleeRange]: 3,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 73,
      [ItemPropertyType.MinimumDexterity]: 61,
      [ItemPropertyType.Durability]: 44,
      [ItemPropertyType.MaxSockets]: 3,
    },
  },
  [ids.DacianFalx]: {
    id: ids.DacianFalx,
    name: 'Dacian Falx',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 42,
    size: [4, 1],
    baseId: ids.Claymore,
    imageId: ids.Claymore,
    properties: {
      [ItemPropertyType.Damage1H]: [13, 30],
      [ItemPropertyType.Damage2H]: [26, 61],
      [ItemPropertyType.MeleeRange]: 3,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 91,
      [ItemPropertyType.MinimumDexterity]: 20,
      [ItemPropertyType.Durability]: 50,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.TuskSword]: {
    id: ids.TuskSword,
    name: 'Tusk Sword',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 45,
    size: [4, 1],
    baseId: ids.GiantSword,
    imageId: ids.GiantSword,
    properties: {
      [ItemPropertyType.Damage1H]: [10, 37],
      [ItemPropertyType.Damage2H]: [19, 58],
      [ItemPropertyType.MeleeRange]: 3,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 104,
      [ItemPropertyType.MinimumDexterity]: 71,
      [ItemPropertyType.Durability]: 50,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.GothicSword]: {
    id: ids.GothicSword,
    name: 'Gothic Sword',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 48,
    size: [4, 1],
    baseId: ids.BastardSword,
    imageId: ids.BastardSword,
    properties: {
      [ItemPropertyType.Damage1H]: [14, 40],
      [ItemPropertyType.Damage2H]: [39, 60],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 113,
      [ItemPropertyType.MinimumDexterity]: 20,
      [ItemPropertyType.Durability]: 40,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.Zweihander]: {
    id: ids.Zweihander,
    name: 'Zweihander',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 49,
    size: [4, 2],
    baseId: ids.Flamberge,
    imageId: ids.Flamberge,
    properties: {
      [ItemPropertyType.Damage1H]: [19, 35],
      [ItemPropertyType.Damage2H]: [29, 54],
      [ItemPropertyType.MeleeRange]: 3,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: 125,
      [ItemPropertyType.MinimumDexterity]: 94,
      [ItemPropertyType.Durability]: 50,
      [ItemPropertyType.MaxSockets]: 5,
    },
  },
  [ids.ExecutionerSword]: {
    id: ids.ExecutionerSword,
    name: 'Executioner Sword',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 54,
    size: [4, 2],
    baseId: ids.GreatSword,
    imageId: ids.GreatSword,
    properties: {
      [ItemPropertyType.Damage1H]: [24, 40],
      [ItemPropertyType.Damage2H]: [47, 80],
      [ItemPropertyType.MeleeRange]: 3,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 170,
      [ItemPropertyType.MinimumDexterity]: 110,
      [ItemPropertyType.Durability]: 50,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.Falcata]: {
    id: ids.Falcata,
    name: 'Falcata',
    tier: ItemTierType.Elite,
    clvl: 42,
    ilvl: 56,
    size: [3, 1],
    baseId: ids.ShortSword,
    imageId: ids.ShortSword,
    properties: {
      [ItemPropertyType.Damage1H]: [31, 59],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 150,
      [ItemPropertyType.MinimumDexterity]: 88,
      [ItemPropertyType.Durability]: 24,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.Ataghan]: {
    id: ids.Ataghan,
    name: 'Ataghan',
    tier: ItemTierType.Elite,
    clvl: 45,
    ilvl: 61,
    size: [3, 1],
    baseId: ids.Scimitar,
    imageId: ids.Scimitar,
    properties: {
      [ItemPropertyType.Damage1H]: [26, 46],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: -20,
      [ItemPropertyType.MinimumStrength]: 135,
      [ItemPropertyType.MinimumDexterity]: 95,
      [ItemPropertyType.Durability]: 22,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.ElegantBlade]: {
    id: ids.ElegantBlade,
    name: 'Elegant Blade',
    tier: ItemTierType.Elite,
    clvl: 47,
    ilvl: 63,
    size: [3, 1],
    baseId: ids.Sabre,
    imageId: ids.Sabre,
    properties: {
      [ItemPropertyType.Damage1H]: [33, 45],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: 109,
      [ItemPropertyType.MinimumDexterity]: 122,
      [ItemPropertyType.Durability]: 32,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.HydraEdge]: {
    id: ids.HydraEdge,
    name: 'Hydra Edge',
    tier: ItemTierType.Elite,
    clvl: 51,
    ilvl: 69,
    size: [3, 1],
    baseId: ids.Falchion,
    imageId: ids.Falchion,
    properties: {
      [ItemPropertyType.Damage1H]: [28, 68],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 142,
      [ItemPropertyType.MinimumDexterity]: 105,
      [ItemPropertyType.Durability]: 32,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.PhaseBlade]: {
    id: ids.PhaseBlade,
    name: 'Phase Blade',
    tier: ItemTierType.Elite,
    clvl: 54,
    ilvl: 73,
    size: [3, 2],
    baseId: ids.CrystalSword,
    imageId: ids.CrystalSword,
    properties: {
      [ItemPropertyType.Damage1H]: [31, 35],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: -30,
      [ItemPropertyType.MinimumStrength]: 25,
      [ItemPropertyType.MinimumDexterity]: 136,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.ConquestSword]: {
    id: ids.ConquestSword,
    name: 'Conquest Sword',
    tier: ItemTierType.Elite,
    clvl: 58,
    ilvl: 78,
    size: [3, 2],
    baseId: ids.BroadSword,
    imageId: ids.BroadSword,
    properties: {
      [ItemPropertyType.Damage1H]: [37, 53],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 142,
      [ItemPropertyType.MinimumDexterity]: 112,
      [ItemPropertyType.Durability]: 32,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.CrypticSword]: {
    id: ids.CrypticSword,
    name: 'Cryptic Sword',
    tier: ItemTierType.Elite,
    clvl: 61,
    ilvl: 82,
    size: [3, 2],
    baseId: ids.LongSword,
    imageId: ids.LongSword,
    properties: {
      [ItemPropertyType.Damage1H]: [5, 77],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: 99,
      [ItemPropertyType.MinimumDexterity]: 109,
      [ItemPropertyType.Durability]: 44,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.MythicalSword]: {
    id: ids.MythicalSword,
    name: 'Mythical Sword',
    tier: ItemTierType.Elite,
    clvl: 66,
    ilvl: 85,
    size: [3, 1],
    baseId: ids.WarSword,
    imageId: ids.WarSword,
    properties: {
      [ItemPropertyType.Damage1H]: [40, 50],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 147,
      [ItemPropertyType.MinimumDexterity]: 124,
      [ItemPropertyType.Durability]: 44,
      [ItemPropertyType.MaxSockets]: 3,
    },
  },
  [ids.LegendSword]: {
    id: ids.LegendSword,
    name: 'Legend Sword',
    tier: ItemTierType.Elite,
    clvl: 44,
    ilvl: 59,
    size: [4, 1],
    baseId: ids.TwoHandedSword,
    imageId: ids.TwoHandedSword,
    properties: {
      [ItemPropertyType.Damage1H]: [20, 56],
      [ItemPropertyType.Damage2H]: [50, 94],
      [ItemPropertyType.MeleeRange]: 3,
      [ItemPropertyType.AttackSpeed]: -15,
      [ItemPropertyType.MinimumStrength]: 175,
      [ItemPropertyType.MinimumDexterity]: 100,
      [ItemPropertyType.Durability]: 44,
      [ItemPropertyType.MaxSockets]: 3,
    },
  },
  [ids.HighlandBlade]: {
    id: ids.HighlandBlade,
    name: 'Highland Blade',
    tier: ItemTierType.Elite,
    clvl: 49,
    ilvl: 66,
    size: [4, 1],
    baseId: ids.Claymore,
    imageId: ids.Claymore,
    properties: {
      [ItemPropertyType.Damage1H]: [22, 62],
      [ItemPropertyType.Damage2H]: [67, 96],
      [ItemPropertyType.MeleeRange]: 3,
      [ItemPropertyType.AttackSpeed]: -5,
      [ItemPropertyType.MinimumStrength]: 171,
      [ItemPropertyType.MinimumDexterity]: 104,
      [ItemPropertyType.Durability]: 50,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.BalrogBlade]: {
    id: ids.BalrogBlade,
    name: 'Balrog Blade',
    tier: ItemTierType.Elite,
    clvl: 53,
    ilvl: 71,
    size: [4, 1],
    baseId: ids.GiantSword,
    imageId: ids.GiantSword,
    properties: {
      [ItemPropertyType.Damage1H]: [15, 75],
      [ItemPropertyType.Damage2H]: [55, 118],
      [ItemPropertyType.MeleeRange]: 3,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 185,
      [ItemPropertyType.MinimumDexterity]: 87,
      [ItemPropertyType.Durability]: 50,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.ChampionSword]: {
    id: ids.ChampionSword,
    name: 'Champion Sword',
    tier: ItemTierType.Elite,
    clvl: 57,
    ilvl: 77,
    size: [4, 1],
    baseId: ids.BastardSword,
    imageId: ids.BastardSword,
    properties: {
      [ItemPropertyType.Damage1H]: [24, 54],
      [ItemPropertyType.Damage2H]: [71, 83],
      [ItemPropertyType.MeleeRange]: 3,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: 163,
      [ItemPropertyType.MinimumDexterity]: 103,
      [ItemPropertyType.Durability]: 40,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.ColossusSword]: {
    id: ids.ColossusSword,
    name: 'Colossus Sword',
    tier: ItemTierType.Elite,
    clvl: 80,
    ilvl: 60,
    size: [4, 2],
    baseId: ids.Flamberge,
    imageId: ids.Flamberge,
    properties: {
      [ItemPropertyType.Damage1H]: [26, 70],
      [ItemPropertyType.Damage2H]: [61, 121],
      [ItemPropertyType.MeleeRange]: 3,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 182,
      [ItemPropertyType.MinimumDexterity]: 95,
      [ItemPropertyType.Durability]: 50,
      [ItemPropertyType.MaxSockets]: 5,
    },
  },
  [ids.ColossusBlade]: {
    id: ids.ColossusBlade,
    name: 'Colossus Blade',
    tier: ItemTierType.Elite,
    clvl: 63,
    ilvl: 85,
    size: [4, 2],
    baseId: ids.GreatSword,
    imageId: ids.GreatSword,
    properties: {
      [ItemPropertyType.Damage1H]: [25, 65],
      [ItemPropertyType.Damage2H]: [58, 115],
      [ItemPropertyType.MeleeRange]: 3,
      [ItemPropertyType.AttackSpeed]: 5,
      [ItemPropertyType.MinimumStrength]: 189,
      [ItemPropertyType.MinimumDexterity]: 110,
      [ItemPropertyType.Durability]: 50,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
};

export default mapItems({
  type: ItemType.Sword,
  mapDescription: (item) => [[mapItemName(item), ...mapItemProperties(item)]],
})(items);
