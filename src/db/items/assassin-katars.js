import {
  BasePropertyType,
  ItemTierType,
  ItemType,
  PlayerClassType,
  WeaponClassType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  playerClass: PlayerClassType.Assassin,
  class: WeaponClassType.Claw,
  size: [3, 1],
  type: ItemType.AssassinKatar,
})([
  {
    id: ids.Katar,
    name: 'Katar',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 4, max: 7},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 20,
        [BasePropertyType.RequiredDexterity]: 20,
        [BasePropertyType.Durability]: 48,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.WristBlade,
    name: 'Wrist Blade',
    tier: ItemTierType.Normal,
    imageId: ids.Katar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 5, max: 9},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 33,
        [BasePropertyType.RequiredDexterity]: 33,
        [BasePropertyType.Durability]: 52,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.HatchetHands,
    name: 'Hatchet Hands',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 2, max: 15},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 37,
        [BasePropertyType.RequiredDexterity]: 37,
        [BasePropertyType.Durability]: 56,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Cestus,
    name: 'Cestus',
    tier: ItemTierType.Normal,
    imageId: ids.HatchetHands,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 7, max: 15},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 42,
        [BasePropertyType.RequiredDexterity]: 42,
        [BasePropertyType.Durability]: 72,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Claws,
    name: 'Claws',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 8, max: 15},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 46,
        [BasePropertyType.RequiredDexterity]: 46,
        [BasePropertyType.Durability]: 64,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.BladeTalons,
    name: 'Blade Talons',
    tier: ItemTierType.Normal,
    imageId: ids.Claws,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 10, max: 14},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.RequiredStrength]: 50,
        [BasePropertyType.RequiredDexterity]: 50,
        [BasePropertyType.Durability]: 69,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.ScissorsKatar,
    name: 'Scissors Katar',
    tier: ItemTierType.Normal,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 9, max: 17},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 55,
        [BasePropertyType.RequiredDexterity]: 55,
        [BasePropertyType.Durability]: 68,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.Quhab,
    name: 'Quhab',
    tier: ItemTierType.Exceptional,
    baseId: ids.Katar,
    imageId: ids.Katar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 11, max: 24},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 57,
        [BasePropertyType.RequiredDexterity]: 57,
        [BasePropertyType.RequiredLevel]: 21,
        [BasePropertyType.Durability]: 48,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.WristSpike,
    name: 'Wrist Spike',
    tier: ItemTierType.Exceptional,
    baseId: ids.WristBlade,
    imageId: ids.Katar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 13, max: 27},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 66,
        [BasePropertyType.RequiredDexterity]: 66,
        [BasePropertyType.RequiredLevel]: 24,
        [BasePropertyType.Durability]: 56,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.Fascia,
    name: 'Fascia',
    tier: ItemTierType.Exceptional,
    baseId: ids.HatchetHands,
    imageId: ids.HatchetHands,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 8, max: 37},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 69,
        [BasePropertyType.RequiredDexterity]: 69,
        [BasePropertyType.RequiredLevel]: 27,
        [BasePropertyType.Durability]: 64,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.HandScythe,
    name: 'Hand Scythe',
    tier: ItemTierType.Exceptional,
    baseId: ids.Cestus,
    imageId: ids.HatchetHands,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 16, max: 37},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 73,
        [BasePropertyType.RequiredDexterity]: 73,
        [BasePropertyType.RequiredLevel]: 30,
        [BasePropertyType.Durability]: 72,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.GreaterClaws,
    name: 'Greater Claws',
    tier: ItemTierType.Exceptional,
    baseId: ids.Claws,
    imageId: ids.Claws,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 18, max: 37},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.RequiredStrength]: 76,
        [BasePropertyType.RequiredDexterity]: 76,
        [BasePropertyType.RequiredLevel]: 33,
        [BasePropertyType.Durability]: 52,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.GreaterTalons,
    name: 'Greater Talons',
    tier: ItemTierType.Exceptional,
    baseId: ids.BladeTalons,
    imageId: ids.Claws,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 21, max: 35},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: -30,
        [BasePropertyType.RequiredStrength]: 79,
        [BasePropertyType.RequiredDexterity]: 79,
        [BasePropertyType.RequiredLevel]: 37,
        [BasePropertyType.Durability]: 69,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.ScissorsQuhab,
    name: 'Scissors Quhab',
    tier: ItemTierType.Exceptional,
    baseId: ids.ScissorsKatar,
    imageId: ids.ScissorsKatar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 19, max: 40},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 82,
        [BasePropertyType.RequiredDexterity]: 82,
        [BasePropertyType.RequiredLevel]: 40,
        [BasePropertyType.Durability]: 68,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.Suwayyah,
    name: 'Suwayyah',
    tier: ItemTierType.Elite,
    baseId: ids.Katar,
    imageId: ids.Katar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 39, max: 52},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 99,
        [BasePropertyType.RequiredDexterity]: 99,
        [BasePropertyType.RequiredLevel]: 44,
        [BasePropertyType.Durability]: 48,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.WristSword,
    name: 'Wrist Sword',
    tier: ItemTierType.Elite,
    baseId: ids.WristBlade,
    imageId: ids.Katar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 34, max: 45},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 105,
        [BasePropertyType.RequiredDexterity]: 105,
        [BasePropertyType.RequiredLevel]: 46,
        [BasePropertyType.Durability]: 56,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.WarFist,
    name: 'War Fist',
    tier: ItemTierType.Elite,
    baseId: ids.HatchetHands,
    imageId: ids.HatchetHands,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 44, max: 53},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 10,
        [BasePropertyType.RequiredStrength]: 108,
        [BasePropertyType.RequiredDexterity]: 108,
        [BasePropertyType.RequiredLevel]: 51,
        [BasePropertyType.Durability]: 64,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.BattleCestus,
    name: 'Battle Cestus',
    tier: ItemTierType.Elite,
    baseId: ids.Cestus,
    imageId: ids.HatchetHands,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 36, max: 42},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: -10,
        [BasePropertyType.RequiredStrength]: 110,
        [BasePropertyType.RequiredDexterity]: 110,
        [BasePropertyType.RequiredLevel]: 54,
        [BasePropertyType.Durability]: 72,
        [BasePropertyType.MaxSockets]: 2,
      },
    },
  },
  {
    id: ids.FeralClaws,
    name: 'Feral Claws',
    tier: ItemTierType.Elite,
    baseId: ids.Claws,
    imageId: ids.Claws,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 22, max: 53},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: -20,
        [BasePropertyType.RequiredStrength]: 113,
        [BasePropertyType.RequiredDexterity]: 113,
        [BasePropertyType.RequiredLevel]: 58,
        [BasePropertyType.Durability]: 52,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.RunicTalons,
    name: 'Runic Talons',
    tier: ItemTierType.Elite,
    baseId: ids.BladeTalons,
    imageId: ids.Claws,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 24, max: 44},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: -30,
        [BasePropertyType.RequiredStrength]: 115,
        [BasePropertyType.RequiredDexterity]: 115,
        [BasePropertyType.RequiredLevel]: 60,
        [BasePropertyType.Durability]: 69,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
  {
    id: ids.ScissorsSuwayyah,
    name: 'Scissors Suwayyah',
    tier: ItemTierType.Elite,
    baseId: ids.ScissorsKatar,
    imageId: ids.ScissorsKatar,
    properties: {
      base: {
        [BasePropertyType.Damage1H]: {min: 40, max: 51},
        [BasePropertyType.MeleeRange]: 2,
        [BasePropertyType.AttackSpeed]: 0,
        [BasePropertyType.RequiredStrength]: 118,
        [BasePropertyType.RequiredDexterity]: 118,
        [BasePropertyType.RequiredLevel]: 64,
        [BasePropertyType.Durability]: 68,
        [BasePropertyType.MaxSockets]: 3,
      },
    },
  },
]);
