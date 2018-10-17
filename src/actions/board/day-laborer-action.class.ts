import { Player } from '../../player.class';
import { ActionKey } from '../action-keys.enum';
import { Action } from '../action.class';

export class DayLaborerAction extends Action {

  public readonly key = ActionKey.DAY_LABORER;

  public take(player: Player): boolean {
    return false;
  }
}
