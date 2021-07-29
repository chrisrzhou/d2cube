import {ItemPropertyType, ItemTierType, ItemType} from '../enums/index.js';
import ids from '../ids/index.js';
import {mapItemName} from '../utils/map-item-name.js';
import {mapItemProperties} from '../utils/map-item-properties.js';
import {mapItems} from '../utils/map-items.js';

const items = {
  [ids.HandAxe]: {
    id: ids.HandAxe,
    name: 'Hand Axe',
    tier: ItemTierType.Normal,
    ilvl: 3,
    size: [2, 1],
    properties: {
      [ItemPropertyType.Damage1H]: [3, 6],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: null,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 28,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.Axe]: {
    id: ids.Axe,
    name: 'Axe',
    tier: ItemTierType.Normal,
    ilvl: 7,
    size: [3, 2],
    properties: {
      [ItemPropertyType.Damage1H]: [4, 11],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 32,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 24,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.DoubleAxe]: {
    id: ids.DoubleAxe,
    name: 'Double Axe',
    tier: ItemTierType.Normal,
    ilvl: 13,
    size: [3, 2],
    properties: {
      [ItemPropertyType.Damage1H]: [5, 13],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 43,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 24,
      [ItemPropertyType.MaxSockets]: 5,
    },
  },
  [ids.MilitaryPick]: {
    id: ids.MilitaryPick,
    name: 'Military Pick',
    tier: ItemTierType.Normal,
    ilvl: 19,
    size: [3, 2],
    properties: {
      [ItemPropertyType.Damage1H]: [7, 11],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: 49,
      [ItemPropertyType.MinimumDexterity]: 33,
      [ItemPropertyType.Durability]: 26,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.WarAxe]: {
    id: ids.WarAxe,
    name: 'War Axe',
    tier: ItemTierType.Normal,
    ilvl: 25,
    size: [3, 2],
    properties: {
      [ItemPropertyType.Damage1H]: [10, 18],
      [ItemPropertyType.MeleeRange]: 3,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 67,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 26,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.LargeAxe]: {
    id: ids.LargeAxe,
    name: 'Large Axe',
    tier: ItemTierType.Normal,
    ilvl: 6,
    size: [3, 2],
    properties: {
      [ItemPropertyType.Damage2H]: [6, 13],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: 35,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 30,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.BroadAxe]: {
    id: ids.BroadAxe,
    name: 'Broad Axe',
    tier: ItemTierType.Normal,
    ilvl: 12,
    size: [3, 2],
    properties: {
      [ItemPropertyType.Damage2H]: [10, 18],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 48,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 35,
      [ItemPropertyType.MaxSockets]: 5,
    },
  },
  [ids.BattleAxe]: {
    id: ids.BattleAxe,
    name: 'Battle Axe',
    tier: ItemTierType.Normal,
    ilvl: 17,
    size: [3, 2],
    properties: {
      [ItemPropertyType.Damage2H]: [12, 32],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 54,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 40,
      [ItemPropertyType.MaxSockets]: 5,
    },
  },
  [ids.GreatAxe]: {
    id: ids.GreatAxe,
    name: 'Great Axe',
    tier: ItemTierType.Normal,
    ilvl: 23,
    size: [4, 2],
    properties: {
      [ItemPropertyType.Damage2H]: [9, 30],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: 63,
      [ItemPropertyType.MinimumDexterity]: 39,
      [ItemPropertyType.Durability]: 50,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.GiantAxe]: {
    id: ids.GiantAxe,
    name: 'Giant Axe',
    tier: ItemTierType.Normal,
    ilvl: 27,
    size: [3, 2],
    properties: {
      [ItemPropertyType.Damage2H]: [22, 45],
      [ItemPropertyType.MeleeRange]: 4,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 70,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 50,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.ThrowingAxe]: {
    id: ids.ThrowingAxe,
    name: 'Throwing Axe',
    tier: ItemTierType.Normal,
    ilvl: 7,
    size: [2, 1],
    properties: {
      [ItemPropertyType.DamageThrow]: [8, 12],
      [ItemPropertyType.Damage1H]: [4, 7],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: null,
      [ItemPropertyType.MinimumDexterity]: 40,
    },
  },
  [ids.BalancedAxe]: {
    id: ids.BalancedAxe,
    name: 'Balanced Axe',
    tier: ItemTierType.Normal,
    ilvl: 16,
    size: [3, 2],
    properties: {
      [ItemPropertyType.DamageThrow]: [12, 15],
      [ItemPropertyType.Damage1H]: [5, 10],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: null,
      [ItemPropertyType.MinimumDexterity]: 57,
    },
  },
  [ids.Hatchet]: {
    id: ids.Hatchet,
    name: 'Hatchet',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 31,
    size: [2, 1],
    imageId: ids.HandAxe,
    properties: {
      [ItemPropertyType.Damage1H]: [10, 21],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 25,
      [ItemPropertyType.MinimumDexterity]: 25,
      [ItemPropertyType.Durability]: 28,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.Cleaver]: {
    id: ids.Cleaver,
    name: 'Cleaver',
    tier: ItemTierType.Exceptional,
    clvl: 22,
    ilvl: 34,
    size: [3, 2],
    imageId: ids.Axe,
    properties: {
      [ItemPropertyType.Damage1H]: [10, 33],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 68,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 24,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.TwinAxe]: {
    id: ids.TwinAxe,
    name: 'Twin Axe',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 39,
    size: [3, 2],
    imageId: ids.DoubleAxe,
    properties: {
      [ItemPropertyType.Damage1H]: [13, 38],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 85,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 24,
      [ItemPropertyType.MaxSockets]: 5,
    },
  },
  [ids.Crowbill]: {
    id: ids.Crowbill,
    name: 'Crowbill',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 43,
    size: [3, 2],
    imageId: ids.MilitaryPick,
    properties: {
      [ItemPropertyType.Damage1H]: [14, 34],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: 94,
      [ItemPropertyType.MinimumDexterity]: 70,
      [ItemPropertyType.Durability]: 26,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.Naga]: {
    id: ids.Naga,
    name: 'Naga',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 48,
    size: [3, 2],
    imageId: ids.WarAxe,
    properties: {
      [ItemPropertyType.Damage1H]: [16, 45],
      [ItemPropertyType.MeleeRange]: 3,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 121,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 26,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.MilitaryAxe]: {
    id: ids.MilitaryAxe,
    name: 'Military Axe',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 34,
    size: [3, 2],
    imageId: ids.LargeAxe,
    properties: {
      [ItemPropertyType.Damage2H]: [14, 34],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: 73,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 30,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.BeardedAxe]: {
    id: ids.BeardedAxe,
    name: 'Bearded Axe',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 38,
    size: [3, 2],
    imageId: ids.BroadAxe,
    properties: {
      [ItemPropertyType.Damage2H]: [21, 49],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 92,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 35,
      [ItemPropertyType.MaxSockets]: 5,
    },
  },
  [ids.Tabar]: {
    id: ids.Tabar,
    name: 'Tabar',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 42,
    size: [3, 2],
    imageId: ids.BattleAxe,
    properties: {
      [ItemPropertyType.Damage2H]: [24, 77],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 101,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 40,
      [ItemPropertyType.MaxSockets]: 5,
    },
  },
  [ids.GothicAxe]: {
    id: ids.GothicAxe,
    name: 'Gothic Axe',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 46,
    size: [4, 2],
    imageId: ids.GreatAxe,
    properties: {
      [ItemPropertyType.Damage2H]: [18, 70],
      [ItemPropertyType.MeleeRange]: 3,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: 115,
      [ItemPropertyType.MinimumDexterity]: 79,
      [ItemPropertyType.Durability]: 50,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.AncientAxe]: {
    id: ids.AncientAxe,
    name: 'Ancient Axe',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 51,
    size: [3, 2],
    imageId: ids.GiantAxe,
    properties: {
      [ItemPropertyType.Damage2H]: [43, 85],
      [ItemPropertyType.MeleeRange]: 4,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 125,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 50,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.Francisca]: {
    id: ids.Francisca,
    name: 'Francisca',
    tier: ItemTierType.Exceptional,
    clvl: 22,
    ilvl: 34,
    size: [2, 1],
    imageId: ids.ThrowingAxe,
    properties: {
      [ItemPropertyType.DamageThrow]: [18, 33],
      [ItemPropertyType.Damage1H]: [11, 22],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 25,
      [ItemPropertyType.MinimumDexterity]: 80,
    },
  },
  [ids.Hurlbat]: {
    id: ids.Hurlbat,
    name: 'Balanced Axe',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 41,
    size: [3, 2],
    imageId: ids.BalancedAxe,
    properties: {
      [ItemPropertyType.DamageThrow]: [24, 34],
      [ItemPropertyType.Damage1H]: [13, 27],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: 25,
      [ItemPropertyType.MinimumDexterity]: 106,
    },
  },
  [ids.Tomahawk]: {
    id: ids.Tomahawk,
    name: 'Tomahawk',
    tier: ItemTierType.Elite,
    clvl: 40,
    ilvl: 54,
    size: [2, 1],
    imageId: ids.HandAxe,
    properties: {
      [ItemPropertyType.Damage1H]: [33, 58],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 125,
      [ItemPropertyType.MinimumDexterity]: 67,
      [ItemPropertyType.Durability]: 28,
      [ItemPropertyType.MaxSockets]: 2,
    },
  },
  [ids.SmallCrescent]: {
    id: ids.SmallCrescent,
    name: 'Small Crescent',
    tier: ItemTierType.Elite,
    clvl: 45,
    ilvl: 61,
    size: [3, 2],
    imageId: ids.Axe,
    properties: {
      [ItemPropertyType.Damage1H]: [38, 60],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 115,
      [ItemPropertyType.MinimumDexterity]: 83,
      [ItemPropertyType.Durability]: 24,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.EttinAxe]: {
    id: ids.EttinAxe,
    name: 'Ettin Axe',
    tier: ItemTierType.Elite,
    clvl: 52,
    ilvl: 70,
    size: [3, 2],
    imageId: ids.DoubleAxe,
    properties: {
      [ItemPropertyType.Damage1H]: [33, 66],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 145,
      [ItemPropertyType.MinimumDexterity]: 45,
      [ItemPropertyType.Durability]: 24,
      [ItemPropertyType.MaxSockets]: 5,
    },
  },
  [ids.WarSpike]: {
    id: ids.WarSpike,
    name: 'War Spike',
    tier: ItemTierType.Elite,
    clvl: 59,
    ilvl: 79,
    size: [3, 2],
    imageId: ids.MilitaryPick,
    properties: {
      [ItemPropertyType.Damage1H]: [30, 48],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: 133,
      [ItemPropertyType.MinimumDexterity]: 54,
      [ItemPropertyType.Durability]: 26,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.BerserkerAxe]: {
    id: ids.BerserkerAxe,
    name: 'Berserker Axe',
    tier: ItemTierType.Elite,
    clvl: 64,
    ilvl: 85,
    size: [3, 2],
    imageId: ids.WarAxe,
    properties: {
      [ItemPropertyType.Damage1H]: [24, 71],
      [ItemPropertyType.MeleeRange]: 3,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 138,
      [ItemPropertyType.MinimumDexterity]: 59,
      [ItemPropertyType.Durability]: 26,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.FeralAxe]: {
    id: ids.FeralAxe,
    name: 'Feral Axe',
    tier: ItemTierType.Elite,
    clvl: 42,
    ilvl: 57,
    size: [3, 2],
    imageId: ids.LargeAxe,
    properties: {
      [ItemPropertyType.Damage2H]: [25, 123],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: -15,
      [ItemPropertyType.MinimumStrength]: 196,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 30,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.SilverEdgedAxe]: {
    id: ids.SilverEdgedAxe,
    name: 'Silver-Edged Axe',
    tier: ItemTierType.Elite,
    clvl: 48,
    ilvl: 65,
    size: [3, 2],
    imageId: ids.BroadAxe,
    properties: {
      [ItemPropertyType.Damage2H]: [62, 110],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 166,
      [ItemPropertyType.MinimumDexterity]: 65,
      [ItemPropertyType.Durability]: 35,
      [ItemPropertyType.MaxSockets]: 5,
    },
  },
  [ids.Decapitator]: {
    id: ids.Decapitator,
    name: 'Decapitator',
    tier: ItemTierType.Elite,
    clvl: 54,
    ilvl: 73,
    size: [3, 2],
    imageId: ids.BattleAxe,
    properties: {
      [ItemPropertyType.Damage2H]: [49, 137],
      [ItemPropertyType.MeleeRange]: 2,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 189,
      [ItemPropertyType.MinimumDexterity]: 33,
      [ItemPropertyType.Durability]: 40,
      [ItemPropertyType.MaxSockets]: 5,
    },
  },
  [ids.ChampionAxe]: {
    id: ids.ChampionAxe,
    name: 'Champion Axe',
    tier: ItemTierType.Elite,
    clvl: 61,
    ilvl: 82,
    size: [4, 2],
    imageId: ids.GreatAxe,
    properties: {
      [ItemPropertyType.Damage2H]: [59, 94],
      [ItemPropertyType.MeleeRange]: 3,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: 167,
      [ItemPropertyType.MinimumDexterity]: 59,
      [ItemPropertyType.Durability]: 50,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.GloriusAxe]: {
    id: ids.GloriusAxe,
    name: 'Glorius Axe',
    tier: ItemTierType.Elite,
    clvl: 66,
    ilvl: 85,
    size: [3, 2],
    imageId: ids.GiantAxe,
    properties: {
      [ItemPropertyType.Damage2H]: [60, 124],
      [ItemPropertyType.MeleeRange]: 4,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 164,
      [ItemPropertyType.MinimumDexterity]: 55,
      [ItemPropertyType.Durability]: 50,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.FlyingAxe]: {
    id: ids.FlyingAxe,
    name: 'FlyingAxe',
    tier: ItemTierType.Elite,
    clvl: 42,
    ilvl: 56,
    size: [2, 1],
    imageId: ids.ThrowingAxe,
    properties: {
      [ItemPropertyType.DamageThrow]: [15, 66],
      [ItemPropertyType.Damage1H]: [17, 65],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: 10,
      [ItemPropertyType.MinimumStrength]: 88,
      [ItemPropertyType.MinimumDexterity]: 108,
    },
  },
  [ids.WingedAxe]: {
    id: ids.WingedAxe,
    name: 'Winged Axe',
    tier: ItemTierType.Elite,
    clvl: 60,
    ilvl: 80,
    size: [3, 2],
    imageId: ids.BalancedAxe,
    properties: {
      [ItemPropertyType.DamageThrow]: [7, 60],
      [ItemPropertyType.Damage1H]: [11, 56],
      [ItemPropertyType.MeleeRange]: 1,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: 96,
      [ItemPropertyType.MinimumDexterity]: 122,
    },
  },
};

export default mapItems({
  type: ItemType.Axe,
  mapDescription: (item) => [[mapItemName(item), ...mapItemProperties(item)]],
})(items);
