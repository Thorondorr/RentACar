import { Car } from './car';
import { Color } from './color';
import { ResponseModel } from './responseModel';

export interface colorResponseModel extends ResponseModel {
  data: Color[];
}
