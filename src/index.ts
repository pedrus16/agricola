import { ActionKey } from './actions/action-keys.enum';
import { Game } from './game.class';

const game = new Game(1);

// Turn 1
console.log(game.toString());

game.activePlayer.takeAction(game.mainBoard.findAvailableActionByKey(ActionKey.CLAY_PIT));

console.log(game.toString());

game.activePlayer.takeAction(game.mainBoard.findAvailableActionByKey(ActionKey.FOREST));

console.log(game.toString());

game.activePlayer.takeAction(game.mainBoard.findAvailableActionByKey(ActionKey.REED_BANK));

console.log(game.toString());

game.activePlayer.takeAction(game.mainBoard.findAvailableActionByKey(ActionKey.CLAY_PIT));

console.log(game.toString());

game.activePlayer.takeAction(game.mainBoard.findAvailableActionByKey(ActionKey.FOREST));

console.log(game.toString());

game.activePlayer.takeAction(game.mainBoard.findAvailableActionByKey(ActionKey.CLAY_PIT));

console.log(game.toString());

game.activePlayer.takeAction(game.mainBoard.findAvailableActionByKey(ActionKey.FOREST));

console.log(game.toString());

game.activePlayer.takeAction(game.mainBoard.findAvailableActionByKey(ActionKey.REED_BANK));

console.log(game.toString());
