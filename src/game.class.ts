import { ActionKey } from './actions/action-keys.enum';
import { MainBoard } from './main-board.class';
import { Player } from './player.class';

const MAX_PLAYER_COUNT = 4;

export class Game {

  private players: Player[];
  private mainBoard: MainBoard;
  private firstPlayer: number;
  private activePlayerIndex: number;
  private activeTurnIndex: number;

  public start(playerCount: 1 | 2 | 3 | 4) {
    console.log('Game.start');
    this.mainBoard = new MainBoard(playerCount);

    this.players = [];
    for (let i = 0; i < playerCount; ++i) {
      this.players.push(new Player());
    }
    this.firstPlayer = Math.floor(Math.random() * playerCount);
    this.activeTurnIndex = 0;
    console.log('Game.firstPlayer:', this.firstPlayer);

    this.beginTurn();
  }

  public takeAction(key: ActionKey) {
    console.log('Game.takeAction:', key);
    const availableAction = this.mainBoard.findAvailableActionByKey(key);
    if (availableAction) {
      console.log('Game.takeAction:', key);
      this.activePlayer.takeAction(availableAction);
      this.activateNextPlayer();
    }
  }

  private activateNextPlayer() {
    // TODO
  }

  private beginTurn() {
    this.activePlayerIndex = this.firstPlayer;
    console.log('Game.beginTurn:', this.activeTurnIndex, 'activePlayer:', this.activePlayerIndex);
    this.mainBoard.addActionForTurn(this.activeTurnIndex);
    this.mainBoard.accumulate();
  }

  private get activePlayer(): Player {
    return this.players[this.activePlayerIndex];
  }

}
