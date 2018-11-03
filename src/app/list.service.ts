import { Injectable } from '@angular/core';
import { Item } from './models/item';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  list: Item[];
  removedItemsList: Item[];
  creationTime: string;
  
  constructor() {
    this.list = [];
    this.removedItemsList = [];
  }

  addItem(value: string) {
    if (value.trim() != "") {
      this.creationTime = new Date().toLocaleString();
      this.list.push(new Item(Guid.create(), value, this.creationTime));
      this.list.sort();
    }
  }
  removeItem(valueIndex: number) {
    this.removedItemsList.push(this.list[valueIndex]);
    this.list.splice(valueIndex, 1);
  }
  restoreItem(valueIndex: number) {
    this.list.push(this.removedItemsList[valueIndex]);
    this.removedItemsList.splice(valueIndex, 1)
  }

  getAllItems(){
    return this.list.concat(this.removedItemsList);
  }

  getItemById(id : string){
    return this.getAllItems().find(el => el.id.toString() == id);
  }

}
