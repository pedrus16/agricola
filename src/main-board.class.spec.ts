import { AccumulationAction } from './actions/accumulation-action.class';
import { ActionKey } from './actions/action-keys.enum';
import { MainBoard } from './main-board.class';
import { Player } from './player.class';

describe('MainBoard Class', () => {

  it('should create', () => {
    const mainBoard = new MainBoard(4);
    expect(mainBoard).toBeDefined();
    expect(mainBoard instanceof MainBoard).toBeTruthy();
  });

  it('should add a new random Action each call', () => {
    // Mock the Math.random so the function always add the first action from the list
    spyOn(Math, 'random').and.returnValue(0);
    const mainBoard = new MainBoard(2);

    // Period 1
    expect(mainBoard.findAvailableActionByKey(ActionKey.MAJOR_IMPROVEMENT)).toBeFalsy();
    mainBoard.addActionForTurn(0);
    expect(mainBoard.findAvailableActionByKey(ActionKey.MAJOR_IMPROVEMENT)).toBeDefined('MAJOR_IMPROVEMENT not added');

    expect(mainBoard.findAvailableActionByKey(ActionKey.FENCING)).toBeFalsy();
    mainBoard.addActionForTurn(1);
    expect(mainBoard.findAvailableActionByKey(ActionKey.FENCING)).toBeDefined('FENCING not added');

    expect(mainBoard.findAvailableActionByKey(ActionKey.GRAIN_UTILIZATION)).toBeFalsy();
    mainBoard.addActionForTurn(2);
    expect(mainBoard.findAvailableActionByKey(ActionKey.GRAIN_UTILIZATION)).toBeDefined('GRAIN_UTILIZATION not added');

    expect(mainBoard.findAvailableActionByKey(ActionKey.SHEEP_MARKET)).toBeFalsy();
    mainBoard.addActionForTurn(3);
    expect(mainBoard.findAvailableActionByKey(ActionKey.SHEEP_MARKET)).toBeDefined('SHEEP_MARKET not added');

    // Period 2
    expect(mainBoard.findAvailableActionByKey(ActionKey.BASIC_WISH_FOR_CHILDREN)).toBeFalsy();
    mainBoard.addActionForTurn(4);
    expect(mainBoard.findAvailableActionByKey(ActionKey.BASIC_WISH_FOR_CHILDREN))
      .toBeDefined('BASIC_WISH_FOR_CHILDREN not added');

    expect(mainBoard.findAvailableActionByKey(ActionKey.HOUSE_REDEVELOPMENT)).toBeFalsy();
    mainBoard.addActionForTurn(5);
    expect(mainBoard.findAvailableActionByKey(ActionKey.HOUSE_REDEVELOPMENT))
      .toBeDefined('HOUSE_REDEVELOPMENT not added');

    expect(mainBoard.findAvailableActionByKey(ActionKey.WESTERN_QUARRY)).toBeFalsy();
    mainBoard.addActionForTurn(6);
    expect(mainBoard.findAvailableActionByKey(ActionKey.WESTERN_QUARRY)).toBeDefined('WESTERN_QUARRY not added');

    // Period 3
    expect(mainBoard.findAvailableActionByKey(ActionKey.VEGETABLE_SEEDS)).toBeFalsy();
    mainBoard.addActionForTurn(7);
    expect(mainBoard.findAvailableActionByKey(ActionKey.VEGETABLE_SEEDS)).toBeDefined('VEGETABLE_SEEDS not added');

    expect(mainBoard.findAvailableActionByKey(ActionKey.PIG_MARKET)).toBeFalsy();
    mainBoard.addActionForTurn(8);
    expect(mainBoard.findAvailableActionByKey(ActionKey.PIG_MARKET)).toBeDefined('PIG_MARKET not added');

    // Period 4
    expect(mainBoard.findAvailableActionByKey(ActionKey.CATTLE_MARKET)).toBeFalsy();
    mainBoard.addActionForTurn(9);
    expect(mainBoard.findAvailableActionByKey(ActionKey.CATTLE_MARKET)).toBeDefined('CATTLE_MARKET not added');

    expect(mainBoard.findAvailableActionByKey(ActionKey.EASTERN_QUARRY)).toBeFalsy();
    mainBoard.addActionForTurn(10);
    expect(mainBoard.findAvailableActionByKey(ActionKey.EASTERN_QUARRY)).toBeDefined('EASTERN_QUARRY not added');

    // Period 5
    expect(mainBoard.findAvailableActionByKey(ActionKey.URGENT_WISH_FOR_CHILDREN)).toBeFalsy();
    mainBoard.addActionForTurn(11);
    expect(mainBoard.findAvailableActionByKey(ActionKey.URGENT_WISH_FOR_CHILDREN))
      .toBeDefined('URGENT_WISH_FOR_CHILDREN not added');

    expect(mainBoard.findAvailableActionByKey(ActionKey.CULTIVATION)).toBeFalsy();
    mainBoard.addActionForTurn(12);
    expect(mainBoard.findAvailableActionByKey(ActionKey.CULTIVATION)).toBeDefined('CULTIVATION not added');

    // Period 6
    expect(mainBoard.findAvailableActionByKey(ActionKey.FARM_REDEVELOPMENT)).toBeFalsy();
    mainBoard.addActionForTurn(13);
    expect(mainBoard.findAvailableActionByKey(ActionKey.FARM_REDEVELOPMENT))
      .toBeDefined('FARM_REDEVELOPMENT not added');

  });

  it('should call accumulate() on all accumulation actions', () => {
    const mainBoard = new MainBoard(4);
    const action = mainBoard.findAvailableActionByKey(ActionKey.CLAY_PIT) as AccumulationAction;
    spyOn(action, 'accumulate');
    mainBoard.accumulate();
    expect(action.accumulate).toHaveBeenCalledTimes(1);
  });

  it('should call clearPlayer() on all occupied actions', () => {
    const mainBoard = new MainBoard(4);
    const player = new Player(mainBoard, () => null);
    const action = mainBoard.findAvailableActionByKey(ActionKey.FOREST);
    player.takeAction(action, {});
    spyOn(action, 'clearPlayer');
    mainBoard.returnAllFarmers();
    expect(action.clearPlayer).toHaveBeenCalledTimes(1);
  });

  it('should return the action if its not occupied', () => {
    const mainBoard = new MainBoard(4);
    const player = new Player(mainBoard, () => null);
    const action = mainBoard.findAvailableActionByKey(ActionKey.FOREST);
    expect(action).toBeDefined();
    player.takeAction(action, {});
    expect(mainBoard.findAvailableActionByKey(ActionKey.FOREST)).toBeFalsy();
  });

  it('should return a list of actions taken by the player', () => {
    const mainBoard = new MainBoard(4);
    const player = new Player(mainBoard, () => null);
    const forestAction = mainBoard.findAvailableActionByKey(ActionKey.FOREST);
    const clayPitAction = mainBoard.findAvailableActionByKey(ActionKey.CLAY_PIT);
    player.takeAction(forestAction, {});
    player.takeAction(clayPitAction, {});
    const takenActions = mainBoard.getActionsTakenBy(player);
    expect(takenActions.length).toBe(2);
    expect(mainBoard.getActionsTakenBy(player)).toEqual([forestAction, clayPitAction]);
  });

});
