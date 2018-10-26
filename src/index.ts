import { ActionKey } from './actions/action-keys.enum';
import { Game } from './game.class';

const game = new Game(1);

// Turn 1
console.log(game.toString());
console.log(game.activePlayer.toString());

console.log('TAKE ACTION', ActionKey.CLAY_PIT);
game.activePlayer.takeAction(game.mainBoard.findAvailableActionByKey(ActionKey.CLAY_PIT));

console.log(game.toString());
console.log(game.activePlayer.toString());

console.log('TAKE ACTION', ActionKey.FOREST);
game.activePlayer.takeAction(game.mainBoard.findAvailableActionByKey(ActionKey.FOREST));

// Turn 2
console.log(game.toString());
console.log(game.activePlayer.toString());

console.log('TAKE ACTION', ActionKey.REED_BANK);
game.activePlayer.takeAction(game.mainBoard.findAvailableActionByKey(ActionKey.REED_BANK));

console.log(game.toString());
console.log(game.activePlayer.toString());

console.log('TAKE ACTION', ActionKey.CLAY_PIT);
game.activePlayer.takeAction(game.mainBoard.findAvailableActionByKey(ActionKey.CLAY_PIT));

// Turn 3
console.log(game.toString());
console.log(game.activePlayer.toString());

console.log('TAKE ACTION', ActionKey.FOREST);
game.activePlayer.takeAction(game.mainBoard.findAvailableActionByKey(ActionKey.FOREST));

console.log(game.toString());
console.log(game.activePlayer.toString());

console.log('TAKE ACTION', ActionKey.CLAY_PIT);
game.activePlayer.takeAction(game.mainBoard.findAvailableActionByKey(ActionKey.CLAY_PIT));

// Turn 4
console.log(game.toString());
console.log(game.activePlayer.toString());

console.log('TAKE ACTION', ActionKey.FOREST);
game.activePlayer.takeAction(game.mainBoard.findAvailableActionByKey(ActionKey.FOREST));

console.log(game.toString());
console.log(game.activePlayer.toString());

console.log('TAKE ACTION', ActionKey.SHEEP_MARKET);
game.activePlayer.takeAction(game.mainBoard.findAvailableActionByKey(ActionKey.SHEEP_MARKET));

// Turn 5
console.log(game.toString());
console.log(game.activePlayer.toString());
