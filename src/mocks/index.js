import {getItemById} from '../queries/index.js';

export const items = [
  'El',
  'El',
  'Nef',
  'Ith',
  'Ith',
  'FlawlessRuby',
  'FlawedTopaz',
  'FlawedTopaz',
  'Emerald',
  'ChippedTopaz',
  'Io',
  'Io',
  'Io',
  'RejuvenationPotion',
  'RejuvenationPotion',
  'Io',
  'Sol',
  'MinorHealingPotion',
  'HealingPotion',
  'Bolts',
  'Bolts',
  'MinorHealingPotion',
  'ManaPotion',
  'StranglingGasPotion',
  'Sol',
].map(getItemById);
