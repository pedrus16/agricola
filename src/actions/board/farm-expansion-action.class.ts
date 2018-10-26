import { Player } from '../../player.class';
import { ActionKey } from '../action-keys.enum';
import { IActionParams } from '../action-params.interface';
import { Action } from '../action.class';

export class FarmExpansionAction extends Action {

  public readonly key = ActionKey.FARM_EXPANSION;

  private readonly roomReedCost = 2;
  private readonly roomResourceCost = 5;
  private readonly stableWoodCost = 2;

  protected applyEffects(player: Player, params: IActionParams): boolean {
    // TODO
    return false;
  }
}
