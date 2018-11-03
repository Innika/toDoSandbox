import { Guid } from "guid-typescript";

export class Item{
constructor(public id : Guid, public value :string, public creationDate : string){}
}