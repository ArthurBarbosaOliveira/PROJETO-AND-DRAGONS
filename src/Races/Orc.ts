import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static countOrc = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.countOrc += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.countOrc;
  }
}