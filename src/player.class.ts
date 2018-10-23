import { ActionEffectType } from './actions/action-effect-type.enum';
import { IActionParams } from './actions/action-params.interface';
import { Action } from './actions/action.class';
import { MainBoard } from './main-board.class';
import { ResourceType } from './resource-type.enum';

const MAX_FARMER_COUNT = 5;

export class Player {

  private resourceMap = new Map<ResourceType, number>();
  private effectMap = new Map<ActionEffectType, (data: any) => boolean>();
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
    this.effectMap.set(ActionEffectType.OBTAIN_RESOURCE,      (data) => this.onObtainResource(data));
    this.effectMap.set(ActionEffectType.DISCARD_RESOURCE,     (data) => this.onDiscardResource(data));
    this.effectMap.set(ActionEffectType.PLOW_FIELD,           (data) => this.onPlowField(data));
    this.effectMap.set(ActionEffectType.SOW,                  (data) => this.onSow(data));
    this.effectMap.set(ActionEffectType.PLAY_OCCUPATION_CARD, (data) => this.onPlayOccupationCard(data));
    this.effectMap.set(ActionEffectType.BECOME_FIRST_PLAYER,  (data) => this.onBecomeFirstPlayer(data));
    this.effectMap.set(ActionEffectType.MAKE_A_CHILD,         (data) => this.onMakeAChild(data));
    this.effectMap.set(ActionEffectType.BUILD_ROOMS,          (data) => this.onBuildRooms(data));
    this.effectMap.set(ActionEffectType.RENOVATE_HOUSE,       (data) => this.onRenovateHouse(data));
    this.effectMap.set(ActionEffectType.PLACE_FENCES,         (data) => this.onPlaceFences(data));
    this.effectMap.set(ActionEffectType.BUILD_STABLES,        (data) => this.onBuildStables(data));
  }

  public takeAction(action: Action, params?: IActionParams): boolean {

    if (this.usedFarmers >= this.farmerCount) {
      return false;
    }

    const effects = action.take(this, params);
    const effectFail = effects
      .map((effect) => this.effectMap.get(effect.type)(effect.data))
      .find((result) => !result);

    if (effectFail !== undefined) {
      return false;
    }

    this.actionTakenCallback(this);

    return true;
  }

  public cookOneResource(
    majorImprovement: any,
    resourceType: ResourceType.VEGETABLE | ResourceType.SHEEP | ResourceType.PIG | ResourceType.CATTLE,
  ) {
    // TODO
  }

  public discardResource(type: ResourceType, amount: number): boolean {
    const resourceInStorage = this.resourceMap.get(type);

    if (!resourceInStorage || resourceInStorage < amount) {
      return false;
    }

    this.resourceMap.set(type, resourceInStorage - amount);

    return true;
  }

  private addResource(type: ResourceType, amount: number) {
    const currentAmount = this.resourceMap.get(type) || 0;
    this.resourceMap.set(type, currentAmount + amount);
  }

  private onObtainResource(resource: { type: ResourceType, amount: number }): boolean {
    this.addResource(resource.type, resource.amount);

    return true;
  }

  private onDiscardResource(resource: { type: ResourceType, amount: number }): boolean {
    return this.discardResource(resource.type, resource.amount);
  }

  private onPlowField(position: number): boolean {
    // TODO

    return false;
  }

  private onSow(resources: ResourceType[]): boolean {
    // TODO

    return false;
  }

  private onPlayOccupationCard(data: { type: ResourceType, amount: number }): boolean {
    // TODO

    return false;
  }

  private onBecomeFirstPlayer(data: { type: ResourceType, amount: number }): boolean {
    // TODO

    return false;
  }

  private onMakeAChild(data: { type: ResourceType, amount: number }): boolean {
    // TODO

    return false;
  }

  private onBuildRooms(positions: number[]): boolean {
    // TODO

    return false;
  }

  private onRenovateHouse(data: { type: ResourceType, amount: number }): boolean {
    // TODO

    return false;
  }

  private onPlaceFences(data: { type: ResourceType, amount: number }): boolean {
    // TODO

    return false;
  }

  private onBuildStables(data: { type: ResourceType, amount: number }): boolean {
    // TODO

    return false;
  }

}
