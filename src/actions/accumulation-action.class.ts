import { Player } from '../player.class';
import { ResourceType } from '../resource-type.enum';
import { ActionEffectType } from './action-effect-type.enum';
import { IActionEffect } from './action-effect.interface';
import { Action } from './action.class';

export abstract class AccumulationAction extends Action {

  public abstract readonly type: ResourceType;

  protected quantity = 0;

  public take(player: Player): IActionEffect[] {
    if (this.occupied) {
      return [];
    }

    this.player = player;
    const effect = { type: ActionEffectType.OBTAIN_RESOURCE, data: { type: this.type, amount: this.quantity } };
    this.quantity = 0;

    return [effect];
  }

  public accumulate() {
    this.quantity++;
  }

}
