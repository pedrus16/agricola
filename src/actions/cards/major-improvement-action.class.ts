import { Player } from '../../player.class';
import { ActionKey } from '../action-keys.enum';
import { Action } from '../action.class';

export class MajorImprovementAction extends Action {

  public readonly key = ActionKey.MAJOR_IMPROVEMENT;

  public take(player: Player): boolean {
    return false;
  }
}
