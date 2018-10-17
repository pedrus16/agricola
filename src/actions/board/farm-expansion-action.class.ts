import { Player } from '../../player.class';
import { ActionKey } from '../action-keys.enum';
import { Action } from '../action.class';

export class FarmExpansionAction extends Action {

  public readonly key = ActionKey.FARM_EXPANSION;

  public take(player: Player): boolean {
    return false;
  }
}
