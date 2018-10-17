import { Action } from './actions/action.class';
import { ResourceType } from './resource-type.enum';

export class Player {

  private resourceMap = new Map<ResourceType, number>();

  public addResource(type: ResourceType, amount: number) {
    console.log('Player.addResource:', type, 'amount:', amount);
    const currentAmount = this.resourceMap.get(type);
    this.resourceMap.set(type, currentAmount + amount);
  }

  public takeAction(action: Action): boolean {
    console.log('Player.takeAction');

    return action.take(this);
  }

}
