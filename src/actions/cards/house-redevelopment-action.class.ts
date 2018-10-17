import { Player } from '../../player.class';
import { ActionKey } from '../action-keys.enum';
import { Action } from '../action.class';

export class HouseRedevelopmentAction extends Action {

  public readonly key = ActionKey.HOUSE_REDEVELOPMENT;

  public take(player: Player): boolean {
    return false;
  }
}
