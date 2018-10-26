import { Player } from '../player.class';
import { ResourceType } from '../resource-type.enum';
import { Action } from './action.class';

export abstract class AccumulationAction extends Action {

  public abstract readonly type: ResourceType;

  protected quantity = 0;

  public accumulate() {
    this.quantity++;
  }

  protected applyEffects(player: Player): boolean {
    player.obtainResource(this.type, this.quantity);
    this.quantity = 0;

    return true;
  }

}
