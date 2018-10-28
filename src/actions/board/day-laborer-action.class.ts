import { Player } from '../../player.class';
import { ResourceType } from '../../resource-type.enum';
import { ActionKey } from '../action-keys.enum';
import { Action } from '../action.class';

export class DayLaborerAction extends Action {

  public readonly key = ActionKey.DAY_LABORER;

  private readonly foodAmount = 2;

  protected applyEffects(player: Player): boolean {
    player.obtainResource(ResourceType.FOOD, this.foodAmount);

    return true;
  }
}
