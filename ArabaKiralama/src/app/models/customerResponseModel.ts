import { ResponseModel } from "./responseModel";
import {Customer} from "./customer";
export interface customerResponseModel extends ResponseModel{
    data:Customer[];
}