import { Player } from '../player.class';
import { ResourceType } from '../resource-type.enum';
import { Action } from './action.class';

export abstract class AccumulationAction extends Action {

  public abstract readonly type: ResourceType;

  protected quantity = 0;

  public take(player: Player): boolean {
    if (this.quantity < 0) {
      return false;
    }
    player.addResource(this.type, this.quantity);
    this.quantity = 0;

    return true;
  }

  public accumulate() {
    this.quantity++;
  }

}
