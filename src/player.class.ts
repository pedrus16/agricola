import { ActionEffectType } from './actions/action-effect-type.enum';
import { IActionParams } from './actions/action-params.interface';
import { Action } from './actions/action.class';
import { ResourceType } from './resource-type.enum';

export class Player {

  private resourceMap = new Map<ResourceType, number>();
  private effectMap = new Map<ActionEffectType, (data: any) => boolean>();

  constructor() {
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
    const effects = action.take(this, params);
    effects.forEach((effect) => this.effectMap.get(effect.type)(effect.data));

    return false;
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
    const currentAmount = this.resourceMap.get(type);
    this.resourceMap.set(type, currentAmount + amount);
  }

  private onObtainResource(data: { type: ResourceType, amount: number }): boolean {
    this.addResource(data.type, data.amount);
    return true;
  }

  private onDiscardResource(data: { type: ResourceType, amount: number }): boolean {
    return this.discardResource(data.type, data.amount);
  }

  private onPlowField(data: { position: number }): boolean {
    // TODO

    return false;
  }

  private onSow(data: { type: ResourceType, amount: number }): boolean {
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

  private onBuildRooms(data: { type: ResourceType, amount: number }): boolean {
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
