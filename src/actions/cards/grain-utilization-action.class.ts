import { Player } from '../../player.class';
import { ActionKey } from '../action-keys.enum';
import { Action } from '../action.class';

export class GrainUtilizationAction extends Action {

  public readonly key = ActionKey.GRAIN_UTILIZATION;

  public take(player: Player): boolean {
    return false;
  }
}
