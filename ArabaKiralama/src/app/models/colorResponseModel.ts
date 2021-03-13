import { Car } from "./car";
import { ResponseModel } from "./responseModel";

export interface colorResponseModel extends ResponseModel{
    data:Car[];
} 