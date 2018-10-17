import { ResourceType } from '../../resource-type.enum';
import { AccumulationAction } from '../accumulation-action.class';
import { ActionKey } from '../action-keys.enum';

export class PigMarketAction extends AccumulationAction {
  public readonly key = ActionKey.PIG_MARKET;
  public readonly type = ResourceType.PIG;
}
