import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './../list-cards/cards/cards.component';

export const routes: Routes = [
  { path: '', component:  CardsComponent},
  { path: 'profile', loadChildren:  './../profile/profile.module#ProfileModule'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
