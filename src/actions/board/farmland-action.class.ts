import { Player } from '../../player.class';
import { ActionKey } from '../action-keys.enum';
import { Action } from '../action.class';

export class FarmlandAction extends Action {

  public readonly key = ActionKey.FARMLAND;

  public take(player: Player): boolean {
    return false;
  }
}
