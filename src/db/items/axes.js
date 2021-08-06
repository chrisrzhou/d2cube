import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  class: WeaponClassType.Axe,
  type: ItemType.Axe,
})([
  {
    id: ids.HandAxe,
    name: 'Hand Axe',
    tier: ItemTierType.Normal,
    qlvl: 3,
    size: [3, 1],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [3, 6],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [0],
        [BasePropertyType.Durability]: [28],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.Axe,
    name: 'Axe',
    tier: ItemTierType.Normal,
    qlvl: 7,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [4, 11],
        [BasePropertyType.MeleeRange]: [2],
        [BasePropertyType.AttackSpeed]: [10],
        [BasePropertyType.RequiredStrength]: [32],
        [BasePropertyType.Durability]: [24],
        [BasePropertyType.MaxSockets]: [4],
      },
    },
  },
  {
    id: ids.DoubleAxe,
    name: 'Double Axe',
    tier: ItemTierType.Normal,
    qlvl: 13,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [5, 13],
        [BasePropertyType.MeleeRange]: [2],
        [BasePropertyType.AttackSpeed]: [10],
        [BasePropertyType.RequiredStrength]: [43],
        [BasePropertyType.Durability]: [24],
        [BasePropertyType.MaxSockets]: [5],
      },
    },
  },
  {
    id: ids.MilitaryPick,
    name: 'Military Pick',
    tier: ItemTierType.Normal,
    qlvl: 19,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [7, 11],
        [BasePropertyType.MeleeRange]: [2],
        [BasePropertyType.AttackSpeed]: [-10],
        [BasePropertyType.RequiredStrength]: [49],
        [BasePropertyType.RequiredDexterity]: [33],
        [BasePropertyType.Durability]: [26],
        [BasePropertyType.MaxSockets]: [6],
      },
    },
  },
  {
    id: ids.WarAxe,
    name: 'War Axe',
    tier: ItemTierType.Normal,
    qlvl: 25,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [10, 18],
        [BasePropertyType.MeleeRange]: [3],
        [BasePropertyType.AttackSpeed]: [0],
        [BasePropertyType.RequiredStrength]: [67],
        [BasePropertyType.Durability]: [26],
        [BasePropertyType.MaxSockets]: [6],
      },
    },
  },
  {
    id: ids.LargeAxe,
    name: 'Large Axe',
    tier: ItemTierType.Normal,
    qlvl: 6,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: [6, 13],
        [BasePropertyType.MeleeRange]: [2],
        [BasePropertyType.AttackSpeed]: [-10],
        [BasePropertyType.RequiredStrength]: [35],
        [BasePropertyType.Durability]: [30],
        [BasePropertyType.MaxSockets]: [4],
      },
    },
  },
  {
    id: ids.BroadAxe,
    name: 'Broad Axe',
    tier: ItemTierType.Normal,
    qlvl: 12,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: [10, 18],
        [BasePropertyType.MeleeRange]: [2],
        [BasePropertyType.AttackSpeed]: [0],
        [BasePropertyType.RequiredStrength]: [48],
        [BasePropertyType.Durability]: [35],
        [BasePropertyType.MaxSockets]: [5],
      },
    },
  },
  {
    id: ids.BattleAxe,
    name: 'Battle Axe',
    tier: ItemTierType.Normal,
    qlvl: 17,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: [12, 32],
        [BasePropertyType.MeleeRange]: [2],
        [BasePropertyType.AttackSpeed]: [10],
        [BasePropertyType.RequiredStrength]: [54],
        [BasePropertyType.Durability]: [40],
        [BasePropertyType.MaxSockets]: [5],
      },
    },
  },
  {
    id: ids.GreatAxe,
    name: 'Great Axe',
    tier: ItemTierType.Normal,
    qlvl: 23,
    size: [4, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: [9, 30],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [-10],
        [BasePropertyType.RequiredStrength]: [63],
        [BasePropertyType.RequiredDexterity]: [39],
        [BasePropertyType.Durability]: [50],
        [BasePropertyType.MaxSockets]: [6],
      },
    },
  },
  {
    id: ids.GiantAxe,
    name: 'Giant Axe',
    tier: ItemTierType.Normal,
    qlvl: 27,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.Damage2H]: [22, 45],
        [BasePropertyType.MeleeRange]: [4],
        [BasePropertyType.AttackSpeed]: [10],
        [BasePropertyType.RequiredStrength]: [70],
        [BasePropertyType.Durability]: [50],
        [BasePropertyType.MaxSockets]: [6],
      },
    },
  },
  {
    id: ids.ThrowingAxe,
    name: 'Throwing Axe',
    tier: ItemTierType.Normal,
    qlvl: 7,
    size: [2, 1],
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: [8, 12],
        [BasePropertyType.Damage1H]: [4, 7],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [10],
        [BasePropertyType.RequiredDexterity]: [40],
      },
    },
  },
  {
    id: ids.BalancedAxe,
    name: 'Balanced Axe',
    tier: ItemTierType.Normal,
    qlvl: 16,
    size: [3, 2],
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: [12, 15],
        [BasePropertyType.Damage1H]: [5, 10],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [-10],
        [BasePropertyType.RequiredDexterity]: [57],
      },
    },
  },
  {
    id: ids.Hatchet,
    name: 'Hatchet',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 31,
    size: [2, 1],
    baseId: ids.HandAxe,
    imageId: ids.HandAxe,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [10, 21],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [0],
        [BasePropertyType.RequiredStrength]: [25],
        [BasePropertyType.RequiredDexterity]: [25],
        [BasePropertyType.Durability]: [28],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.Cleaver,
    name: 'Cleaver',
    tier: ItemTierType.Exceptional,
    clvl: 22,
    qlvl: 34,
    size: [3, 2],
    baseId: ids.Axe,
    imageId: ids.Axe,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [10, 33],
        [BasePropertyType.MeleeRange]: [2],
        [BasePropertyType.AttackSpeed]: [10],
        [BasePropertyType.RequiredStrength]: [68],
        [BasePropertyType.Durability]: [24],
        [BasePropertyType.MaxSockets]: [4],
      },
    },
  },
  {
    id: ids.TwinAxe,
    name: 'Twin Axe',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 39,
    size: [3, 2],
    baseId: ids.DoubleAxe,
    imageId: ids.DoubleAxe,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [13, 38],
        [BasePropertyType.MeleeRange]: [2],
        [BasePropertyType.AttackSpeed]: [10],
        [BasePropertyType.RequiredStrength]: [85],
        [BasePropertyType.Durability]: [24],
        [BasePropertyType.MaxSockets]: [5],
      },
    },
  },
  {
    id: ids.Crowbill,
    name: 'Crowbill',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 43,
    size: [3, 2],
    baseId: ids.MilitaryPick,
    imageId: ids.MilitaryPick,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [14, 34],
        [BasePropertyType.MeleeRange]: [2],
        [BasePropertyType.AttackSpeed]: [-10],
        [BasePropertyType.RequiredStrength]: [94],
        [BasePropertyType.RequiredDexterity]: [70],
        [BasePropertyType.Durability]: [26],
        [BasePropertyType.MaxSockets]: [6],
      },
    },
  },
  {
    id: ids.Naga,
    name: 'Naga',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 48,
    size: [3, 2],
    baseId: ids.WarAxe,
    imageId: ids.WarAxe,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [16, 45],
        [BasePropertyType.MeleeRange]: [3],
        [BasePropertyType.AttackSpeed]: [0],
        [BasePropertyType.RequiredStrength]: [121],
        [BasePropertyType.Durability]: [26],
        [BasePropertyType.MaxSockets]: [6],
      },
    },
  },
  {
    id: ids.MilitaryAxe,
    name: 'Military Axe',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 34,
    size: [3, 2],
    baseId: ids.LargeAxe,
    imageId: ids.LargeAxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: [14, 34],
        [BasePropertyType.MeleeRange]: [2],
        [BasePropertyType.AttackSpeed]: [-10],
        [BasePropertyType.RequiredStrength]: [73],
        [BasePropertyType.Durability]: [30],
        [BasePropertyType.MaxSockets]: [4],
      },
    },
  },
  {
    id: ids.BeardedAxe,
    name: 'Bearded Axe',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 38,
    size: [3, 2],
    baseId: ids.BroadAxe,
    imageId: ids.BroadAxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: [21, 49],
        [BasePropertyType.MeleeRange]: [2],
        [BasePropertyType.AttackSpeed]: [0],
        [BasePropertyType.RequiredStrength]: [92],
        [BasePropertyType.Durability]: [35],
        [BasePropertyType.MaxSockets]: [5],
      },
    },
  },
  {
    id: ids.Tabar,
    name: 'Tabar',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 42,
    size: [3, 2],
    baseId: ids.BattleAxe,
    imageId: ids.BattleAxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: [24, 77],
        [BasePropertyType.MeleeRange]: [2],
        [BasePropertyType.AttackSpeed]: [10],
        [BasePropertyType.RequiredStrength]: [101],
        [BasePropertyType.Durability]: [40],
        [BasePropertyType.MaxSockets]: [5],
      },
    },
  },
  {
    id: ids.GothicAxe,
    name: 'Gothic Axe',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 46,
    size: [4, 2],
    baseId: ids.GreatAxe,
    imageId: ids.GreatAxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: [18, 70],
        [BasePropertyType.MeleeRange]: [3],
        [BasePropertyType.AttackSpeed]: [-10],
        [BasePropertyType.RequiredStrength]: [115],
        [BasePropertyType.RequiredDexterity]: [79],
        [BasePropertyType.Durability]: [50],
        [BasePropertyType.MaxSockets]: [6],
      },
    },
  },
  {
    id: ids.AncientAxe,
    name: 'Ancient Axe',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 51,
    size: [3, 2],
    baseId: ids.GiantAxe,
    imageId: ids.GiantAxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: [43, 85],
        [BasePropertyType.MeleeRange]: [4],
        [BasePropertyType.AttackSpeed]: [10],
        [BasePropertyType.RequiredStrength]: [125],
        [BasePropertyType.Durability]: [50],
        [BasePropertyType.MaxSockets]: [6],
      },
    },
  },
  {
    id: ids.Francisca,
    name: 'Francisca',
    tier: ItemTierType.Exceptional,
    clvl: 22,
    qlvl: 34,
    size: [2, 1],
    baseId: ids.ThrowingAxe,
    imageId: ids.ThrowingAxe,
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: [18, 33],
        [BasePropertyType.Damage1H]: [11, 22],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [10],
        [BasePropertyType.RequiredStrength]: [25],
        [BasePropertyType.RequiredDexterity]: [80],
      },
    },
  },
  {
    id: ids.Hurlbat,
    name: 'Balanced Axe',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 41,
    size: [3, 2],
    baseId: ids.BalancedAxe,
    imageId: ids.BalancedAxe,
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: [24, 34],
        [BasePropertyType.Damage1H]: [13, 27],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [-10],
        [BasePropertyType.RequiredStrength]: [25],
        [BasePropertyType.RequiredDexterity]: [106],
      },
    },
  },
  {
    id: ids.Tomahawk,
    name: 'Tomahawk',
    tier: ItemTierType.Elite,
    clvl: 40,
    qlvl: 54,
    size: [2, 1],
    baseId: ids.HandAxe,
    imageId: ids.HandAxe,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [33, 58],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [0],
        [BasePropertyType.RequiredStrength]: [125],
        [BasePropertyType.RequiredDexterity]: [67],
        [BasePropertyType.Durability]: [28],
        [BasePropertyType.MaxSockets]: [2],
      },
    },
  },
  {
    id: ids.SmallCrescent,
    name: 'Small Crescent',
    tier: ItemTierType.Elite,
    clvl: 45,
    qlvl: 61,
    size: [3, 2],
    baseId: ids.Axe,
    imageId: ids.Axe,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [38, 60],
        [BasePropertyType.MeleeRange]: [2],
        [BasePropertyType.AttackSpeed]: [10],
        [BasePropertyType.RequiredStrength]: [115],
        [BasePropertyType.RequiredDexterity]: [83],
        [BasePropertyType.Durability]: [24],
        [BasePropertyType.MaxSockets]: [4],
      },
    },
  },
  {
    id: ids.EttinAxe,
    name: 'Ettin Axe',
    tier: ItemTierType.Elite,
    clvl: 52,
    qlvl: 70,
    size: [3, 2],
    baseId: ids.DoubleAxe,
    imageId: ids.DoubleAxe,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [33, 66],
        [BasePropertyType.MeleeRange]: [2],
        [BasePropertyType.AttackSpeed]: [10],
        [BasePropertyType.RequiredStrength]: [145],
        [BasePropertyType.RequiredDexterity]: [45],
        [BasePropertyType.Durability]: [24],
        [BasePropertyType.MaxSockets]: [5],
      },
    },
  },
  {
    id: ids.WarSpike,
    name: 'War Spike',
    tier: ItemTierType.Elite,
    clvl: 59,
    qlvl: 79,
    size: [3, 2],
    baseId: ids.MilitaryPick,
    imageId: ids.MilitaryPick,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [30, 48],
        [BasePropertyType.MeleeRange]: [2],
        [BasePropertyType.AttackSpeed]: [-10],
        [BasePropertyType.RequiredStrength]: [133],
        [BasePropertyType.RequiredDexterity]: [54],
        [BasePropertyType.Durability]: [26],
        [BasePropertyType.MaxSockets]: [6],
      },
    },
  },
  {
    id: ids.BerserkerAxe,
    name: 'Berserker Axe',
    tier: ItemTierType.Elite,
    clvl: 64,
    qlvl: 85,
    size: [3, 2],
    baseId: ids.WarAxe,
    imageId: ids.WarAxe,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: [24, 71],
        [BasePropertyType.MeleeRange]: [3],
        [BasePropertyType.AttackSpeed]: [0],
        [BasePropertyType.RequiredStrength]: [138],
        [BasePropertyType.RequiredDexterity]: [59],
        [BasePropertyType.Durability]: [26],
        [BasePropertyType.MaxSockets]: [6],
      },
    },
  },
  {
    id: ids.FeralAxe,
    name: 'Feral Axe',
    tier: ItemTierType.Elite,
    clvl: 42,
    qlvl: 57,
    size: [3, 2],
    baseId: ids.LargeAxe,
    imageId: ids.LargeAxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: [25, 123],
        [BasePropertyType.MeleeRange]: [2],
        [BasePropertyType.AttackSpeed]: [-15],
        [BasePropertyType.RequiredStrength]: [196],
        [BasePropertyType.Durability]: [30],
        [BasePropertyType.MaxSockets]: [4],
      },
    },
  },
  {
    id: ids.SilverEdgedAxe,
    name: 'Silver-Edged Axe',
    tier: ItemTierType.Elite,
    clvl: 48,
    qlvl: 65,
    size: [3, 2],
    baseId: ids.BroadAxe,
    imageId: ids.BroadAxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: [62, 110],
        [BasePropertyType.MeleeRange]: [2],
        [BasePropertyType.AttackSpeed]: [0],
        [BasePropertyType.RequiredStrength]: [166],
        [BasePropertyType.RequiredDexterity]: [65],
        [BasePropertyType.Durability]: [35],
        [BasePropertyType.MaxSockets]: [5],
      },
    },
  },
  {
    id: ids.Decapitator,
    name: 'Decapitator',
    tier: ItemTierType.Elite,
    clvl: 54,
    qlvl: 73,
    size: [3, 2],
    baseId: ids.BattleAxe,
    imageId: ids.BattleAxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: [49, 137],
        [BasePropertyType.MeleeRange]: [2],
        [BasePropertyType.AttackSpeed]: [10],
        [BasePropertyType.RequiredStrength]: [189],
        [BasePropertyType.RequiredDexterity]: [33],
        [BasePropertyType.Durability]: [40],
        [BasePropertyType.MaxSockets]: [5],
      },
    },
  },
  {
    id: ids.ChampionAxe,
    name: 'Champion Axe',
    tier: ItemTierType.Elite,
    clvl: 61,
    qlvl: 82,
    size: [4, 2],
    baseId: ids.GreatAxe,
    imageId: ids.GreatAxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: [59, 94],
        [BasePropertyType.MeleeRange]: [3],
        [BasePropertyType.AttackSpeed]: [-10],
        [BasePropertyType.RequiredStrength]: [167],
        [BasePropertyType.RequiredDexterity]: [59],
        [BasePropertyType.Durability]: [50],
        [BasePropertyType.MaxSockets]: [6],
      },
    },
  },
  {
    id: ids.GloriusAxe,
    name: 'Glorius Axe',
    tier: ItemTierType.Elite,
    clvl: 66,
    qlvl: 85,
    size: [3, 2],
    baseId: ids.GiantAxe,
    imageId: ids.GiantAxe,
    properties: {
      base: {
        [BasePropertyType.Damage2H]: [60, 124],
        [BasePropertyType.MeleeRange]: [4],
        [BasePropertyType.AttackSpeed]: [10],
        [BasePropertyType.RequiredStrength]: [164],
        [BasePropertyType.RequiredDexterity]: [55],
        [BasePropertyType.Durability]: [50],
        [BasePropertyType.MaxSockets]: [6],
      },
    },
  },
  {
    id: ids.FlyingAxe,
    name: 'FlyingAxe',
    tier: ItemTierType.Elite,
    clvl: 42,
    qlvl: 56,
    size: [2, 1],
    baseId: ids.ThrowingAxe,
    imageId: ids.ThrowingAxe,
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: [15, 66],
        [BasePropertyType.Damage1H]: [17, 65],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [10],
        [BasePropertyType.RequiredStrength]: [88],
        [BasePropertyType.RequiredDexterity]: [108],
      },
    },
  },
  {
    id: ids.WingedAxe,
    name: 'Winged Axe',
    tier: ItemTierType.Elite,
    clvl: 60,
    qlvl: 80,
    size: [3, 2],
    baseId: ids.BalancedAxe,
    imageId: ids.BalancedAxe,
    properties: {
      base: {
        [BasePropertyType.DamageThrow]: [7, 60],
        [BasePropertyType.Damage1H]: [11, 56],
        [BasePropertyType.MeleeRange]: [1],
        [BasePropertyType.AttackSpeed]: [-10],
        [BasePropertyType.RequiredStrength]: [96],
        [BasePropertyType.RequiredDexterity]: [122],
      },
    },
  },
]);
