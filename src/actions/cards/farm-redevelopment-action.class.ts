import { Player } from '../../player.class';
import { ActionKey } from '../action-keys.enum';
import { Action } from '../action.class';

export class FarmRedevelopmentAction extends Action {

  public readonly key = ActionKey.FARM_REDEVELOPMENT;

  public take(player: Player): boolean {
    return false;
  }
}
