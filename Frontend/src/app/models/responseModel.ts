import { ResponseCode } from "../enums/ResponseCode";


export class ResponseModel {
    public responseCode:ResponseCode=ResponseCode.NotSet;
    public ResponseMessage:string="";
    public dataSet:any="";
}