import { Identity } from './Identity';

export class ScalarIdentity<V extends Object> implements Identity {

  constructor(private readonly id: V) {
  }

  public getValue(): V {
    return this.id;
  }

  public toString() {
    return `${this.id}`;
  }

  public equals(id: Identity) {
    return this.id.toString() === id.toString();
  }
}
