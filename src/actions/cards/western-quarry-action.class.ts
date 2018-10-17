import { ResourceType } from '../../resource-type.enum';
import { AccumulationAction } from '../accumulation-action.class';
import { ActionKey } from '../action-keys.enum';

export class WesternQuarryAction extends AccumulationAction {
  public readonly key = ActionKey.WESTERN_QUARRY;
  public readonly type = ResourceType.STONE;
}
