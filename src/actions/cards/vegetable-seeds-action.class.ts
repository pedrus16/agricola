import { Player } from '../../player.class';
import { ActionKey } from '../action-keys.enum';
import { Action } from '../action.class';

export class VegetableSeedsAction extends Action {

  public readonly key = ActionKey.VEGETABLE_SEEDS;

  protected applyEffects(player: Player): boolean {
    // TODO
    return false;
  }
}
