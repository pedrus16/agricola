import { Player } from '../../player.class';
import { ActionEffectType } from '../action-effect-type.enum';
import { IActionEffect } from '../action-effect.interface';
import { ActionKey } from '../action-keys.enum';
import { IActionParams } from '../action-params.interface';
import { Action } from '../action.class';

export class FarmlandAction extends Action {

  public readonly key = ActionKey.FARMLAND;

  public take(player: Player, params: IActionParams): IActionEffect[] {
    if (!params.fieldPosition) {
      return [];
    }

    this.player = player;

    return [{ type: ActionEffectType.PLOW_FIELD, data: params.fieldPosition }];
  }
}
