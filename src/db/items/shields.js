import {
  ArmorType,
  BasePropertyType,
  ItemTierType,
  ItemType,
} from '../../enums/index.js';
import ids from '../ids/index.js';
import {mapItemName} from '../utils/map-item-name.js';
import {mapItemProperties} from '../utils/map-item-properties.js';
import {mapItems} from '../utils/map-items.js';

const items = {
  [ids.Buckler]: {
    id: ids.Buckler,
    name: 'Buckler',
    size: [2, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Normal,
    qlvl: 1,
    properties: {
      [BasePropertyType.Defense]: [4, 6],
      [BasePropertyType.BlockChance]: 30,
      [BasePropertyType.MinimumStrength]: 12,
      [BasePropertyType.Durability]: 12,
      [BasePropertyType.MaxSockets]: 1,
    },
  },
  [ids.SmallShield]: {
    id: ids.SmallShield,
    name: 'Small Shield',
    size: [2, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Normal,
    qlvl: 5,
    properties: {
      [BasePropertyType.Defense]: [8, 10],
      [BasePropertyType.BlockChance]: 35,
      [BasePropertyType.MinimumStrength]: 22,
      [BasePropertyType.Durability]: 16,
      [BasePropertyType.MaxSockets]: 2,
    },
  },
  [ids.LargeShield]: {
    id: ids.LargeShield,
    name: 'Large Shield',
    size: [3, 2],
    armorType: ArmorType.Medium,
    tier: ItemTierType.Normal,
    qlvl: 11,
    properties: {
      [BasePropertyType.Defense]: [12, 14],
      [BasePropertyType.BlockChance]: 35,
      [BasePropertyType.MinimumStrength]: 34,
      [BasePropertyType.Durability]: 24,
      [BasePropertyType.MaxSockets]: 3,
    },
  },
  [ids.KiteShield]: {
    id: ids.KiteShield,
    name: 'Kite Shield',
    size: [3, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Normal,
    qlvl: 15,
    properties: {
      [BasePropertyType.Defense]: [16, 18],
      [BasePropertyType.BlockChance]: 38,
      [BasePropertyType.MinimumStrength]: 47,
      [BasePropertyType.Durability]: 30,
      [BasePropertyType.MaxSockets]: 3,
    },
  },
  [ids.SpikedShield]: {
    id: ids.SpikedShield,
    name: 'Spiked Shield',
    size: [3, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Normal,
    qlvl: 11,
    properties: {
      [BasePropertyType.Defense]: [15, 25],
      [BasePropertyType.BlockChance]: 40,
      [BasePropertyType.MinimumStrength]: 30,
      [BasePropertyType.Durability]: 40,
      [BasePropertyType.MaxSockets]: 2,
    },
  },
  [ids.BoneShield]: {
    id: ids.BoneShield,
    name: 'Bone Shield',
    size: [3, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Normal,
    qlvl: 19,
    properties: {
      [BasePropertyType.Defense]: [10, 30],
      [BasePropertyType.BlockChance]: 50,
      [BasePropertyType.MinimumStrength]: 25,
      [BasePropertyType.Durability]: 40,
      [BasePropertyType.MaxSockets]: 2,
    },
  },
  [ids.TowerShield]: {
    id: ids.TowerShield,
    name: 'Tower Shield',
    size: [4, 2],
    armorType: ArmorType.Heavy,
    tier: ItemTierType.Normal,
    qlvl: 22,
    properties: {
      [BasePropertyType.Defense]: [22, 25],
      [BasePropertyType.BlockChance]: 54,
      [BasePropertyType.MinimumStrength]: 75,
      [BasePropertyType.Durability]: 60,
      [BasePropertyType.MaxSockets]: 3,
    },
  },
  [ids.GothicShield]: {
    id: ids.GothicShield,
    name: 'Gothic Shield',
    size: [4, 2],
    armorType: ArmorType.Medium,
    tier: ItemTierType.Normal,
    qlvl: 30,
    properties: {
      [BasePropertyType.Defense]: [30, 35],
      [BasePropertyType.BlockChance]: 46,
      [BasePropertyType.MinimumStrength]: 60,
      [BasePropertyType.Durability]: 40,
      [BasePropertyType.MaxSockets]: 3,
    },
  },
  [ids.Defender]: {
    id: ids.Defender,
    name: 'Defender',
    size: [2, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 22,
    qlvl: 34,
    baseId: ids.Buckler,
    imageId: ids.Buckler,
    properties: {
      [BasePropertyType.Defense]: [41, 49],
      [BasePropertyType.BlockChance]: 40,
      [BasePropertyType.MinimumStrength]: 38,
      [BasePropertyType.Durability]: 68,
      [BasePropertyType.MaxSockets]: 1,
    },
  },
  [ids.RoundShield]: {
    id: ids.RoundShield,
    name: 'Round Shield',
    size: [2, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 37,
    baseId: ids.SmallShield,
    imageId: ids.SmallShield,
    properties: {
      [BasePropertyType.Defense]: [47, 55],
      [BasePropertyType.BlockChance]: 42,
      [BasePropertyType.MinimumStrength]: 53,
      [BasePropertyType.Durability]: 64,
      [BasePropertyType.MaxSockets]: 2,
    },
  },
  [ids.Scutum]: {
    id: ids.Scutum,
    name: 'Scutum',
    size: [3, 2],
    armorType: ArmorType.Medium,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 42,
    baseId: ids.LargeShield,
    imageId: ids.LargeShield,
    properties: {
      [BasePropertyType.Defense]: [53, 61],
      [BasePropertyType.BlockChance]: 44,
      [BasePropertyType.MinimumStrength]: 71,
      [BasePropertyType.Durability]: 64,
      [BasePropertyType.MaxSockets]: 3,
    },
  },
  [ids.DragonShield]: {
    id: ids.DragonShield,
    name: 'Dragon Shield',
    size: [3, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 45,
    baseId: ids.KiteShield,
    imageId: ids.KiteShield,
    properties: {
      [BasePropertyType.Defense]: [59, 67],
      [BasePropertyType.BlockChance]: 48,
      [BasePropertyType.MinimumStrength]: 91,
      [BasePropertyType.Durability]: 76,
      [BasePropertyType.MaxSockets]: 3,
    },
  },
  [ids.BarbedShield]: {
    id: ids.BarbedShield,
    name: 'Barbed Shield',
    size: [3, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 42,
    baseId: ids.SpikedShield,
    imageId: ids.SpikedShield,
    properties: {
      [BasePropertyType.Defense]: [68, 78],
      [BasePropertyType.BlockChance]: 47,
      [BasePropertyType.MinimumStrength]: 65,
      [BasePropertyType.Durability]: 55,
      [BasePropertyType.MaxSockets]: 2,
    },
  },
  [ids.GrimShield]: {
    id: ids.GrimShield,
    name: 'Grim Shield',
    size: [3, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 48,
    baseId: ids.BoneShield,
    imageId: ids.BoneShield,
    properties: {
      [BasePropertyType.Defense]: [50, 151],
      [BasePropertyType.BlockChance]: 54,
      [BasePropertyType.MinimumStrength]: 58,
      [BasePropertyType.Durability]: 70,
      [BasePropertyType.MaxSockets]: 2,
    },
  },
  [ids.Pavise]: {
    id: ids.Pavise,
    name: 'Pavise',
    size: [4, 2],
    armorType: ArmorType.Heavy,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 22,
    baseId: ids.TowerShield,
    imageId: ids.TowerShield,
    properties: {
      [BasePropertyType.Defense]: [68, 78],
      [BasePropertyType.BlockChance]: 50,
      [BasePropertyType.MinimumStrength]: 133,
      [BasePropertyType.Durability]: 72,
      [BasePropertyType.MaxSockets]: 3,
    },
  },
  [ids.AncientShield]: {
    id: ids.AncientShield,
    name: 'Ancient Shield',
    size: [4, 2],
    armorType: ArmorType.Medium,
    tier: ItemTierType.Exceptional,
    clvl: 25,
    qlvl: 56,
    baseId: ids.GothicShield,
    imageId: ids.GothicShield,
    properties: {
      [BasePropertyType.Defense]: [80, 93],
      [BasePropertyType.BlockChance]: 46,
      [BasePropertyType.MinimumStrength]: 110,
      [BasePropertyType.Durability]: 80,
      [BasePropertyType.MaxSockets]: 3,
    },
  },
  [ids.Heater]: {
    id: ids.Heater,
    name: 'Heater',
    size: [2, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Elite,
    clvl: 43,
    qlvl: 58,
    baseId: ids.Buckler,
    imageId: ids.Buckler,
    properties: {
      [BasePropertyType.Defense]: [95, 110],
      [BasePropertyType.BlockChance]: 52,
      [BasePropertyType.MinimumStrength]: 77,
      [BasePropertyType.Durability]: 88,
      [BasePropertyType.MaxSockets]: 2,
    },
  },
  [ids.Luna]: {
    id: ids.Luna,
    name: 'Luna',
    size: [2, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Elite,
    clvl: 45,
    qlvl: 61,
    baseId: ids.SmallShield,
    imageId: ids.SmallShield,
    properties: {
      [BasePropertyType.Defense]: [108, 123],
      [BasePropertyType.BlockChance]: 50,
      [BasePropertyType.MinimumStrength]: 100,
      [BasePropertyType.Durability]: 84,
      [BasePropertyType.MaxSockets]: 2,
    },
  },
  [ids.Hyperion]: {
    id: ids.Hyperion,
    name: 'Hyperion',
    size: [3, 2],
    armorType: ArmorType.Medium,
    tier: ItemTierType.Elite,
    clvl: 48,
    qlvl: 64,
    baseId: ids.LargeShield,
    imageId: ids.LargeShield,
    properties: {
      [BasePropertyType.Defense]: [119, 135],
      [BasePropertyType.BlockChance]: 54,
      [BasePropertyType.MinimumStrength]: 127,
      [BasePropertyType.Durability]: 82,
      [BasePropertyType.MaxSockets]: 3,
    },
  },
  [ids.Monarch]: {
    id: ids.Monarch,
    name: 'Monarch',
    size: [3, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Elite,
    clvl: 54,
    qlvl: 72,
    baseId: ids.KiteShield,
    imageId: ids.KiteShield,
    properties: {
      [BasePropertyType.Defense]: [133, 148],
      [BasePropertyType.BlockChance]: 52,
      [BasePropertyType.MinimumStrength]: 156,
      [BasePropertyType.Durability]: 86,
      [BasePropertyType.MaxSockets]: 4,
    },
  },
  [ids.BladeBarrier]: {
    id: ids.BladeBarrier,
    name: 'Blade Barrier',
    size: [3, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Elite,
    clvl: 51,
    qlvl: 68,
    baseId: ids.SpikedShield,
    imageId: ids.SpikedShield,
    properties: {
      [BasePropertyType.Defense]: [147, 163],
      [BasePropertyType.BlockChance]: 50,
      [BasePropertyType.MinimumStrength]: 118,
      [BasePropertyType.Durability]: 83,
      [BasePropertyType.MaxSockets]: 3,
    },
  },
  [ids.TrollNest]: {
    id: ids.TrollNest,
    name: 'Troll Nest',
    size: [3, 2],
    armorType: ArmorType.Light,
    tier: ItemTierType.Elite,
    clvl: 57,
    qlvl: 76,
    baseId: ids.BoneShield,
    imageId: ids.BoneShield,
    properties: {
      [BasePropertyType.Defense]: [158, 173],
      [BasePropertyType.BlockChance]: 50,
      [BasePropertyType.MinimumStrength]: 106,
      [BasePropertyType.Durability]: 74,
      [BasePropertyType.MaxSockets]: 3,
    },
  },
  [ids.Aegis]: {
    id: ids.Aegis,
    name: 'Aegis',
    size: [4, 2],
    armorType: ArmorType.Heavy,
    tier: ItemTierType.Elite,
    clvl: 59,
    qlvl: 79,
    baseId: ids.TowerShield,
    imageId: ids.TowerShield,
    properties: {
      [BasePropertyType.Defense]: [145, 161],
      [BasePropertyType.BlockChance]: 54,
      [BasePropertyType.MinimumStrength]: 219,
      [BasePropertyType.Durability]: 92,
      [BasePropertyType.MaxSockets]: 4,
    },
  },
  [ids.Ward]: {
    id: ids.Ward,
    name: 'Ward',
    size: [4, 2],
    armorType: ArmorType.Medium,
    tier: ItemTierType.Elite,
    clvl: 63,
    qlvl: 84,
    baseId: ids.GothicShield,
    imageId: ids.GothicShield,
    properties: {
      [BasePropertyType.Defense]: [153, 170],
      [BasePropertyType.BlockChance]: 54,
      [BasePropertyType.MinimumStrength]: 185,
      [BasePropertyType.Durability]: 100,
      [BasePropertyType.MaxSockets]: 4,
    },
  },
};

export default mapItems({
  type: ItemType.Shield,
  mapDescription: (item) => [[mapItemName(item), ...mapItemProperties(item)]],
})(items);
