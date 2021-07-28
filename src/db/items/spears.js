import {ItemPropertyType, ItemTierType, ItemType} from '../enums/index.js';
import ids from '../ids/index.js';
import {mapItemName} from '../utils/map-item-name.js';
import {mapItemOffenseProperties} from '../utils/map-item-offense-properties.js';
import {mapItems} from '../utils/map-items.js';

const items = {
  [ids.Spear]: {
    id: ids.Spear,
    name: 'Spear',
    tier: ItemTierType.Normal,
    ilvl: 5,
    properties: {
      [ItemPropertyType.Damage2H]: [3, 15],
      [ItemPropertyType.MeleeRange]: 4,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: null,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 30,
      [ItemPropertyType.MaxSockets]: 3,
    },
  },
  [ids.Trident]: {
    id: ids.Trident,
    name: 'Trident',
    tier: ItemTierType.Normal,
    ilvl: 9,
    properties: {
      [ItemPropertyType.Damage2H]: [9, 15],
      [ItemPropertyType.MeleeRange]: 4,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 38,
      [ItemPropertyType.MinimumDexterity]: 24,
      [ItemPropertyType.Durability]: 35,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.Brandistock]: {
    id: ids.Brandistock,
    name: 'Brandistock',
    tier: ItemTierType.Normal,
    ilvl: 16,
    properties: {
      [ItemPropertyType.Damage2H]: [7, 17],
      [ItemPropertyType.MeleeRange]: 5,
      [ItemPropertyType.AttackSpeed]: -20,
      [ItemPropertyType.MinimumStrength]: 40,
      [ItemPropertyType.MinimumDexterity]: 50,
      [ItemPropertyType.Durability]: 28,
      [ItemPropertyType.MaxSockets]: 5,
    },
  },
  [ids.Spetum]: {
    id: ids.Spetum,
    name: 'Spetum',
    tier: ItemTierType.Normal,
    ilvl: 20,
    properties: {
      [ItemPropertyType.Damage2H]: [15, 23],
      [ItemPropertyType.MeleeRange]: 5,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 54,
      [ItemPropertyType.MinimumDexterity]: 35,
      [ItemPropertyType.Durability]: 28,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.Pike]: {
    id: ids.Pike,
    name: 'Pike',
    tier: ItemTierType.Normal,
    ilvl: 24,
    properties: {
      [ItemPropertyType.Damage2H]: [14, 63],
      [ItemPropertyType.MeleeRange]: 5,
      [ItemPropertyType.AttackSpeed]: 20,
      [ItemPropertyType.MinimumStrength]: 60,
      [ItemPropertyType.MinimumDexterity]: 45,
      [ItemPropertyType.Durability]: 25,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.WarSpear]: {
    id: ids.WarSpear,
    name: 'War Spear',
    tier: ItemTierType.Exceptional,
    clvl: 21,
    ilvl: 33,
    imageId: ids.Spear,
    properties: {
      [ItemPropertyType.Damage2H]: [10, 37],
      [ItemPropertyType.MeleeRange]: 4,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: 25,
      [ItemPropertyType.MinimumDexterity]: 25,
      [ItemPropertyType.Durability]: 30,
      [ItemPropertyType.MaxSockets]: 3,
    },
  },
  [ids.Fuscina]: {
    id: ids.Fuscina,
    name: 'Fuscina',
    tier: ItemTierType.Exceptional,
    clvl: 24,
    ilvl: 36,
    imageId: ids.Trident,
    properties: {
      [ItemPropertyType.Damage2H]: [19, 37],
      [ItemPropertyType.MeleeRange]: 4,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 77,
      [ItemPropertyType.MinimumDexterity]: 25,
      [ItemPropertyType.Durability]: 35,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.WarFork]: {
    id: ids.WarFork,
    name: 'War Fork',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 41,
    imageId: ids.Brandistock,
    properties: {
      [ItemPropertyType.Damage2H]: [16, 40],
      [ItemPropertyType.MeleeRange]: 5,
      [ItemPropertyType.AttackSpeed]: -20,
      [ItemPropertyType.MinimumStrength]: 80,
      [ItemPropertyType.MinimumDexterity]: 95,
      [ItemPropertyType.Durability]: 28,
      [ItemPropertyType.MaxSockets]: 5,
    },
  },
  [ids.Yari]: {
    id: ids.Yari,
    name: 'Yari',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 44,
    imageId: ids.Spetum,
    properties: {
      [ItemPropertyType.Damage2H]: [29, 50],
      [ItemPropertyType.MeleeRange]: 5,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 101,
      [ItemPropertyType.MinimumDexterity]: null,
      [ItemPropertyType.Durability]: 28,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.Lance]: {
    id: ids.Lance,
    name: 'Lance',
    tier: ItemTierType.Exceptional,
    clvl: 25,
    ilvl: 47,
    imageId: ids.Pike,
    properties: {
      [ItemPropertyType.Damage2H]: [27, 114],
      [ItemPropertyType.MeleeRange]: 5,
      [ItemPropertyType.AttackSpeed]: 20,
      [ItemPropertyType.MinimumStrength]: 110,
      [ItemPropertyType.MinimumDexterity]: 88,
      [ItemPropertyType.Durability]: 25,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.HyperionSpear]: {
    id: ids.HyperionSpear,
    name: 'Hyperion Spear',
    tier: ItemTierType.Elite,
    clvl: 43,
    ilvl: 58,
    imageId: ids.Spear,
    properties: {
      [ItemPropertyType.Damage2H]: [35, 119],
      [ItemPropertyType.MeleeRange]: 4,
      [ItemPropertyType.AttackSpeed]: -10,
      [ItemPropertyType.MinimumStrength]: 155,
      [ItemPropertyType.MinimumDexterity]: 120,
      [ItemPropertyType.Durability]: 30,
      [ItemPropertyType.MaxSockets]: 3,
    },
  },
  [ids.StygianPike]: {
    id: ids.StygianPike,
    name: 'Stygian Pike',
    tier: ItemTierType.Elite,
    clvl: 49,
    ilvl: 66,
    imageId: ids.Trident,
    properties: {
      [ItemPropertyType.Damage2H]: [29, 114],
      [ItemPropertyType.MeleeRange]: 4,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 168,
      [ItemPropertyType.MinimumDexterity]: 97,
      [ItemPropertyType.Durability]: 35,
      [ItemPropertyType.MaxSockets]: 4,
    },
  },
  [ids.Mancatcher]: {
    id: ids.Mancatcher,
    name: 'Mancatcher',
    tier: ItemTierType.Elite,
    clvl: 55,
    ilvl: 74,
    imageId: ids.Brandistock,
    properties: {
      [ItemPropertyType.Damage2H]: [42, 92],
      [ItemPropertyType.MeleeRange]: 5,
      [ItemPropertyType.AttackSpeed]: -20,
      [ItemPropertyType.MinimumStrength]: 132,
      [ItemPropertyType.MinimumDexterity]: 134,
      [ItemPropertyType.Durability]: 28,
      [ItemPropertyType.MaxSockets]: 5,
    },
  },
  [ids.GhostSpear]: {
    id: ids.GhostSpear,
    name: 'Ghost Spear',
    tier: ItemTierType.Elite,
    clvl: 62,
    ilvl: 83,
    imageId: ids.Spetum,
    properties: {
      [ItemPropertyType.Damage2H]: [18, 155],
      [ItemPropertyType.MeleeRange]: 5,
      [ItemPropertyType.AttackSpeed]: 0,
      [ItemPropertyType.MinimumStrength]: 122,
      [ItemPropertyType.MinimumDexterity]: 163,
      [ItemPropertyType.Durability]: 28,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
  [ids.WarPike]: {
    id: ids.WarPike,
    name: 'War Pike',
    tier: ItemTierType.Elite,
    clvl: 66,
    ilvl: 85,
    imageId: ids.Pike,
    properties: {
      [ItemPropertyType.Damage2H]: [33, 1778],
      [ItemPropertyType.MeleeRange]: 5,
      [ItemPropertyType.AttackSpeed]: 20,
      [ItemPropertyType.MinimumStrength]: 165,
      [ItemPropertyType.MinimumDexterity]: 106,
      [ItemPropertyType.Durability]: 25,
      [ItemPropertyType.MaxSockets]: 6,
    },
  },
};

export default mapItems({
  type: ItemType.Spear,
  size: [4, 2],
  mapDescription: (item) => [
    [mapItemName(item), ...mapItemOffenseProperties(item)],
  ],
})(items);
