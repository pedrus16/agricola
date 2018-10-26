import { Player } from '../../player.class';
import { ActionKey } from '../action-keys.enum';
import { IActionParams } from '../action-params.interface';
import { Action } from '../action.class';

export class BasicWishForChildrenAction extends Action {

  public readonly key = ActionKey.BASIC_WISH_FOR_CHILDREN;

  protected applyEffects(player: Player): boolean {
    // TODO
    return false;
  }
}
