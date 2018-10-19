import { AccumulationAction } from './actions/accumulation-action.class';
import { ActionKey } from './actions/action-keys.enum';
import { Action } from './actions/action.class';
import { ClayPitAction } from './actions/board/clay-pit-action.class';
import { DayLaborerAction } from './actions/board/day-laborer-action.class';
import { FarmExpansionAction } from './actions/board/farm-expansion-action.class';
import { FarmlandAction } from './actions/board/farmland-action.class';
import { FishingAction } from './actions/board/fishing-action.class';
import { ForestAction } from './actions/board/forest-action.class';
import { GrainSeedsAction } from './actions/board/grain-seeds-action.class';
import { LessonsAction } from './actions/board/lessons-action.class';
import { MeetingPlaceAction } from './actions/board/meeting-place-action.class';
import { ReedBankAction } from './actions/board/reed-bank-action.class';
import { BasicWishForChildrenAction } from './actions/cards/basic-wish-for-children-action.class';
import { CattleMarketAction } from './actions/cards/cattle-market-action.class';
import { CultivationAction } from './actions/cards/cultivation-action.class';
import { EasternQuarryAction } from './actions/cards/eastern-quarry-action.class';
import { FarmRedevelopmentAction } from './actions/cards/farm-redevelopment-action.class';
import { FencingAction } from './actions/cards/fencing-action.class';
import { GrainUtilizationAction } from './actions/cards/grain-utilization-action.class';
import { HouseRedevelopmentAction } from './actions/cards/house-redevelopment-action.class';
import { MajorImprovementAction } from './actions/cards/major-improvement-action.class';
import { PigMarketAction } from './actions/cards/pig-market-action.class';
import { SheepMarketAction } from './actions/cards/sheep-market-action.class';
import { UrgentWishForChildrenAction } from './actions/cards/urgent-wish-for-children-action.class';
import { VegetableSeedsAction } from './actions/cards/vegetable-seeds-action.class';
import { WesternQuarryAction } from './actions/cards/western-quarry-action.class';

export class MainBoard {

  private readonly actionPool = {
    period1: [
      new MajorImprovementAction(),
      new FencingAction(),
      new GrainUtilizationAction(),
      new SheepMarketAction(),
    ],
    period2: [
      new BasicWishForChildrenAction(),
      new HouseRedevelopmentAction(),
      new WesternQuarryAction(),
    ],
    period3: [
      new VegetableSeedsAction(),
      new PigMarketAction(),
    ],
    period4: [
      new CattleMarketAction(),
      new EasternQuarryAction(),
    ],
    period5: [
      new UrgentWishForChildrenAction(),
      new CultivationAction(),
    ],
    period6: [
      new FarmRedevelopmentAction(),
    ],
  };

  private actions: Action[];

  constructor(playerCount: number) {
    this.actions = [
      new FarmExpansionAction(),
      new MeetingPlaceAction(),
      new GrainSeedsAction(),
      new FarmlandAction(),
      new LessonsAction(),
      new DayLaborerAction(),
      new ForestAction(),
      new ClayPitAction(),
      new ReedBankAction(),
      new FishingAction(),
    ];
  }

  public addActionForTurn(turnIndex: number) {
    const nextAction = this.pickRandomActionForTurn(turnIndex);
    if (nextAction) {
      this.actions.push(nextAction);
    }
  }

  public accumulate() {
    this.actions
      .filter((action) => action instanceof AccumulationAction)
      .forEach((action: AccumulationAction) => action.accumulate());
  }

  public findAvailableActionByKey(key: ActionKey): Action {
    return this.actions
      .filter((action) => !action.occupied)
      .find((action) => action.key === key);
  }

  private pickRandomActionForTurn(turnIndex: number): Action | null {
      if (turnIndex >= 0 && turnIndex <= 3) {
        return pickRandomAction(this.actionPool.period1);
      }
      if (turnIndex >= 4 && turnIndex <= 6) {
        return pickRandomAction(this.actionPool.period2);
      }
      if (turnIndex >= 7 && turnIndex <= 8) {
        return pickRandomAction(this.actionPool.period3);
      }
      if (turnIndex >= 9 && turnIndex <= 10) {
        return pickRandomAction(this.actionPool.period4);
      }
      if (turnIndex >= 11 && turnIndex <= 12) {
        return pickRandomAction(this.actionPool.period5);
      }
      if (turnIndex === 13) {
        return pickRandomAction(this.actionPool.period6);
      }

      return null;
    }

}

function pickRandomAction(actions: Action[]): Action {
  return actions[Math.floor(Math.random() * actions.length)];
}
