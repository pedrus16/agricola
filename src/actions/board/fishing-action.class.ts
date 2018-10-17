import { ResourceType } from '../../resource-type.enum';
import { AccumulationAction } from '../accumulation-action.class';
import { ActionKey } from '../action-keys.enum';

export class FishingAction extends AccumulationAction {
  public readonly key = ActionKey.FISHING;
  public readonly type = ResourceType.FOOD;
}
