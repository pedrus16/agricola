import { Player } from '../../player.class';
import { ResourceType } from '../../resource-type.enum';
import { ActionEffectType } from '../action-effect-type.enum';
import { IActionEffect } from '../action-effect.interface';
import { ActionKey } from '../action-keys.enum';
import { IActionParams } from '../action-params.interface';
import { Action } from '../action.class';

export class FarmExpansionAction extends Action {

  public readonly key = ActionKey.FARM_EXPANSION;

  private readonly roomReedCost = 2;
  private readonly roomResourceCost = 5;
  private readonly stableWoodCost = 2;

  public take(player: Player, params: IActionParams): IActionEffect[] {

    if (!params.rooms && !params.stablePositions) {
      return [];
    }

    const effects: IActionEffect[] = [];

    if (params.rooms) {
      effects.push({ type: ActionEffectType.BUILD_ROOMS, data: params.rooms.positions });
      effects.push({
        type: ActionEffectType.DISCARD_RESOURCE,
        data: { type: ResourceType.REED, amount: params.rooms.positions.length * this.roomReedCost },
      });
      effects.push({
        type: ActionEffectType.DISCARD_RESOURCE,
        data: { type: params.rooms.type, amount: params.rooms.positions.length * this.roomResourceCost },
      });
    }
    if (params.stablePositions) {
      effects.push({ type: ActionEffectType.BUILD_STABLES, data: params.stablePositions });
      effects.push({
        type: ActionEffectType.DISCARD_RESOURCE,
        data: { type: ResourceType.WOOD, amount: params.stablePositions.length * this.stableWoodCost },
      });
    }

    this.player = player;

    return effects;
  }
}
