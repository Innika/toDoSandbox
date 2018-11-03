import {Component} from '@angular/core';
import {ListService} from 'src/app/list.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  value: string = '';
  constructor(private listService : ListService){ }
  get list(){
    return this.listService.list;
  }  
  get removedItemsList(){
    return this.listService.removedItemsList;
  }

  addItem() {
    this.listService.addItem(this.value);
    this.value = "";
  }
  
  onKeydown(event) {
    if (event.key === "Enter") {
        this.addItem();
      }
  }
  
  removeItem(valueIndex: number) {
    this.listService.removeItem(valueIndex);
  }

  restoreItem(valueIndex: number) {
    this.listService.restoreItem(valueIndex);
  }

}