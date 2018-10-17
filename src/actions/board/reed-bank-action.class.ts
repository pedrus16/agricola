import { ResourceType } from '../../resource-type.enum';
import { AccumulationAction } from '../accumulation-action.class';
import { ActionKey } from '../action-keys.enum';

export class ReedBankAction extends AccumulationAction {
  public readonly key = ActionKey.REED_BANK;
  public readonly type = ResourceType.REED;
}
