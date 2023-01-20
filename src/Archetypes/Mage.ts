import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static archetypeInstances = 0;
  energyType: EnergyType;

  constructor(
    name: string,
  ) {
    super(name);
    this.energyType = 'mana';
    Mage.archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.archetypeInstances;
  }
}
