import { Player } from '../player.class';
import { ActionKey } from './action-keys.enum';

export abstract class Action {

  public abstract readonly key: ActionKey;

  private player: Player;

  public abstract take(player: Player): boolean;

  public get occupied(): boolean {
    return !!this.player;
  }

}
