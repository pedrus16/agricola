import { MainBoard } from './main-board.class';
import { Player } from './player.class';

export class Game {

  public readonly mainBoard: MainBoard;

  private players: Player[];
  private firstPlayer: number;
  private activePlayerIndex: number;
  private activeTurnIndex: number;
  private harvestTurnIndexes = [3, 6, 8, 10, 12, 14];

  get activePlayer(): Player {
    return this.players[this.activePlayerIndex];
  }

  public constructor(playerCount: 1 | 2 | 3 | 4) {
    this.mainBoard = new MainBoard(playerCount);

    this.players = [];
    for (let i = 0; i < playerCount; ++i) {
      const occupations = []; // TODO build a random list from the deck
      const minorImprovements = []; // TODO build a random list from the deck
      const onPlayerTakeAction = (player) => this.onPlayerTakeAction(player);
      this.players.push(new Player(this.mainBoard, occupations, minorImprovements, onPlayerTakeAction));
    }
    this.firstPlayer = Math.floor(Math.random() * playerCount);
    this.activeTurnIndex = 0;

    this.beginTurn();
  }

  public getPlayer(index: number): Player {
    return this.players[index];
  }

  public toString(): string {
    return `
      GAME:
      Current Turn: ${this.activeTurnIndex + 1}
      Current Player: ${this.activePlayerIndex + 1}
    `;
  }

  private onPlayerTakeAction(player: Player) {
    this.activateNextPlayer();
  }

  private activateNextPlayer() {
    const nextPlayerIndex = (this.activePlayerIndex + 1) % this.players.length;
    const nextPlayer = this.players[nextPlayerIndex];
    if (nextPlayer.hasFarmerAvailable) {
      this.activePlayerIndex = nextPlayerIndex;
    } else {
      this.beginReturnFromWork();
    }
  }

  private beginTurn() {
    this.activePlayerIndex = this.firstPlayer;
    this.mainBoard.addActionForTurn(this.activeTurnIndex);
    this.mainBoard.accumulate();
  }

  private beginReturnFromWork() {
    this.mainBoard.returnAllFarmers();
    this.activeTurnIndex++;
    this.beginTurn();
  }

}
