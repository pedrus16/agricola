import { ActionEffectType } from './action-effect-type.enum';

export interface IActionEffect {
  type: ActionEffectType;
  data: any;
}
