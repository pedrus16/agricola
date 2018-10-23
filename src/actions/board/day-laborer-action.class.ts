import { Player } from '../../player.class';
import { ResourceType } from '../../resource-type.enum';
import { ActionEffectType } from '../action-effect-type.enum';
import { IActionEffect } from '../action-effect.interface';
import { ActionKey } from '../action-keys.enum';
import { Action } from '../action.class';

export class DayLaborerAction extends Action {

  public readonly key = ActionKey.DAY_LABORER;

  private readonly foodAmount = 2;

  public take(player: Player): IActionEffect[] {
    this.player = player;

    return [{ type: ActionEffectType.OBTAIN_RESOURCE, data: { type: ResourceType.FOOD, amount: this.foodAmount } }];
  }
}
