import { ResourceType } from '../resource-type.enum';

export interface IActionParams {
  fieldPosition?: number;
  rooms?: { type: ResourceType.WOOD | ResourceType.CLAY | ResourceType.STONE, positions: number[] };
  stablePositions?: number[];
  fencesPositions?: number[];
  occupationCard?: any; // TODO change with OccupationCard type
  minorImprovementCard?: any; // TODO change with MinorImprovementCard type
  majorImprovementCard?: any; // TODO change with MajorImprovementCard type
}
