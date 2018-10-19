import { ActionKey } from './actions/action-keys.enum';
import { Game } from './game.class';

const game = new Game(4);

game.activePlayer.takeAction(game.mainBoard.findAvailableActionByKey(ActionKey.CLAY_PIT));
