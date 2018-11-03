import { Component } from "@angular/core";
import { timeout } from "q";
import { interval, TimeInterval } from "rxjs";

@Component({
    selector: "time-box",
    templateUrl: './time-box.component.html',
    styleUrls: ['./time-box.component.scss'],
})

export class TimeBoxComponent{
    currentTime : string = new Date().toLocaleString();
    interval : any;

    updateTime(){
    this.currentTime = new Date().toLocaleString();
    }

    constructor(){}

    ngOnInit() { 
        this.interval = setInterval(() => this.updateTime(), 1000);
    }

    ngOnDestroy() {
        clearInterval(this.interval);
      }
}