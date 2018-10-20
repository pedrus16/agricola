import { Player } from '../../player.class';
import { IActionEffect } from '../action-effect.interface';
import { ActionKey } from '../action-keys.enum';
import { IActionParams } from '../action-params.interface';
import { Action } from '../action.class';

export class VegetableSeedsAction extends Action {

  public readonly key = ActionKey.VEGETABLE_SEEDS;

  public take(player: Player, params: IActionParams): IActionEffect[] {
    return [];
  }
}
