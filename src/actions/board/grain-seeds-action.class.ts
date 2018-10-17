import { Player } from '../../player.class';
import { ActionKey } from '../action-keys.enum';
import { Action } from '../action.class';

export class GrainSeedsAction extends Action {

  public readonly key = ActionKey.GRAIN_SEEDS;

  public take(player: Player): boolean {
    return false;
  }
}
