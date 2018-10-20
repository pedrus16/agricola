import { Player } from '../player.class';
import { IActionEffect } from './action-effect.interface';
import { ActionKey } from './action-keys.enum';
import { IActionParams } from './action-params.interface';

export abstract class Action {

  public abstract readonly key: ActionKey;

  protected player: Player;

  public abstract take(player: Player, params?: IActionParams): IActionEffect[];

  public get occupied(): boolean {
    return !!this.player;
  }

}
