import { Player } from '../../player.class';
import { ResourceType } from '../../resource-type.enum';
import { ActionKey } from '../action-keys.enum';
import { IActionParams } from '../action-params.interface';
import { Action } from '../action.class';

export class FarmExpansionAction extends Action {

  public readonly key = ActionKey.FARM_EXPANSION;

  private readonly roomReedCost = 2;
  private readonly roomResourceCost = 5;
  private readonly stableWoodCost = 2;

  protected applyEffects(player: Player, params: IActionParams): boolean {
    if (params.rooms) {
      if (!this.buildRooms(player, params.rooms)) {
        return false;
      }
    }

    if (params.stablePositions) {
      if (!this.buildStables(player, params.stablePositions)) {
        return false;
      }
    }

    return false;
  }

  private buildRooms(
    player: Player,
    rooms: { type: ResourceType.WOOD | ResourceType.CLAY | ResourceType.STONE, positions: number[] },
  ): boolean {
    const resourceCost = [
      { type: ResourceType.REED, amount: this.roomReedCost * rooms.positions.length },
      { type: rooms.type, amount: this.roomResourceCost * rooms.positions.length },
    ];
    if (!player.hasResources(resourceCost)) {
      return false;
    }
    if (!player.buildRooms(rooms.type, rooms.positions)) {
      return false;
    }
    player.discardResources(resourceCost);

    return true;
  }

  private buildStables(player: Player, stablePositions: number[]): boolean {
    const resourceCost = [{ type: ResourceType.WOOD, amount: this.stableWoodCost * stablePositions.length }];
    if (!player.hasResources(resourceCost)) {
      return false;
    }
    if (!player.buildStables(stablePositions)) {
      return false;
    }
    player.discardResources(resourceCost);

    return true;
  }
}
