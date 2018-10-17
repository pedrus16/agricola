import { Player } from '../../player.class';
import { ActionKey } from '../action-keys.enum';
import { Action } from '../action.class';

export class LessonsAction extends Action {

  public readonly key = ActionKey.LESSONS;

  public take(player: Player): boolean {
    return false;
  }
}
