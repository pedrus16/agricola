export interface IActionParams {
  fieldPosition?: number;
  roomsPositions?: number[];
  stablePositions?: number[];
  fencesPositions?: number[];
  occupationCard?: any; // TODO change with OccupationCard type
  minorImprovementCard?: any; // TODO change with MinorImprovementCard type
  majorImprovementCard?: any; // TODO change with MajorImprovementCard type
}
