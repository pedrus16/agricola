import { ResourceType } from '../../resource-type.enum';
import { AccumulationAction } from '../accumulation-action.class';
import { ActionKey } from '../action-keys.enum';

export class ForestAction extends AccumulationAction {

  public readonly key = ActionKey.FOREST;
  public readonly type = ResourceType.WOOD;

  public accumulate() {
    this.quantity += 3;
  }

}
