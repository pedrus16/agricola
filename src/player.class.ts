import { IActionParams } from './actions/action-params.interface';
import { Action } from './actions/action.class';
import { MainBoard } from './main-board.class';
import { ResourceType } from './resource-type.enum';

const MAX_FARMER_COUNT = 5;

export class Player {

  private resourceMap = new Map<ResourceType, number>();
  private farmerCount = 2;
  private mainBoard: MainBoard;
  private actionTakenCallback: (Player) => void;

  get hasFarmerAvailable(): boolean {
    return this.usedFarmers < this.farmerCount;
  }

  get usedFarmers(): number {
    return this.mainBoard.getActionsTakenBy(this).length;
  }

  get resources(): any {
    return {
      [ResourceType.FOOD]: this.resourceMap.get(ResourceType.FOOD) || 0,
      [ResourceType.SHEEP]: this.resourceMap.get(ResourceType.SHEEP) || 0,
      [ResourceType.CATTLE]: this.resourceMap.get(ResourceType.CATTLE) || 0,
      [ResourceType.PIG]: this.resourceMap.get(ResourceType.PIG) || 0,
      [ResourceType.REED]: this.resourceMap.get(ResourceType.REED) || 0,
      [ResourceType.CLAY]: this.resourceMap.get(ResourceType.CLAY) || 0,
      [ResourceType.WOOD]: this.resourceMap.get(ResourceType.WOOD) || 0,
      [ResourceType.STONE]: this.resourceMap.get(ResourceType.STONE) || 0,
      [ResourceType.CEREAL]: this.resourceMap.get(ResourceType.CEREAL) || 0,
      [ResourceType.VEGETABLE]: this.resourceMap.get(ResourceType.VEGETABLE) || 0,
    };
  }

  constructor(mainBoard: MainBoard, actionTakenCallback: (Player) => void) {
    this.mainBoard = mainBoard;
    this.actionTakenCallback = actionTakenCallback;
  }

  public takeAction(action: Action, params?: IActionParams): boolean {

    if (this.usedFarmers >= this.farmerCount) {
      return false;
    }

    const success = action.take(this, params);
    if (success) {
      this.actionTakenCallback(this);

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

  public obtainResource(type: ResourceType, amount: number): boolean {
    const currentAmount = this.resourceMap.get(type) || 0;
    this.resourceMap.set(type, currentAmount + amount);

    return true;
  }

  public discardResource(type: ResourceType, amount: number): boolean {
    const resourceInStorage = this.resourceMap.get(type);

    if (!resourceInStorage || resourceInStorage < amount) {
      return false;
    }

    this.resourceMap.set(type, resourceInStorage - amount);

    return true;
  }

  public plowField(position: number): boolean {
    // TODO

    return false;
  }

  public sow(resources: Array<ResourceType.CEREAL | ResourceType.VEGETABLE>): boolean {
    // TODO

    return false;
  }

  public playOccupationCard(card: any): boolean {
    // TODO

    return false;
  }

  public playMinorImprovementCard(card: any): boolean {
    // TODO

    return false;
  }

  public playMajorImprovementCard(card: any): boolean {
    // TODO

    return false;
  }

  public becomeFirstPlayer(): boolean {
    // TODO

    return false;
  }

  public onMakeAChild(): boolean {
    // TODO

    return false;
  }

  public onBuildRooms(positions: number[]): boolean {
    // TODO

    return false;
  }

  public onRenovateHouse(type: ResourceType.CLAY | ResourceType.STONE): boolean {
    // TODO

    return false;
  }

  public onPlaceFences(positions: number[]): boolean {
    // TODO

    return false;
  }

  public onBuildStables(positions: number[]): boolean {
    // TODO

    return false;
  }

  public toString(): string {
    return `
      Resources:
        FOOD: ${this.resourceMap.get(ResourceType.FOOD)}
        SHEEP: ${this.resourceMap.get(ResourceType.SHEEP)}
        CATTLE: ${this.resourceMap.get(ResourceType.CATTLE)}
        PIG: ${this.resourceMap.get(ResourceType.PIG)}
        REED: ${this.resourceMap.get(ResourceType.REED)}
        CLAY: ${this.resourceMap.get(ResourceType.CLAY)}
        WOOD: ${this.resourceMap.get(ResourceType.WOOD)}
        STONE: ${this.resourceMap.get(ResourceType.STONE)}
        CEREAL: ${this.resourceMap.get(ResourceType.CEREAL)}
        VEGETABLE: ${this.resourceMap.get(ResourceType.VEGETABLE)}
    `;
  }

}
