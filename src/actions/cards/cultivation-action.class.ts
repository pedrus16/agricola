import { Player } from '../../player.class';
import { ActionKey } from '../action-keys.enum';
import { Action } from '../action.class';

export class CultivationAction extends Action {

  public readonly key = ActionKey.CULTIVATION;

  public take(player: Player): boolean {
    return false;
  }
}
