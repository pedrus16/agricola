import { ResourceType } from '../../resource-type.enum';
import { AccumulationAction } from '../accumulation-action.class';
import { ActionKey } from '../action-keys.enum';

export class SheepMarketAction extends AccumulationAction {
  public readonly key = ActionKey.SHEEP_MARKET;
  public readonly type = ResourceType.SHEEP;
}
