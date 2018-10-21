import { Game } from './game.class';

describe('Game Class', () => {

  it('should create', () => {
    const game = new Game(1);
    expect(game).toBeDefined();
    expect(game instanceof Game).toBeTruthy();
  });

});
