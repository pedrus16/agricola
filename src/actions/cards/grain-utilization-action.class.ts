import { Player } from '../../player.class';
import { ActionKey } from '../action-keys.enum';
import { IActionParams } from '../action-params.interface';
import { Action } from '../action.class';

export class GrainUtilizationAction extends Action {

  public readonly key = ActionKey.GRAIN_UTILIZATION;

  protected applyEffects(player: Player, params: IActionParams): boolean {
    // TODO
    return false;
  }
}
