import { ActionKey } from './actions/action-keys.enum';
import { MainBoard } from './main-board.class';
import { Player } from './player.class';
import { ResourceType } from './resource-type.enum';

describe('Player Class', () => {

  it('should create', () => {
    const mainBoard = new MainBoard(4);
    const player = new Player(mainBoard, () => null);
    expect(player).toBeDefined();
    expect(player instanceof Player).toBeTruthy();
  });

  it('return the number of used farmers for the turn', () => {
    const mainBoard = new MainBoard(4);
    const player = new Player(mainBoard, () => null);
    expect(player.usedFarmers).toBe(0);
    player.takeAction(mainBoard.findAvailableActionByKey(ActionKey.CLAY_PIT));
    expect(player.usedFarmers).toBe(1);
    player.takeAction(mainBoard.findAvailableActionByKey(ActionKey.FOREST));
    expect(player.usedFarmers).toBe(2);
  });

  it('should take the action and apply its effect on the player', () => {
    const mainBoard = new MainBoard(4);
    const player = new Player(mainBoard, () => null);
    mainBoard.accumulate();
    expect(player.takeAction(mainBoard.findAvailableActionByKey(ActionKey.CLAY_PIT))).toBe(true);
    expect(player.resources).toEqual({
      [ResourceType.FOOD]: 0,
      [ResourceType.SHEEP]: 0,
      [ResourceType.CATTLE]: 0,
      [ResourceType.PIG]: 0,
      [ResourceType.REED]: 0,
      [ResourceType.CLAY]: 1,
      [ResourceType.WOOD]: 0,
      [ResourceType.STONE]: 0,
      [ResourceType.CEREAL]: 0,
      [ResourceType.VEGETABLE]: 0,
    });
  });

  it('should cook one resource', () => {
    // TODO
  });

  it('should discard the resources from the player\'s storage', () => {
    const mainBoard = new MainBoard(4);
    const player = new Player(mainBoard, () => null);
    mainBoard.accumulate();
    mainBoard.accumulate();
    mainBoard.accumulate();
    expect(player.takeAction(mainBoard.findAvailableActionByKey(ActionKey.CLAY_PIT))).toBe(true);
    player.discardResource(ResourceType.CLAY, 2);
    expect(player.resources).toEqual({
      [ResourceType.FOOD]: 0,
      [ResourceType.SHEEP]: 0,
      [ResourceType.CATTLE]: 0,
      [ResourceType.PIG]: 0,
      [ResourceType.REED]: 0,
      [ResourceType.CLAY]: 1,
      [ResourceType.WOOD]: 0,
      [ResourceType.STONE]: 0,
      [ResourceType.CEREAL]: 0,
      [ResourceType.VEGETABLE]: 0,
    });
  });

});
