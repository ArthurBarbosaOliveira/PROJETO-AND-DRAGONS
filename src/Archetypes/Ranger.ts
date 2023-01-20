import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static archetypeInstances = 0;
  energyType: EnergyType;

  constructor(
    name: string,
  ) {
    super(name);
    this.energyType = 'stamina';
    Ranger.archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.archetypeInstances;
  }
}
