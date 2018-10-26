import { Player } from '../../player.class';
import { ActionKey } from '../action-keys.enum';
import { IActionParams } from '../action-params.interface';
import { Action } from '../action.class';

export class LessonsAction extends Action {

  public readonly key = ActionKey.LESSONS;

  protected applyEffects(player: Player, params: IActionParams): boolean {
    // TODO
    return false;
  }
}
