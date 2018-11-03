import {
  Component,
  Input
} from "@angular/core";
import {
  ListService
} from 'src/app/list.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "item-page",
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
})
export class ItemPageComponent {
  id : string;

  constructor(private route: ActivatedRoute, private listService: ListService) {
    this.id = this.route.snapshot.params.id;
  }
  get item() {
    return this.listService.getItemById(this.id);
  }
}
