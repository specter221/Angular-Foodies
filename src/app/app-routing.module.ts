import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavComponent }         from './fav/fav.component';

const routes: Routes = [
  { path: 'fav',component: FavComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}