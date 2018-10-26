import { MajorImprovement } from '../major-improvements/major-improvement.class';
import { MinorImprovement } from '../minor-improvements/minor-improvement.class';
import { Occupation } from '../occupations/occupation.class';
import { ResourceType } from '../resource-type.enum';

export interface IActionParams {
  fieldPosition?: number;
  rooms?: { type: ResourceType.WOOD | ResourceType.CLAY | ResourceType.STONE, positions: number[] };
  stablePositions?: number[];
  fencesPositions?: number[];
  occupation?: Occupation;
  minorImprovement?: MinorImprovement;
  majorImprovement?: MajorImprovement;
  getFirstPlayerToken?: boolean;
  seeds?: Array<ResourceType.CEREAL | ResourceType.VEGETABLE>;
  renovateTo?: ResourceType.CLAY | ResourceType.STONE;
}
