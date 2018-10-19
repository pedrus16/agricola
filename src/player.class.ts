import { IActionParams } from './actions/action-params.interface';
import { Action } from './actions/action.class';
import { ResourceType } from './resource-type.enum';

export class Player {

  private resourceMap = new Map<ResourceType, number>();

  public takeAction(action: Action, params?: IActionParams): boolean {
    if (action.take(this, params)) {
      // TODO Apply action's effect

      return true;
    }

    return false;
  }

  public cookOneResource(
    majorImprovement: any,
    resourceType: ResourceType.VEGETABLE | ResourceType.SHEEP | ResourceType.PIG | ResourceType.CATTLE,
  ) {
    // TODO
  }

  public discardOneResource(player: Player, resourceType: ResourceType) {
    // TODO
  }

  private addResource(type: ResourceType, amount: number) {
    const currentAmount = this.resourceMap.get(type);
    this.resourceMap.set(type, currentAmount + amount);
  }

}
