import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { TimeBoxComponent } from './components/common/time-box/time-box.component';
import { HomePageComponent } from './components/screens/home-page/home-page.component';
import { ItemPageComponent } from './components/screens/item-page/item-page.component';
import { ListService } from './list.service';

@NgModule({
  declarations: [
    AppComponent,
    TimeBoxComponent,
    HomePageComponent,
    ItemPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
