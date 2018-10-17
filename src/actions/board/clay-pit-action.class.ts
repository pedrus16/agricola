import { ResourceType } from '../../resource-type.enum';
import { AccumulationAction } from '../accumulation-action.class';
import { ActionKey } from '../action-keys.enum';

export class ClayPitAction extends AccumulationAction {
  public readonly key = ActionKey.CLAY_PIT;
  public readonly type = ResourceType.CLAY;
}
