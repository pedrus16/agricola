import { Player } from '../../player.class';
import { ResourceType } from '../../resource-type.enum';
import { ActionKey } from '../action-keys.enum';
import { Action } from '../action.class';

export class GrainSeedsAction extends Action {

  public readonly key = ActionKey.GRAIN_SEEDS;

  protected applyEffects(player: Player): boolean {
    player.obtainResource(ResourceType.CEREAL, 1);

    return true;
  }
}
