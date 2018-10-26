import { Player } from '../player.class';
import { IActionEffect } from './action-effect.interface';
import { ActionKey } from './action-keys.enum';
import { IActionParams } from './action-params.interface';

export abstract class Action {

  public abstract readonly key: ActionKey;

  private player: Player;

  public take(player: Player, params?: IActionParams): boolean {
    if (this.occupied) {
      return false;
    }

    const success = this.applyEffects(player, params);
    if (success) {
      this.player = player;

      return true;
    }

    return false;
  }

  public get occupied(): boolean {
    return !!this.player;
  }

  public get occupyingPlayer(): Player {
    return this.player;
  }

  // TODO This shouldn't be public! Find another way to return the farmer
  public clearPlayer() {
    this.player = null;
  }

  protected abstract applyEffects(player: Player, params?: IActionParams): boolean;

}
