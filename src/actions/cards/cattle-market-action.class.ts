import { ResourceType } from '../../resource-type.enum';
import { AccumulationAction } from '../accumulation-action.class';
import { ActionKey } from '../action-keys.enum';

export class CattleMarketAction extends AccumulationAction {
  public readonly key = ActionKey.CATTLE_MARKET;
  public readonly type = ResourceType.CATTLE;
}
