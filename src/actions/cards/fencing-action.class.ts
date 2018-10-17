import { Player } from '../../player.class';
import { ActionKey } from '../action-keys.enum';
import { Action } from '../action.class';

export class FencingAction extends Action {

  public readonly key = ActionKey.FENCING;

  public take(player: Player): boolean {
    return false;
  }
}
