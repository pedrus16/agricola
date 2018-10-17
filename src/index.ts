import { ActionKey } from './actions/action-keys.enum';
import { Game } from './game.class';

const game = new Game();

game.start(4);

game.takeAction(ActionKey.CLAY_PIT);
