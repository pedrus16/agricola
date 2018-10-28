import { Player } from '../../player.class';
import { ActionKey } from '../action-keys.enum';
import { IActionParams } from '../action-params.interface';
import { Action } from '../action.class';

export class FarmlandAction extends Action {

  public readonly key = ActionKey.FARMLAND;

  protected applyEffects(player: Player, params: IActionParams): boolean {
    return player.plowField(params.fieldPosition);
  }
}
