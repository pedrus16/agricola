import { MainBoard } from './main-board.class';
import { Player } from './player.class';

export class Game {

  public readonly mainBoard: MainBoard;

  private players: Player[];
  private firstPlayer: number;
  private activePlayerIndex: number;
  private activeTurnIndex: number;

  public constructor(playerCount: 1 | 2 | 3 | 4) {
    this.mainBoard = new MainBoard(playerCount);

    this.players = [];
    for (let i = 0; i < playerCount; ++i) {
      this.players.push(new Player());
    }
    this.firstPlayer = Math.floor(Math.random() * playerCount);
    this.activeTurnIndex = 0;

    this.beginTurn();
  }

  get activePlayer(): Player {
    return this.players[this.activePlayerIndex];
  }

  private activateNextPlayer() {
    // TODO
  }

  private beginTurn() {
    this.activePlayerIndex = this.firstPlayer;
    this.mainBoard.addActionForTurn(this.activeTurnIndex);
    this.mainBoard.accumulate();
  }

}
