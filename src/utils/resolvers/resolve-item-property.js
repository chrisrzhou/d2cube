import {isPlainObject, k} from 'uinix-fp';

import {BasePropertyType, MagicPropertyType} from '../../enums/index.js';
import {floor} from '../fp.js';

export const resolveItemProperty =
  (item) =>
  ({property, values}) => {
    const resolver = resolvers[property] || k(null);
    // @ts-ignore fix
    return resolver(values, item);
  };

const format = (resolver) => (values, item) =>
  resolver(formatValues(values), item);

const formatValues = (values) => {
  let formattedValues = values;
  if (Array.isArray(values)) {
    const [first, second] = values.map(floor);
    formattedValues = first === second ? first : `[${first}-${second}]`;
  } else if (isPlainObject(values)) {
    formattedValues = Object.entries(values).reduce((acc, [key, value]) => {
      acc[key] = formatValues(value);
      return acc;
    }, {});
  } else {
    formattedValues = Number.isFinite(values) ? floor(values) : values;
  }

  return formattedValues;
};

const lvl = (resolver, unit) => (x) =>
  `${resolver([x, x * 99])} (+${x}${unit} Based on Character Level)`;

// TODO: confirm logic with https://forums.d2jsp.org/topic.php?t=5458178
const getAttackSpeedDescription = (x) => {
  let description;
  if (x >= 20) {
    description = 'Very Slow';
  } else if (x >= 10) {
    description = 'Slow';
  } else if (x >= 0) {
    description = 'Normal';
  } else if (x >= -10) {
    description = 'Fast';
  } else {
    description = 'Very Fast';
  }

  return description;
};

