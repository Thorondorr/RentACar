import { Rental } from "./rental";
import { ResponseModel } from "./responseModel";

export interface ProductResponseModel extends ResponseModel{
    data:Rental[],
   
}