import { Player } from '../../player.class';
import { ActionKey } from '../action-keys.enum';
import { Action } from '../action.class';

export class MeetingPlaceAction extends Action {

  public readonly key = ActionKey.MEETING_PLACE;

  public take(player: Player): boolean {
    return false;
  }
}
