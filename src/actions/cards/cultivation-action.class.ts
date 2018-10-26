import { Player } from '../../player.class';
import { ActionKey } from '../action-keys.enum';
import { IActionParams } from '../action-params.interface';
import { Action } from '../action.class';

export class CultivationAction extends Action {

  public readonly key = ActionKey.CULTIVATION;

  protected applyEffects(player: Player, params: IActionParams): boolean {
    // TODO
    return false;
  }
}
