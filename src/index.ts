import { ActionKey } from './actions/action-keys.enum';
import { Game } from './game.class';

const game = new Game(4);

console.log(game.toString());

game.activePlayer.takeAction(game.mainBoard.findAvailableActionByKey(ActionKey.CLAY_PIT));
