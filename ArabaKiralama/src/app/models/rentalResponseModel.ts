import { Rental } from "./rental";
import { ResponseModel } from "./responseModel";

export interface RentaltResponseModel extends ResponseModel{
    data:Rental[],
   
}