const resolvers = {
  [BasePropertyType.BaseDefense]: (x) => ['Defense: ', x],
  [BasePropertyType.AttackSpeed]: (x, item) => [
    `${item.class} Class - `,
    `${getAttackSpeedDescription(x)} Attack Speed`,
  ],
  [BasePropertyType.BlockChance]: (x) => [`Chance to Block: ${x}%`],
  [BasePropertyType.Damage1H]: ({x, y}) => [
    'One-hand Damage: ',
    `${x} to ${y}`,
  ],
  [BasePropertyType.Damage2H]: ({x, y}) => [
    'Two-hand Damage: ',
    `${x} to ${y}`,
  ],
  [BasePropertyType.DamageThrow]: ({x, y}) => [
    'Throw Damage: ',
    `${x} to ${y}`,
  ],
  [BasePropertyType.Durability]: (x) =>
    x === Number.POSITIVE_INFINITY ? null : ['Durability: ', `${x} of ${x}`],
  [BasePropertyType.RequiredDexterity]: (x) => ['Required Dexterity: ', x],
  [BasePropertyType.RequiredLevel]: (x) => ['Required Level: ', x],
  [BasePropertyType.RequiredStrength]: (x) => ['Required Strength: ', x],
  [MagicPropertyType.Socketed]: (x) => `Socketed (${x})`,
  [MagicPropertyType.AllSkillLevels]: (x) => `+${x} to All Skills`,
  [MagicPropertyType.AllResistances]: (x) => `All Resistances +${x}`,
  [MagicPropertyType.AttackRating]: (x) => `+${x} to Attack Rating`,
  [MagicPropertyType.AttackRatingAgainstDemons]: (x) =>
    `+${x} to Attack Rating Against Demons`,
  [MagicPropertyType.AttackRatingAgainstUndead]: (x) =>
    `+${x} to Attack Rating Against Undead`,
  [MagicPropertyType.AttackerTakesDamage]: (x) =>
    `Attacker Takes Damage of ${x}`,
  [MagicPropertyType.BarbarianSkillLevels]: (x) =>
    `+${x} to Barbarian Skill Levels`,
  [MagicPropertyType.BarbarianCombatSkills]: (x) =>
    `+${x} to Combat Skills (Barbarian Only)`,
  [MagicPropertyType.BarbarianMasteries]: (x) =>
    `+${x} to Masteries (Barbarian Only)`,
  [MagicPropertyType.BarbarianWarcries]: (x) =>
    `+${x} to Warcries (Barbarian Only)`,
  [MagicPropertyType.BonusToAttackRating]: (x) =>
    `+${x}% Bonus to Attack Rating`,
  [MagicPropertyType.CannotBeFrozen]: () => 'Cannot be Frozen',
  [MagicPropertyType.ChanceToCastChargedBoltWhenStruck]: ({x, y}) =>
    `${y}% Chance to cast level ${x} Charged Bolt when struck`,
  [MagicPropertyType.ChanceToCastEnchantWhenStruck]: ({x, y}) =>
    `${y}% Chance to cast level ${x} Enchant when struck`,
  [MagicPropertyType.ColdDamage]: ({x, y}) => `Adds ${x}-${y} Cold Damage`,
  [MagicPropertyType.ColdResist]: (x) => `Cold Resist +${x}%`,
  [MagicPropertyType.CrushingBlow]: (x) => `${x}% Chance of Crushing Blow`,
  [MagicPropertyType.Damage]: ({x, y}) => `Adds ${x}-${y} Damage`,
  [MagicPropertyType.DamageReduced]: (x) => `Damage Reduced by ${x}`,
  [MagicPropertyType.DamageReducedPercentage]: (x) => `Damage Reduced by ${x}%`,
  [MagicPropertyType.DamageTakenGoesToMana]: (x) =>
    `${x}% Damage Taken Goes to Mana`,
  [MagicPropertyType.DamageToDemons]: (x) => `+${x}% Damage to Demons`,
  [MagicPropertyType.DamageToUndead]: (x) => `+${x}% Damage to Undead`,
  [MagicPropertyType.DeadlyStrike]: (x) => `${x}% Deadly Strike`,
  [MagicPropertyType.DruidSkillLevels]: (x) => `+${x} to Druid Skill Levels`,
  [MagicPropertyType.DruidElementalSkills]: (x) =>
    `+${x} to Elemental Skills (Druid Only)`,
  [MagicPropertyType.DruidShapeShiftingSkills]: (x) =>
    `+${x} to Shape Shifting Skills (Druid Only)`,
  [MagicPropertyType.Defense]: (x) => `+${x} Defense`,
  [MagicPropertyType.DefenseVsMissle]: (x) => `+${x} Defense Vs. Missle`,
  [MagicPropertyType.Dexterity]: (x) => `+${x} to Dexterity`,
  [MagicPropertyType.Energy]: (x) => `+${x} to Energy`,
  [MagicPropertyType.EnhancedDamage]: (x) => `${x}% Enhanced Damage`,
  [MagicPropertyType.EnhancedDefense]: (x) => `${x}% Enhanced Defense`,
  [MagicPropertyType.ExtraGold]: (x) => `${x}% Extra Gold From Monsters`,
  [MagicPropertyType.FasterBlockRate]: (x) => `${x}% Faster Block Rate`,
  [MagicPropertyType.FasterCastRate]: (x) => `${x}% Faster Cast Rate`,
  [MagicPropertyType.FasterRunWalk]: (x) => `${x}% Faster Run/Walk`,
  [MagicPropertyType.FasterHitRecovery]: (x) => `${x}% Faster Hit Recovery`,
  [MagicPropertyType.FireDamage]: ({x, y}) => `Adds ${x}-${y} Fire Damage`,
  [MagicPropertyType.FireResist]: (x) => `Fire Resist +${x}%`,
  [MagicPropertyType.FreezesTarget]: (x) => `Freezes Target +${x}`,
  [MagicPropertyType.HalfFreezeDuration]: () => 'Half Freeze Duration',
  [MagicPropertyType.HitCausesMonsterToFlee]: (x) =>
    `Hit Causes Monster to Flee ${x}%`,
  [MagicPropertyType.HitBlindsTarget]: () => 'Hit Blinds Target',
  [MagicPropertyType.Indestructible]: () => 'Indestructible',
  [MagicPropertyType.IgnoreTargetDefense]: () => "Ignore Target's Defense",
  [MagicPropertyType.IncreasedAttackSpeed]: (x) =>
    `${x}% Increased Attack Speed`,
  [MagicPropertyType.IncreasedChanceOfBlocking]: (x) =>
    `${x}% Increased Chance of Blocking`,
  [MagicPropertyType.IncreaseMaximumLife]: (x) => `Increase Maximum Life ${x}%`,
  [MagicPropertyType.IncreaseMaximumMana]: (x) => `Increase Maximum Mana ${x}%`,
  [MagicPropertyType.Knockback]: () => 'Knockback',
  [MagicPropertyType.Life]: (x) => `+${x} to Life`,
  [MagicPropertyType.HealStamina]: (x) => `Heal Stamina Plus ${x}%`,
  [MagicPropertyType.LifeStolenPerHit]: (x) => `${x}% Life Stolen Per Hit`,
  [MagicPropertyType.LightningDamage]: ({x, y}) =>
    `Adds ${x}-${y} Lightning Damage`,
  [MagicPropertyType.LightningResist]: (x) => `Lightning Resist +${x}%`,
  [MagicPropertyType.LightRadius]: (x) => `+${x} to Light Radius`,
  [MagicPropertyType.MagicDamage]: ({x, y}) => `Adds ${x}-${y} Magic Damage`,
  [MagicPropertyType.MagicDamageReduced]: (x) => `Magic Damage Reduced by ${x}`,
  [MagicPropertyType.MagicFind]: (x) =>
    `${x}% Better Chance of Getting Magic Items`,
  [MagicPropertyType.Mana]: (x) => `+${x} to Mana`,
  [MagicPropertyType.ManaAfterKill]: (x) => `+${x} to Mana After Each kill`,
  [MagicPropertyType.ManaStolenPerHit]: (x) => `${x}% Mana Stolen Per Hit`,
  [MagicPropertyType.MaximumColdResist]: (x) => `+${x}% to Maximum Cold Resist`,
  [MagicPropertyType.MaximumDamage]: (x) => `+${x} to Maximum Damage`,
  [MagicPropertyType.MaximumFireResist]: (x) => `+${x}% to Maximum Fire Resist`,
  [MagicPropertyType.MaximumLightningResist]: (x) =>
    `+${x}% to Maximum Lightning Resist`,
  [MagicPropertyType.MaximumPoisonResist]: (x) =>
    `+${x}% to Maximum Poison Resist`,
  [MagicPropertyType.MaximumStamina]: (x) => `+${x} Maximum Stamina`,
  [MagicPropertyType.MinimumDamage]: (x) => `+${x} to Minimum Damage`,
  [MagicPropertyType.OpenWounds]: (x) => `${x}% Chance of Open Wounds`,
  [MagicPropertyType.PoisonDamage]: ({x, z}) =>
    `+${x} Poison Damage Over ${z} Seconds`,
  [MagicPropertyType.PoisonResist]: (x) => `Poison Resist +${x}%`,
  [MagicPropertyType.PreventMonsterHeal]: () => 'Prevent Monster Heal',
  [MagicPropertyType.RegenerateMana]: (x) => `Regenerate Mana ${x}%`,
  [MagicPropertyType.ReplenishLife]: (x) => `Replenish Life +${x}`,
  [MagicPropertyType.Requirements]: (x) => `Requirements ${x}%`,
  [MagicPropertyType.SlowerStaminaDrain]: (x) => `${x}% Slower Stamina Drain`,
  [MagicPropertyType.Strength]: (x) => `+${x} to Strength`,
  [MagicPropertyType.TargetDefense]: (x) => `-${x}% Target Defense`,
  [MagicPropertyType.Vitality]: (x) => `+${x} to Vitality`,
};

// Wrap with value formatter
Object.entries(resolvers).forEach(([property, resolverr]) => {
  resolvers[property] = format(resolverr);
});

// Derive resolvers for *ByLevel properties
resolvers[MagicPropertyType.ExtraGoldByLevel] = lvl(
  resolvers[MagicPropertyType.ExtraGold],
  '%',
);
resolvers[MagicPropertyType.MagicFindByLevel] = lvl(
  resolvers[MagicPropertyType.MagicFind],
  '%',
);
