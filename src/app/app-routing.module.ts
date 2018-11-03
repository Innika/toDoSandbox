import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemPageComponent } from './components/screens/item-page/item-page.component';
import { HomePageComponent } from './components/screens/home-page/home-page.component';

const routes: Routes = [
  { path:"item/:id", component: ItemPageComponent},
  { path: '**', component: HomePageComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
