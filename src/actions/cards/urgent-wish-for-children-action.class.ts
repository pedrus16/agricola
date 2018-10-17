import { Player } from '../../player.class';
import { ActionKey } from '../action-keys.enum';
import { Action } from '../action.class';

export class UrgentWishForChildrenAction extends Action {

  public readonly key = ActionKey.URGENT_WISH_FOR_CHILDREN;

  public take(player: Player): boolean {
    return false;
  }
}
