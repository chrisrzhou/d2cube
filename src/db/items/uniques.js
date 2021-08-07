import {
  BasePropertyType,
  ItemQualityType,
  ItemType,
  MagicPropertyType,
} from '../../enums/index.js';
import {normalizeItems} from '../utils/normalize-items.js';
import ids from '../ids/index.js';

export default normalizeItems({
  quality: ItemQualityType.Unique,
  type: ItemType.Unique,
})([
  {
    id: ids.BladeOfAliBaba,
    name: 'Blade of Ali Baba',
    baseId: ids.Tulwar,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 35,
      },
      magic: {
        [MagicPropertyType.EnhancedDamage]: [60, 120],
        [MagicPropertyType.AddDexterity]: [5, 15],
        [MagicPropertyType.AddMana]: 15,
        [MagicPropertyType.ExtraGoldByLevel]: 2.5,
        [MagicPropertyType.MagicFindByLevel]: 1,
        [MagicPropertyType.AddSockets]: 2,
      },
    },
  },
  {
    id: ids.BloodCrescent,
    name: 'Blood Crescent',
    baseId: ids.Scimitar,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 7,
      },
      magic: {
        [MagicPropertyType.IncreasedAttackSpeed]: 15,
        [MagicPropertyType.EnhancedDamage]: [60, 80],
        [MagicPropertyType.LifeStolenPerHit]: 15,
        [MagicPropertyType.OpenWounds]: 33,
        [MagicPropertyType.AddLife]: 15,
        [MagicPropertyType.AllResistances]: 15,
        [MagicPropertyType.LightRadius]: 4,
      },
    },
  },
  {
    id: ids.LidlessWall,
    name: 'Lidless Wall',
    size: [3, 2],
    baseId: ids.GrimShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 41,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.FasterCastRate]: 20,
        [MagicPropertyType.EnhancedDefense]: [80, 130],
        [MagicPropertyType.AddEnergy]: 10,
        [MagicPropertyType.IncreaseMaximumMana]: 10,
        [MagicPropertyType.ManaAfterKill]: [3, 5],
        [MagicPropertyType.LightRadius]: 1,
      },
    },
  },
  {
    id: ids.StoneOfJordan,
    name: 'Stone of Jordan',
    size: [1, 1],
    baseId: ids.Ring,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 29,
      },
      magic: {
        [MagicPropertyType.AllSkillLevels]: 1,
        [MagicPropertyType.LightningDamage]: {min: 1, max: 12},
        [MagicPropertyType.AddMana]: 20,
        [MagicPropertyType.IncreaseMaximumMana]: 25,
      },
    },
  },
  {
    id: ids.WallOfTheEyeless,
    name: 'Wall of the Eyeless',
    baseId: ids.BoneShield,
    properties: {
      base: {
        [BasePropertyType.RequiredLevel]: 35,
      },
      magic: {
        [MagicPropertyType.FasterCastRate]: 20,
        [MagicPropertyType.ManaStolenPerHit]: 3,
        [MagicPropertyType.EnhancedDefense]: [30, 40],
        [MagicPropertyType.AddDefense]: 10,
        [MagicPropertyType.PoisonResist]: 20,
        [MagicPropertyType.ManaAfterKill]: 5,
      },
    },
  },
]);
